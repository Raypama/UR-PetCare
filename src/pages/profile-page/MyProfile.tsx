import { useEffect, useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate";
import { useAuth } from "../../context/AuthContext";
import API from "../../utils/api";
import { NavLink } from "react-router-dom";
import unknownImage from "/assets/unknown.jpeg";
import numeral from "numeral";
import Payment from "../../components/organisms/Payment";

interface UserProps {
  id: number;
  name: string;
  email: string;
  address: string;
  photo: string;
  phone: string;
  role: string;
}

interface BookingProps {
  id: number;
  service: {
    id: number;
    name: string;
    time: string;
  };
  date: string; // Menggunakan string untuk format lebih aman
  totalPrice: number | string;
  status: string;
}

const MyProfile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [bookings, setBookings] = useState<BookingProps[]>([]);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const getUser = async () => {
    if (!user?.id) return;
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await API.get(`/users/${user.id}`, config);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const getBookingUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await API.get("/booking-user", config);
      const filterData = response.data.data.filter((item: BookingProps) =>
        // new Date(item.date) < new Date()
      new Date(item.date).getTime() >= new Date().setHours(0, 0, 0, 0)
    );
    console.log(new Date(response.data.data[0].date));
    console.log(new Date());

    const dateExample = new Date(response.data.data[0].date)
    const dateNew = new Date()

    const resultDate = dateExample < dateNew 
    console.log(resultDate);
    
      
      setBookings(filterData);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      getUser();
      getBookingUser();
    }
  }, [user?.id]);

  const totalAllBookings = bookings.reduce(
    (acc, item) => acc + Number(item.totalPrice || 0),
    0
  );

  return (
    <MainTemplate pageTitle="Profile & Booking">
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white p-6 shadow-lg">
          {userData ? (
            <div className="text-center">
              <img
                src={userData.photo ? userData.photo : unknownImage}
                onError={(e) => (e.currentTarget.src = unknownImage)}
                alt="Profile"
                className="w-24 sm:w-28 md:w-32 lg:w-36 rounded-full mx-auto mb-4 border-2 border-gray-300"
              />
              <h2 className="text-base sm:text-lg font-semibold">{userData.name}</h2>
              <p className="text-xs sm:text-sm text-gray-600">{userData.email}</p>
              <p className="text-xs sm:text-sm text-gray-600">{userData.phone}</p>
              <p className="text-xs sm:text-sm text-gray-600">{userData.address}</p>
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading profile...</p>
          )}
          <NavLink to={"/update"} className="flex justify-center">
            <button className="bg-gray-400 w-28 sm:w-32 p-2 h-10 rounded text-xs sm:text-sm font-semibold shadow-sm mt-5">
              Update Users
            </button>
          </NavLink>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 py-4 px-4 sm:px-6 lg:px-8 pb-8">
          <div className="mb-5 mt-3">
            <h1 className="text-xl sm:text-2xl font-bold">Your Bookings :</h1>
          </div>
          <div className="bg-white p-4 sm:p-6 mb-5 rounded-lg shadow-md">
            {bookings.length > 0 ? (
              <ul>
                {bookings.map((item) => (
                  <li
                    key={item.id}
                    className="border-b flex flex-col sm:flex-row justify-between py-3 last:border-none gap-2"
                  >
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{item.service?.name}</p>
                      <p className="text-xs sm:text-sm text-black-500">
                        <span>
                          Date: {new Date(item.date).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <div
                          className={`text-xs sm:text-sm font-semibold h-7 w-auto px-3 rounded flex items-center justify-center mt-2 sm:mt-0 ${
                            item.status === "complete"
                              ? "bg-green-200 text-green-800"
                              : "bg-yellow-200 text-yellow-800"
                          }`}
                        >
                          <span>{item.status}</span>
                        </div>
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-sm sm:text-base">
                        Rp. {numeral(item.totalPrice).format("0,0")}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm sm:text-base">No bookings found.</p>
            )}
          </div>
  
          {/* Total Charges & Payment Button */}
          <div className="flex flex-col items-center sm:items-end">
            <p className="text-base sm:text-lg font-bold">
              Total Charges: Rp. {numeral(totalAllBookings).format("0,0")}
            </p>
            <button
              onClick={() => setIsPaymentOpen(true)}
              className="w-full sm:w-60 h-10 sm:h-12 font-semibold bg-gray-400 hover:bg-gray-300 mt-2 hover:text-emerald-500 shadow-sm rounded"
            >
              Pay Now
            </button>
            {isPaymentOpen && <Payment onClose={() => setIsPaymentOpen(false)} />}
          </div>
        </main>
      </div>
    </MainTemplate>
  );
  
};

export default MyProfile;
