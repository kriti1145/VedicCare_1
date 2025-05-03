import React from "react";
import DoctorCard from "../../Components/doctors/DoctorCard";
import Testimonial from "../../Components/testimonial/Testimonial";
import Loading from "../../loader/Loading";
import Error from "../../Error/Error";
import { BASE_URL } from "../../config";
import usefetchData from "../../hooks/usefetchData";
import { useEffect, useState } from "react";

const FindDoctor = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
    console.log("handle serach");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: doctors,
    loading,
    error,
  } = usefetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-20 py-10 pt-[60px] bg-[#f5f5f5]">
        {/*====== about content ======*/}
        <div className="text-center ">
          <h1 className="text-3xl md:text-4xl font-bold pb-2 text-[#313340] ">
            Find a Doctor
          </h1>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#d8ded3] rounded-xl flex item-center justify-between border">
            <input
              type="search"
              className="py-2 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer border border-gray-100"
              placeholder="Search doctor by name or specifications"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md bg-[#7cb8aa] border border-gray-100 text-[#f5f5f5] hover:text-[#C5D9CC] hover:bg-[#313340] hover:border-none"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl container  px-3 flex flex-col mx-auto md:flex-row lg:px-10  ">
        <div className="max-w-screen-2xl  mx-auto md:px-2 m-5 sm:px-20 ">
          {loading && <Loading />}
          {error && <Error errMessage={error} />}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-8">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="max-w-screen-2xl container md:px-20 px-5 flex flex-col mx-auto py-10 mt-5">
        <Testimonial />
      </div>
    </>
  );
};

export default FindDoctor;
