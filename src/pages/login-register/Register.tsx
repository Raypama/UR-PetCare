// import React from 'react'

import { useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
import API from "../../utils/api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    photo: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      //setForm(e.target.value) sblmnya sprti ini
      [e.target.name]:
        e.target.type === "file" ? e.target?.files?.[0] : e.target.value,
    });
  };
  const navigate = useNavigate();
  // const { dispatch } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const checkEmail = async (email: string): Promise<boolean> => {
      try {
        const response = await API.get(`/check-email?email=${email}`);
        return response.data.exists; // Server merespons true/false
      } catch (error) {
        console.log("Error checking email:", error);
        return false;
      }
    };
    const getUsers = await API.get("/users");
    const userPhones = getUsers.data.data.map(
      (user: any) => user.phone && user.name
    );
    console.log(userPhones);

    if (
      !form.email.trim() ||
      !form.password.trim() ||
      !form.name.trim() ||
      !form.address.trim() ||
      !form.phone.trim()
    ) {
      toast.error("All input are required");
      return;
    }
    const emailExists = await checkEmail(form.email);
    if (emailExists) {
      toast.error("Email already registered");
      return;
    }

    if (userPhones.includes(form.phone)) {
      toast.error("Phone number already used");
      return;
    }
    
    if (userPhones.includes(form.name)) {
      toast.error("Name already used");
      return;
    }
    
    try {
      const uploadForm = new FormData();
      uploadForm.append("name", form.name);
      uploadForm.append("email", form.email);
      uploadForm.append("password", form.password);
      uploadForm.append("address", form.address);
      uploadForm.append("phone", form.phone);
      if (form.photo) {
        uploadForm.append("photo", form.photo);
      }
      const response = await API.post("/register", uploadForm);
      //   console.log(uploadForm + 'uploadform');
      toast.success(response.data.message || "Registration successful");
      navigate("/login-pages");
    } catch (error) {
      console.log(error);
      toast.error("failed login, try again");
    }
  };
  return (
    <MainTemplate pageTitle="Register Pages">
      <div className="h-auto mb-10 pt-44 flex flex-col items-center w-full ">
        <div>
          <h1 className="text-2xl font-bold  mb-6">Register Pages</h1>
        </div>
        <div className=" h-auto w-96 border rounded shadow-md p-2">
          <form
            className="  flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <div className=" my-2 rounded text-lg font-medium">
              <label htmlFor="" className="block">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded "
                placeholder="input your username here"
                onChange={handleChange}
              />
            </div>
            <div className=" my-2 rounded text-lg font-medium">
              <label htmlFor="" className="block">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
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
                value={form.password}
                className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded"
                placeholder="input password"
                onChange={handleChange}
              />
            </div>
            <div className=" my-2 rounded text-lg font-medium">
              <label htmlFor="" className="block   ">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded"
                placeholder="input phone number"
                onChange={handleChange}
              />
            </div>
            <div className=" my-2 rounded text-lg font-medium">
              <label htmlFor="" className="block   ">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded"
                placeholder="where do u live?"
                onChange={handleChange}
              />
            </div>
            <div className=" my-2 rounded text-lg font-medium">
              <label htmlFor="" className="block   ">
                Photo
              </label>
              <input
                type="file"
                name="photo"
                className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded"
                placeholder="uploads your profile here"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center shadow-lg font-medium my-3">
              <button className="bg-slate-400 w-32 p-2 h-10 rounded text-sm font-semibold shadow-sm">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Register;
