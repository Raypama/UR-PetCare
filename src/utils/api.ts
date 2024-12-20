import axios, { AxiosInstance } from "axios";



const API: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    // headers: {
    //     "Content-Type" : "application/json"
    // }
})

//untuk masukin token ke headers API kurang lebih begini bisa
API.interceptors.request.use(
        (config)=> {
            const token = localStorage.getItem('token')
           if(token){
                if(config.headers){
                    config.headers["Authorization"] = `Bearer ${token}`
                }
            }
            return config
        },
        (error) => {
            return Promise.reject(error) + 'Api interceptors error'
        }
)
export default API