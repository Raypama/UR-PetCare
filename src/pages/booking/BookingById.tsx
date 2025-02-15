import React, { useEffect, useState } from "react";
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
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    null
  ); // State untuk menyimpan ID service yang dipilih
  const { isLogin } = useAuth();

  console.log(selectedServiceId);

  const { id } = useParams();
  const navigate = useNavigate();

  const getService = async () => {
    const token = localStorage.getItem("token");
    const config = {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const response = await API.get(`/service/${id}`, config);
    console.log(response);
    setService(response.data.users);
  };

  useEffect(() => {
    getService();
  }, []);

  console.log(service);

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const allTimeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
  ];

  // Fungsi untuk mengonversi waktu string ke objek Date
  const parseTime = (time: string, date: Date) => {
    const [hour, minute] = time.split(/:| /);
    const isPM = time.includes("PM");
    let hours = parseInt(hour);
    if (isPM && hours !== 12) hours += 12;
    if (!isPM && hours === 12) hours = 0; // Konversi 12 AM ke 0
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      parseInt(minute)
    );
  };

  // Filter waktu agar hanya menampilkan yang belum lewat jika hari ini
  const filteredTimeSlots = allTimeSlots.filter((time) => {
    if (selectedDate.toDateString() !== today.toDateString()) return true;
    return parseTime(time, today) > new Date();
  });

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Silakan pilih waktu!");
      return;
    }
    if (!isLogin) {
      alert("Silahkan login terlebih dahulu");
    }
    const book = {
      serviceId: id,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
      quantity: 1,
    };
    const response = await API.post("/booking", book);
    console.log(response);

    navigate("/my-profile");
  };

  return (
    <MainTemplate pageTitle="Books Pages !!!">
      <div>
        <div className="font-bold  w-full px-10 text-xl text-start">
          <h1>Service Selected:</h1>
        </div>
        <div className="flex flex-row-reverse">
          {/* Sidebar tetap di tempat */}
          <div className="border-l-2 border-gray-100 dark:border-gray-700 h-screen p-4  w-1/2">
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
              <ul
                id="timetable"
                className="grid w-full grid-cols-3 mb-5 overflow-y-auto max-h-64 border p-2 rounded-lg"
              >
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

          {/* Konten utama yang bisa di-scroll */}
          <div className=" pt-4 px-10 overflow-y-auto min-h-screen  ">
            <div className="  h-7">
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
