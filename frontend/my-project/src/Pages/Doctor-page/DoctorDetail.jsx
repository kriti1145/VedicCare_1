import React, { useState } from "react";
import doctorImg from "../../assets/Images/doctor-img/doc-1.png";
import starIcon from "../../assets/Images/doctor-img/star.png";
import DoctorAbout from "./DoctorAbout";
import DocFeedback from "./DocFeedback";
import SidePanel from "./SidePanel";
import Loading from "../../loader/Loading";
import Error from "../../Error/Error";
import { BASE_URL } from "../../config";
import usefetchData from "../../hooks/usefetchData";
import { useParams } from "react-router-dom";

const DoctorDetail = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = usefetchData(`${BASE_URL}/doctors/${id}`);

  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
    isActive,
  } = doctor;

  return (
    <div className="max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 mx-auto py-10 lg:py-20">
      {loading && <Loading />}
      {error && <Error errMessage={error} />}
      {!loading && !error && (
        <>
          {/* {!isActive && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded-md text-center font-semibold">
              This doctor is currently inactive and not accepting appointments.
            </div>
          )} */}

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <div className="p-10 md:p-1 ">
                  <figure className="w-full h-auto md:max-w-[200px] max-h-[200px]">
                    <img
                      src={photo}
                      alt="Doctor"
                      className="object-cover border-b-4 border-[#C5D9CC]-600 mb-3"
                    />
                  </figure>
                </div>
                <div className="mt-[30px] lg:mt-[10px]">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3">
                    {name}
                  </h3>
                  <span className=" bg-[#C5D9CC] py-1 px-3 text-sm lg:text-base text-[#333333] font-semibold rounded mt-2 lg:mt-3">
                    {specialization}
                  </span>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 text-sm lg:text-base font-semibold">
                      <img src={starIcon} alt="Star" className="h-4 w-4" />
                      {averageRating}
                    </span>
                    <span className="text-sm lg:text-base font-normal">
                      ({totalRating})
                    </span>
                  </div>
                  <p className="text-sm sm:text-base mt-3 md:mt-4 lg:mt-5 lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>

              <div className="mt-8 lg:mt-7 border-b border-solid border-[#333333]">
                <button
                  onClick={() => setTab("about")}
                  className={`py-2 px-4 sm:px-5 text-sm lg:text-base font-semibold ${
                    tab === "about" && "border-b-4 border-[#7cb8aa]"
                  } mr-4`}
                >
                  About
                </button>
                {/* {isActive && (
                  <button
                    onClick={() => setTab("feedback")}
                    className={`py-2 px-4 sm:px-5 text-sm lg:text-base font-semibold ${
                      tab === "feedback" && "border-b-4 border-[#7cb8aa]"
                    }`}
                  >
                    Feedback
                  </button>
                )} */}
              </div>

              <div className="mt-8 lg:mt-7">
                {tab === "about" && (
                  <DoctorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                  />
                )}
                {tab === "feedback" && (
                  <DocFeedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>

            {
              <div
                className={`md:mt-0 ${
                  tab === "about" ? "block" : "hidden md:block"
                }`}
              >
                <SidePanel
                  doctorId={doctor._id}
                  ticketPrice={ticketPrice}
                  timeSlots={timeSlots}
                />
              </div>
            }
          </div>
        </>
      )}
    </div>
  );
};

export default DoctorDetail;
