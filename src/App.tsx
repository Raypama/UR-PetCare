import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
import PriceList from "./pages/priceList";
import CustomerService from "./pages/customerService";
import TodoApp from "./pages/todoApp";
import Login from "./pages/login-register/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import User from "./pages/users";
import { useVerifyToken } from "./hooks/useVerifyToken";
import { useEffect } from "react";
import Service from "./pages/service/Service";
import Register from "./pages/login-register/Register";
import ServiceAdmin from "./pages/admins/ControllerService";
import AdminRoute from "./components/AdminRoute";
import Dashboard from "./pages/admins/Dashboard";
import DailyReport from "./pages/DailyReport";

function App() {
  const { verifyToken } = useVerifyToken();
  useEffect(() => {
    verifyToken();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-pages" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/daily" element={<DailyReport />} />
        <Route element={<PrivateRoute />}>
          {/* semua yg ada didalam sini yg di maksud outlet yang berarti harus login dlu */}
          <Route path="/about" element={<About />} />
          <Route path="/priceList" element={<PriceList />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/service" element={<Service />} />
          <Route path="/admin" element={<AdminRoute />}>
            <Route path="todo-app" element={<TodoApp />} />
            <Route path="service" element={<ServiceAdmin />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<User />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>
        {/* Tambahkan route lainnya */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
