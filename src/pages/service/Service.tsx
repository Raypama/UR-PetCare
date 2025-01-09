// import React from 'react'

import { Link } from "react-router-dom";
import MainTemplate from "../../components/templates/MainTemplate";
import API from "../../utils/api";
import { useEffect, useState } from "react";
import numeral from "numeral";

interface ServiceProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

const Service = () => {
  const [service, setService] = useState<ServiceProps[] | null>(null);

  const getService = async () => {
    const token = localStorage.getItem("token");
    const config = {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const response = await API.get("/service", config);
    console.log(service);
    setService(response.data.data);
  };
  useEffect(() => {
    getService();
  }, []);
  // getService();
  return (
    <MainTemplate pageTitle="Service Pages">
      <div className="h-auto px-4 font-sans mt-40">
        <div className="mb-10">
          <div className="font-extrabold w-full mb-5 text-2xl text-center motion-preset-focus motion-duration-1500">
            <h1>My Hoops Points Service</h1>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {service?.map((item) => (
              <div
                key={item.id}
                className="shadow-md border bg-slate-100 rounded font-sans  p-2 h-48 motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[1.00s] motion-duration-[1.50s]/scale motion-duration-[1.50s]/translate motion-duration-[1.80s]/rotate"
              >
                <Link
                  to={"##"}
                  className="flex flex-col justify-center h-full px-5"
                >
                  <h1 className="mb-1 text-lg font-semibold">
                    <span className="font-semibold">Service :</span> {item.name}
                  </h1>
                  <p className="mb-2 text-base">
                    <span className="font-semibold">Desc :</span>{" "}
                    {item.description}
                  </p>
                  <p className="text-base mb-4">
                    <span className="font-semibold">Price :</span>{" "}
                    <span className="italic">
                      Idr. {numeral(item.price).format("0,0")}
                    </span>{" "}
                  </p>
                  <button className="text-center shadow-md h-10 rounded mb-2 bg-green-300 hover:motion-preset-oscillate motion-duration-1500">
                    add to Chart
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Service;
