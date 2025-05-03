import React, { useContext } from "react";
import img from "../assets/Images/img.png";
import find from "../assets/Images/find.png";
import location from "../assets/Images/location.png";
import booking from "../assets/Images/booking.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About";
import Service from "../Pages/Service";
import Feature from "./Feature";
import Doctor from "./Doctor";
import Faq from "./faq/Faq";
import Testimonial from "./testimonial/Testimonial";
import { authContext } from "../context/AuthContext";
function Banner() {
  const { user, role } = useContext(authContext);
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-5 flex flex-col mx-auto md:flex-row py-10 md:ps-20 ">
        <div className=" order-2 md:order-1 w-full md:w-1/2 md:mt-32 mt-12 md:pr-12">
          <div className="space-y-6 md:space-y-12">
            <h1 className=" text-4xl md:text-6xl font-bold leading-tight">
              We help patients
              <br /> live a <span className="span-text">healthy</span>,
              <br />
              <span className="span-text">longer life.</span>
            </h1>
            <p className=" text-[16px] md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad facere
              quod ipsam sit similique in tempore. Ipsum aspernatur enim
              sapiente, doloremque consequuntur harum perspiciatis dicta
              provident nihil dignissimos numquam voluptatem.
            </p>
          </div>
          <Link to={role === "doctor" ? "/doctors/profile/me" : "/findDoctor"}>
            <button className="btn btn-active outline-none mt-5 md:mt-7 text-white banner-btn">
              {role === "doctor"
                ? "View Appointments"
                : "Request an Appointment"}
            </button>
          </Link>
        </div>
        <div className=" order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-20 splash ms-[20px] md:ms-[10px]">
          {" "}
          <img
            src={img}
            alt=""
            className=" md:ms-3 w-full md:w-auto h-auto
           "
          />
        </div>
      </div>
      {/*=========banner counter=========*/}
      <div className=" flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 mt-10 md:mt-16 counter md:mt-[40px]">
        <div className="">
          <h2 className="text-[36px] leading-[56px] md:text-[44px] md:leading:[54px] font-[700] text-neutral-800 text-center">
            30+
          </h2>
          <span className=" h-2 bg-amber-400 rounded-full block mt-[-14px]"></span>
          <p className="mt-2 text-sm text-center">Years of Experience</p>
        </div>
        <div>
          <h2 className="text-[36px] leading-[56px] md:text-[44px] md:leading:[54px] font-[700] text-neutral-800 text-center">
            15+
          </h2>
          <span className="h-2 bg-sky-900 rounded-full block mt-[-14px]"></span>
          <p className="mt-2 text-sm text-center">Clinc Location</p>
        </div>
        <div>
          <h2 className="text-[36px] leading-[56px] md:text-[44px] md:leading:[54px] font-[700] text-neutral-800 text-center">
            100%
          </h2>
          <span className="h-2 bg-green-600 rounded-full block mt-[-14px]"></span>
          <p className="mt-2 text-sm text-center">Patient Satisfaction</p>
        </div>
      </div>

      {/*how it work section*/}
      <div className=" mx-auto md:px-20 px-4 py-10 mt-3">
        <div className="text-center  mb-10">
          <h1 className="text-3xl font-bold pb-2">
            Providing the best medical services
          </h1>
          <p className="lg:px-7 text-lg">
            World class care for everyone, Our health System offers unmatched,
            expert health care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[30px] mt-[30px]">
          <div className="py-[30px] px-5 border box">
            <div className="flex item-center justify-center">
              <img src={find} alt="" />
            </div>
            <div className="mt-[30px] text-center text-[26px] font-bold">
              <h2>Find a Doctor</h2>
              <p className="text-[16px] leading-77 font-[40] mt-1 text-center">
                {" "}
                World class care for everyone, Our health System offers
                unmatched, expert health care. From the lab to the clinic
              </p>
              <Link
                to="/findDoctor"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#7cb8aa] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#7cb8aa] hover:border-none    "
              >
                <BsArrowRight className=" text-[#7cb8aa] group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
          <div className="lg:py-[30px] px-5 border box">
            <div className="flex item-center justify-center">
              <img src={location} alt="" />
            </div>
            <div className="mt-[30px] text-center text-[26px] font-bold">
              <h2>Find a Location</h2>
              <p className="text-[16px] leading-77 font-[40] mt-1 text-center">
                {" "}
                World class care for everyone, Our health System offers
                unmatched, expert health care. From the lab to the clinic
              </p>
              <Link
                to="/contact"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#7cb8aa] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#7cb8aa] hover:border-none  "
              >
                <BsArrowRight className=" text-[#7cb8aa] group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
          <div className="py-[40px] px-5 border box">
            <div className="flex item-center justify-center">
              <img src={booking} alt="" className="" />
            </div>
            <div className=" mt-[30px] text-center text-[26px] font-bold">
              <h2>Book a Slot</h2>
              <p className="text-[16px] leading-77 font-[40] mt-1 text-center">
                {" "}
                World class care for everyone, Our health System offers
                unmatched, expert health care. From the lab to the clinic
              </p>
              <Link
                to="/"
                className="w-[44px] h-[44px] rounded-full banner-link border border-solid border-[#7cb8aa] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#7cb8aa] hover:border-none  "
              >
                <BsArrowRight className=" text-[#7cb8aa] group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*======about section======*/}
      <About />
      {/*====== Services======*/}
      <Service />
      {/*====== Features ======*/}
      <Feature />
      {/*====== Doctor ======*/}
      <Doctor />
      {/*====== Faq ======*/}
      <Faq />
      {/*====== testimonial ======*/}
      <Testimonial />
    </>
  );
}

export default Banner;
