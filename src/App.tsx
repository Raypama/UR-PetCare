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
import Service from "./pages/sevice/Service";
import Register from "./pages/login-register/Register";

function App() {
  const { verifyToken } = useVerifyToken();
  useEffect(() => {
    verifyToken();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login-pages" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          {/* semua yg ada didalam sini yg di maksud outlet yang berarti harus login dlu */}
          <Route path="/about" element={<About />} />
          <Route path="/priceList" element={<PriceList />} />
          <Route path="/todo-app" element={<TodoApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/users" element={<User />} />
          <Route path="/service" element={<Service />} />
        </Route>
        {/* Tambahkan route lainnya */}
      </Routes>
    </Router>
  );
}

export default App;
