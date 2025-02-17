import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MainTemplate from "../../components/templates/MainTemplate";
import API from "../../utils/api";
import ServiceCard from "../../components/molecules/ServiceCard";
import { Datepicker } from "flowbite-react";
import { useAuth } from "../../context/AuthContext";

interface ServiceProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

const BookingById = () => {
  const [service, setService] = useState<ServiceProps>();
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const { isLogin } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getService = async () => {
      const token = localStorage.getItem("token");
      const config = {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await API.get(`/service/${id}`, config);
      setService(response.data.users);
    };
    getService();
  }, [id]);

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate waktu otomatis (08:00 - 21:00, tiap 30 menit)
  const generateTimeSlots = () => {
    const slots = [];
    let start = 8 * 60; // 08:00 dalam menit
    const end = 21 * 60; // 21:00 dalam menit
    while (start < end) {
      const hours = Math.floor(start / 60);
      const minutes = start % 60;
      slots.push(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`);
      start += 30;
    }
    return slots;
  };

  const allTimeSlots = useMemo(generateTimeSlots, []);

  const parseTime = (time: string, date: Date) => {
    const [hour, minute] = time.split(":").map(Number);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, minute);
  };

  const filteredTimeSlots = allTimeSlots.filter((time) => {
    if (selectedDate.toDateString() !== today.toDateString()) return true;
    return parseTime(time, today) > new Date();
  });

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Silakan pilih waktu!");
      return;
    }
    if (!isLogin) {
      alert("Silakan login terlebih dahulu");
      return;
    }
    const book = {
      serviceId: id,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
      quantity: 1,
    };
    const response = await API.post("/booking", book);
    navigate("/my-profile");
  };

  return (
    <MainTemplate pageTitle="Booking Page">
      <div>
        <div className="font-bold w-full px-10 text-xl text-start">
          <h1>Service Selected:</h1>
        </div>
        <div className="flex flex-row-reverse">
          <div className="border-l-2 border-gray-100 dark:border-gray-700 h-screen p-4 w-1/2">
            <div className="w-full mb-2">
              <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                Booking Date
              </label>
              <Datepicker
                value={selectedDate}
                onChange={(date) => setSelectedDate(date || today)}
                minDate={today}
                weekStart={1}
              />
            </div>

            <div className="w-full">
              <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                Select Time:
              </label>
              <ul className="grid w-full grid-cols-3 mb-5 overflow-y-auto max-h-64 border p-2 rounded-lg">
                {filteredTimeSlots.map((time, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      id={`time-${index}`}
                      name="timetable"
                      className="hidden peer"
                      onChange={() => handleTimeSelect(time)}
                    />
                    <label
                      htmlFor={`time-${index}`}
                      className={`inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center cursor-pointer border rounded-lg 
                        ${
                          selectedTime === time
                            ? "border-blue-700 bg-blue-50 text-blue-700"
                            : "text-gray-500 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                        }`}
                    >
                      {time}
                    </label>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleSubmit}
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Book Now!!
                </button>
                <button
                  onClick={() => {
                    setSelectedDate(today);
                    setSelectedTime(null);
                  }}
                  className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
          <div className="pt-4 px-10 overflow-y-auto min-h-screen">
            <div className="h-7">
              {service && (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                  price={service.price}
                  onSelectService={(id) => setSelectedServiceId(id)}
                  isDetail={false}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default BookingById;
