import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="p-2 rounded-lg border border-solid  mb-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#e7f0dc]">
        <div
          className="flex items-center justify-between gap-4"
          onClick={toggleAccordion}
        >
          <h4 className="text-sm md:text-base lg:text-lg font-semibold text-[#313340] p-1 ">
            {item.question}
          </h4>
          <div
            className={`${
              isOpen && "border-none"
            } w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 border border-solid border-[#7cb8aa] rounded flex items-center justify-center text-[#7cb8aa] transition-all duration-300 ease-in-out transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>
        {isOpen && (
          <div className="mt-2">
            <p className="text-xs md:text-sm lg:text-base text-[#333333] leading-6">
              {item.content}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FaqItem;
