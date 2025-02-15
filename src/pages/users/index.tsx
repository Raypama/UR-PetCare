// import React from 'react'

import { Card } from "flowbite-react";
// import MainTemplate from "../../components/templates/MainTemplate";
import { useEffect, useState } from "react";
import API from "../../utils/api";
import MainTemplateSeller from "../../components/templates/MainTemplateSeller";

  interface UserProps {
    id: number;
    name: string;
    email: string;
    address: string;
    photo: string;
    phone: string;
    role: string;
  }

function User() {
  const [users, setUsers] = useState<UserProps[] | null>(null);

  // fetch('http://localhost:8000/users')
  // .then(response => response.json())
  // .then(json => setUsers(json.data)
  // )
  // console.log(users);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    const config = {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const response = await API.get("/users", config);
    console.log(users);
    setUsers(response.data.data);
  };

  useEffect(() => {
    getUser();
  }, []); //[] berfungsi untuk menjalankan hanya satu kali saja kl ga pake array dia merender tak terbatas

  return (
    <MainTemplateSeller pageTitle="Hoops Users-List">
  <div className="h-auto items-center w-full">
    <div className="w-full h-auto p-3">
      <div className="mb-5">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Customer List
        </h1>
      </div>
      {users && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 justify-items-center">
          {users.map((item) => (
            <div className="min-h-full p-0 w-full max-w-sm">
              <Card
                className="shadow-md h-full p-0 rounded-2"
                aria-setsize={10}
                key={item.id}
              >
                <img
                  src={item.photo}
                  alt="img user"
                  className="h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-cover shadow-lg rounded-full mx-auto"
                />
                <h5 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white  mt-3">
                  Name : {item.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 ">
                  Id User : {item.id}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 ">
                  Address : {item.address}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 ">
                  Email : {item.email}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 ">
                  Phone Number : {item.phone}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 ">
                  Role : {item.role}
                </p>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</MainTemplateSeller>

  );
}

export default User;
