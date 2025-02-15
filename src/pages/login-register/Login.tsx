// import React from 'react'

// import { useNavigate } from "react-router-dom"
import MainTemplate from "../../components/templates/MainTemplate";
import { useState } from "react";
// import axios from "axios"
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import API from "../../utils/api";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return; // Jika sudah loading, hentikan
    if (!form.email.trim() || !form.password.trim()) {
      toast.error("Email and password input required");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error(
        "Email format not valid (example@gmail.com/.co.id or other..)"
      );
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    }

    
    try {
      setIsLoading(true);
      const response = await API.post("/login", form);
      console.log(response);

      if (response.data.statusCode === 201) {
        const user = response.data.data;

        // Dispatch login action
        dispatch({
          type: "LOGIN",
          payload: {
            user: user,
            token: user.token,
          },
        });

        toast.success(response.data.massage);

        // Redirect berdasarkan role
        if (user.role === "customer") {
          navigate("/");
        } else if (user.role === "karyawan") {
          navigate("/admin/dashboard");
        }
      }
    } catch (error: any) {
      console.log(error);
      if (error.response && error.response.data.statusCode === 400) {
        toast.error(error.response.data.massage);
      }
    } finally {
      setIsLoading(false); // Reset loading di akhir
    }
  };

  return (
    <MainTemplate pageTitle="login-pages">
      <div className="h-screen pt-10 flex flex-col items-center w-full ">
        <h1 className="text-2xl font-bold  mb-6">Login Pages</h1>
        <div className=" h-auto w-96 border rounded shadow-md mb-5 p-2">
          <form className="  flex flex-col items-center" onSubmit={handleLogin}>
            <div className=" my-2 rounded text-lg font-medium">
              <label htmlFor="" className="block">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded "
                placeholder="example@gmail/mail/yahoo.com / .co.id"
                onChange={handleChange}
              />
            </div>
            <div className=" my-2 rounded text-lg font-medium">
              <label htmlFor="" className="block   ">
                Password
              </label>
              <input  
                type="password"
                name="password"
                className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded"
                placeholder="input password"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center shadow-lg font-medium my-3">
              <button
                type="submit"
                disabled={isLoading} // Disable tombol saat loading
                className={`bg-slate-400 w-32 p-2 h-10 rounded text-sm font-semibold shadow-sm ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Loading..." : "Login Now"}
              </button>
            </div>
          </form>
        </div>
        <div className="  italic">
          <Link to={"/register"}>
            <p className="">
              If you don't have an account yet,{" "}
              <span className="font-semibold">sign up here.</span>{" "}
            </p>
          </Link>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Login;
