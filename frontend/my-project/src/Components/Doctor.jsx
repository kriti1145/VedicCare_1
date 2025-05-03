import React from "react";
import DoctorList from "../Components/doctors/DoctorList";
const Doctor = () => {
  return (
    <>
      <div className="max-w-screen-2xl container  px-3 flex flex-col mx-auto md:flex-row py-10 md:py-16 lg:px-10  ">
        <div className="max-w-screen-2xl  mx-auto md:px-2 m-5 ">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold pb-2 ">Our Great Doctors</h1>

            <p className="lg:px-7 text-lg">
              World class care for everyone, Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </div>
    </>
  );
};

export default Doctor;
