// import React from 'react'

import { useEffect, useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../utils/api";
import { useAuth } from "../../context/AuthContext";

const UpdateUser = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    photo: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);
  
  useEffect(() => {
    if (user?.id) {
      API.get(`/users/${user.id}`)
      .then((response) => {
        const userData = response.data.data;
        setForm({
          name: userData.name,
          email: userData.email,
          password: "********", // Masked for security
          phone: userData.phone || "",
          address: userData.address || "",
          photo: null,
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to fetch user data");
        });
      }
    }, [user?.id]);
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]:
      e.target.type === "file" ? e.target?.files?.[0] : e.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    
    if (!form.address.trim() || !form.phone.trim()) {
      toast.error("All input fields are required");
      setIsLoading(false);
      return;
    }
    const getUsers = await API.get("/users");
    const userPhones = getUsers.data.data.map((user: any) => user.phone);
    if (userPhones.includes(form.phone)) {
        toast.error("Phone number already used");
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return;
      }
    // if (!isChecked) {
    //   toast.warning("You must agree to the terms and conditions!");
    //   setIsLoading(false);
    //   return;
    // }

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

      const response = await API.patch(`/users/${user?.id}`, uploadForm);
      toast.success(response.data.message || "Update successful");
      navigate("/my-profile");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update, try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainTemplate pageTitle="Updated Pages">
      <div className="mb-10  flex flex-col items-center w-full ">
        <div>
          <h1 className="text-2xl font-bold  mb-6">Update User</h1>
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
                className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded  cursor-not-allowed"
                placeholder="input your username here"
                onChange={handleChange}
                readOnly
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
                className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded cursor-not-allowed"
                placeholder="example@gmail/mail/yahoo.com / .co.id"
                onChange={handleChange}
                readOnly
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
                className="w-80 px-2 py-1 text-sm bg-gray-200 shadow-sm rounded cursor-not-allowed"
                placeholder="input password"
                onChange={handleChange}
                readOnly
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
            {/* Checkbox untuk menyetujui */}
            {/* <div className="my-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="w-4 h-4 mr-2"
              />
              <label htmlFor="terms" className="text-sm font-medium">
                I agree to the terms and conditions
              </label>
            </div> */}
            <div className="flex justify-center shadow-lg font-medium my-3">
              <button
                type="submit"
                disabled={isLoading}
                aria-disabled={isLoading} // Aksesibilitas tambahan
                className={`bg-slate-400 w-32 p-2 h-10 rounded text-sm font-semibold shadow-sm ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Loading..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainTemplate>
  );
};

export default UpdateUser;
