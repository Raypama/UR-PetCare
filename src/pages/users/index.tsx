// import React from 'react'

import { Card } from "flowbite-react";
import MainTemplate from "../../components/templates/MainTemplate";
import { useEffect, useState } from "react";
import API from "../../utils/api";

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
    <MainTemplate pageTitle="Hoops Users-List">
      <div className="h-auto pt-40  items-center w-full ">
        <div className=" w-full h-auto p-3">
          <div className="mb-5">
            <h1 className="font-bold text-2xl h-">Customer List</h1>
          </div>
          {users && (
            <div className="grid grid-cols-4  gap-5  justify-items-center">
              {users.map((item) => (
                <div className="min-h-full">
                  <Card
                    className="shadow-md h-full rounded-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={item.photo}
                    aria-setsize={23}
                    key={item.id}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Name : {item.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Id User : {item.id}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Address : {item.address}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Email : {item.email}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Phone Number : {item.phone}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Role : {item.role}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainTemplate>
  );
}

export default User;
