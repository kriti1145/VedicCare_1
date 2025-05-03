import React from "react";
import faqImg from "../../assets/Images/faq-img/faq.png";
import FaqList from "./FaqList";
const Faq = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-20 py-10 md:py-16 pt-[60px]">
        {/*====== about content ======*/}
        <div className="w-full ">
          <h1 className="text-2xl md:text-3xl font-bold pb-2 text-[#313340] ">
            Most questions asked by our beloved patients
          </h1>
          <FaqList className="" />
        </div>
      </div>
    </>
  );
};

export default Faq;
