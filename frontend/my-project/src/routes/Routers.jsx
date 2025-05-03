import Banner from "../Components/Banner";
import About from "../Components/About";
import Service from "../Pages/Service";
import Feature from "../Components/Feature";
import Doctor from "../Components/Doctor";
import Faq from "../Components/faq/Faq";
import FindDoctor from "../Pages/Doctor-page/FindDoctor";
import DoctorDetail from "../Pages/Doctor-page/DoctorDetail";
import Login from "../Pages/login-form/Login";
import Register from "../Pages/register/Register";
import Contact from "../Pages/contact/Contact";
import Testimonial from "../Components/testimonial/Testimonial";
import UserAccount from "../Dashboard/user-account/UserAccount";
import DoctorAccount from "../Dashboard/doctor-account/DoctorAccount";
import ProtectedRoutes from "./ProtectedRoutes";
import CheckoutSuccess from "../Pages/Doctor-page/CheckoutSuccess";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Banner />} />

        <Route path="/findDoctor" element={<FindDoctor />} />
        <Route path="/service" element={<Service />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/doctors/:id" element={<DoctorDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />

        <Route
          path="/users/profile/me"
          element={
            <ProtectedRoutes allowedRoles={["patient"]}>
              <UserAccount />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/doctors/profile/me"
          element={
            <ProtectedRoutes allowedRoles={["doctor"]}>
              <DoctorAccount />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default Routers;
