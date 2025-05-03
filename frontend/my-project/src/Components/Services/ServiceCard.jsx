import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, ServiceImg } = item;
  return (
    <>
      <div className="px-3 lg:px-5 border bg-[#e7f0dc] rounded-[20px] service-card">
        <div className="flex justify-between">
          <h2 className="text-[26px]  font-[700] mt-7">{name}</h2>
          <img src={ServiceImg} alt="icon" className="h-10 w-10 mt-7" />
        </div>

        <p className="text-[16px] leading-7 font-[400] mt-4 mb-7">{desc}</p>
      </div>
    </>
  );
};

export default ServiceCard;
