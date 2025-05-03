import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-5 flex flex-col mx-auto py-10 ">
        <div className="text-center">
          <h1 className="text-3xl font-bold pb-2 ">What Our Patient Say</h1>

          <p className="text-xl">
            World class care for everyone, Our health System offers unmatched,
            expert health care.
          </p>
        </div>
        <TestimonialCard />
      </div>
    </>
  );
};

export default Testimonial;
