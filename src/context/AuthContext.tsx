// import { createContext, Dispatch, ReactNode, useContext, useReducer, useEffect } from "react";
// import API from "../utils/api"; // Pastikan Anda memiliki utils untuk API

// // Interface user
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     role: string;
// }

// // Interface untuk state
// interface AuthState {
//     user: User | null;
//     isLogin: Boolean;
// }

// // Tipe untuk action reducer
// type AuthAction = 
//     | { type: "LOGIN"; payload: { user: User; token: string } }
//     | { type: "LOGOUT" };

// // Initial state
// const initialState: AuthState = {
//     user: null,
//     isLogin: false,
// };

// // Reducer
// const authReducer = (state: AuthState, action: AuthAction): AuthState => {
//     switch (action.type) {
//         case "LOGIN":
//             localStorage.setItem("token", action.payload.token);
//             return {
//                 user: action.payload.user,
//                 isLogin: true,
//             };
//         case "LOGOUT":
//             localStorage.removeItem("token");
//             return {
//                 user: null,
//                 isLogin: false,
//             };
//         default:
//             return state;
//     }
// };

// // Context type
// interface AuthContextType extends AuthState {
//     dispatch: Dispatch<AuthAction>;
// }

// // Membuat context
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // Props untuk provider
// interface AuthProviderProps {
//     children: ReactNode;
// }

// // AuthContextProvider dengan penambahan verifikasi token
// export const AuthContextProvider = ({ children }: AuthProviderProps) => {
//     const [state, dispatch] = useReducer(authReducer, initialState);

//     useEffect(() => {
//         const verifyToken = async () => {
//             const token = localStorage.getItem("token");
//             if (!token) return;

//             try {
//                 const response = await API.get("/verify-token", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 if (response.status === 200) {
//                     const user = response.data.user; // Pastikan struktur data sesuai dengan respons API
//                     dispatch({
//                         type: "LOGIN",
//                         payload: { user, token },
//                     });
//                 }
//             } catch (error) {
//                 console.error("Token verification failed:", error);
//                 dispatch({ type: "LOGOUT" });
//             }
//         };

//         verifyToken();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ ...state, dispatch }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Hook untuk menggunakan context
// export const useAuth = (): AuthContextType => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error("AuthContext must be used within an AuthContextProvider");
//     }
//     return context;
// };



import { createContext, Dispatch, ReactNode, useContext, useReducer, useEffect } from "react";
import API from "../utils/api"; // Pastikan Anda memiliki utils API

// Interface user
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

// Interface untuk state
interface AuthState {
    user: User | null;
    isLogin: boolean;
    loading: boolean; // Untuk loading state
}

// Tipe untuk action reducer
type AuthAction =
    | { type: "LOGIN"; payload: { user: User; token: string } }
    | { type: "LOGOUT" }
    | { type: "STOP_LOADING" }; // Untuk menghentikan loading state

// Initial state
const initialState: AuthState = {
    user: null,
    isLogin: false,
    loading: true,
};

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            return {
                user: action.payload.user,
                isLogin: true,
                loading: false,
            };
        case "LOGOUT":
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return {
                user: null,
                isLogin: false,
                loading: false,
            };
        case "STOP_LOADING":
            return { ...state, loading: false };
        default:
            return state;
    }
};

// Context type
interface AuthContextType extends AuthState {
    dispatch: Dispatch<AuthAction>;
}

// Membuat context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props untuk provider
interface AuthProviderProps {
    children: ReactNode;
}

// AuthContextProvider
export const AuthContextProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("token");
            const userData = localStorage.getItem("user");

            if (token && userData) {
                dispatch({
                    type: "LOGIN",
                    payload: { user: JSON.parse(userData), token },
                });
            } else if (token) {
                try {
                    const response = await API.get("/verify-token", {
                        headers: { Authorization: `Bearer ${token}` },
                    });

                    if (response.status === 200) {
                        const user = response.data.user;
                        dispatch({
                            type: "LOGIN",
                            payload: { user, token },
                        });
                    }
                } catch (error: any) {
                    if (error.response?.status === 401) {
                        console.error("Token expired or invalid. Logging out...");
                    } else {
                        console.error("Error verifying token:", error.message);
                    }
                    dispatch({ type: "LOGOUT" });
                }
            } else {
                dispatch({ type: "STOP_LOADING" });
            }
        };

        verifyToken();
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook untuk menggunakan context
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("AuthContext must be used within an AuthContextProvider");
    }
    return context;
};

// Hook tambahan untuk Role-Based Access Control (RBAC)
export const useAuthorization = (requiredRole: string): boolean => {
    const { user } = useAuth();
    return user?.role === requiredRole;
};
