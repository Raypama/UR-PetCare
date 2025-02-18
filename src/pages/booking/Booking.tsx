import { useEffect, useState } from "react";
import API from "../../utils/api";
import MainTemplate from "../../components/templates/MainTemplate";
import ServiceCard from "../../components/molecules/ServiceCard";

interface ServiceProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

const Booking = () => {
  // const { id } = useParams();
  const [service, setService] = useState<ServiceProps[] | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    null
  ); // State untuk menyimpan ID service yang dipilih

  console.log(selectedServiceId);

  // GET SERVICE
  const getService = async () => {
    const token = localStorage.getItem("token");
    const config = {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const response = await API.get("/service", config);
    setService(response.data.data);
  };
  // USE CYCLE
  useEffect(() => {
    getService();
  }, []);

  // const today = new Date();
  // const [selectedDate, setSelectedDate] = useState(today);
  // const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // const allTimeSlots = [
  //   "09:00 AM",
  //   "09:30 AM",
  //   "10:00 AM",
  //   "10:30 AM",
  //   "11:00 AM",
  //   "11:30 AM",
  //   "12:00 PM",
  //   "12:30 PM",
  //   "01:00 PM",
  //   "01:30 PM",
  //   "02:00 PM",
  //   "02:30 PM",
  //   "03:00 PM",
  //   "03:30 PM",
  //   "04:00 PM",
  //   "04:30 PM",
  //   "05:00 PM",
  //   "05:30 PM",
  //   "06:00 PM",
  //   "06:30 PM",
  //   "07:00 PM",
  //   "07:30 PM",
  //   "08:00 PM",
  // ];

  // Fungsi untuk mengonversi waktu string ke objek Date
  // const parseTime = (time: string, date: Date) => {
  //   const [hour, minute] = time.split(/:| /);
  //   const isPM = time.includes("PM");
  //   let hours = parseInt(hour);
  //   if (isPM && hours !== 12) hours += 12;
  //   if (!isPM && hours === 12) hours = 0; // Konversi 12 AM ke 0
  //   return new Date(
  //     date.getFullYear(),
  //     date.getMonth(),
  //     date.getDate(),
  //     hours,
  //     parseInt(minute)
  //   );
  // };

  // Filter waktu agar hanya menampilkan yang belum lewat jika hari ini
  // const filteredTimeSlots = allTimeSlots.filter((time) => {
  //   if (selectedDate.toDateString() !== today.toDateString()) return true;
  //   return parseTime(time, today) > new Date();
  // });

  // const handleTimeSelect = (time: string) => {
  //   setSelectedTime(time);
  // };
  // SUBMIT
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // if (!selectedTime) {
  //   //   alert("Silakan pilih waktu!");
  //   //   return;
  //   // }
  //   // const book = {
  //   //   serviceId: selectedServiceId,
  //   //   date: selectedDate.toISOString().split("T")[0],
  //   //   time: selectedTime,
  //   //   quantity: 1,
  //   // };
  //   // const response = await API.post("/booking", book);
  //   // console.log(response);
  // };

  return (
    <MainTemplate pageTitle="Books Pages !!!">
      <div className="p-5 overflow-y-auto h-screen">
        {/* Judul */}
        <div className="font-extrabold w-full mb-5 text-xl sm:text-2xl text-center">
          <h1>Select Service</h1>
        </div>
  
        {/* Grid Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {service?.map((item) => (
            <ServiceCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              onSelectService={(id) => setSelectedServiceId(id)}
              isDetail={false}
            />
          ))}
        </div>
      </div>
    </MainTemplate>
  );
  
};

export default Booking;
