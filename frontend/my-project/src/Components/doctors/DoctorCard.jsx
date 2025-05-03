import React from "react";
import star from "../../assets/Images/doctor-img/star.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    experiences,
    isActive,
  } = doctor;

  return (
    <>
      <div className="p-4 lg:p-6 bg-[#d9e9df] border border-[#7cb8aa] rounded-lg flex flex-col h-full">
        <div>
          <img
            src={photo}
            alt="icon"
            className="w-full md:h-48 object-cover bg-[#F2F2F2] rounded-md mb-1 lg:mb-2"
          />

          <h2 className="text-lg lg:text-xl font-semibold ">{name}</h2>
          {/* <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              isActive
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {isActive ? "Active" : "Inactive"}
          </span> */}
        </div>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <span className="bg-[#C5D9CC] py-1 px-2 text-sm lg:text-base text-[#333333] font-semibold rounded">
            {specialization}
          </span>
          <div className="flex items-center gap-2 lg:gap-3">
            <span className="flex items-center text-sm lg:text-base font-semibold ">
              <img src={star} alt="" className="h-4 w-4 " />
              {avgRating}
            </span>
            <span className="text-sm lg:text-base ">({totalRating})</span>
          </div>
        </div>

        <div className="mt-4 lg:mt-6 flex items-center justify-between gap-">
          <div>
            {/* <h3 className="text-base lg:text-lg font-semibold">
              + {totalPatients} patients
            </h3> */}
            <p className="text-sm lg:text-base text-[#313340] m-3">
              At {experiences && experiences[0]?.hospital}
            </p>
          </div>
          <Link
            to={`/doctors/${doctor._id}`}
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#7cb8aa] mt-3 flex items-center justify-center group hover:bg-[#7cb8aa] hover:border-none"
          >
            <BsArrowRight className="text-[#7cb8aa] group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
