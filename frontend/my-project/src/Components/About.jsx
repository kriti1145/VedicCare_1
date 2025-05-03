import React, { useState } from "react";
import aboutImag from "../assets/Images/about.jpg";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto py-5 px-5 md:px-20 py-10 md:py-16 pt-[60px]">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/*====== about image ======*/}
        <div className="relative w-full md:w-1/2 flex justify-center order-2 md:order-1">
          <img
            src={aboutImag}
            alt="About Us"
            className="aboutimg w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/*====== about content ======*/}
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Proud to be one of the nation's best
          </h1>
          <p className="mb-4">
            For 30 years in a row, U.S. News & World Report has recognized us as
            one of the best public hospitals in the Nation and #1 in Texas.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            aliquam quia quos minima ipsa ex non, quis neque iste cupiditate
            fuga hic, ducimus consectetur! Nostrum minus repudiandae vitae ut
            ullam.
          </p>
          <p className="mb-4">
            Our best is something we strive for each day, caring for our
            patients - not looking back at what we accomplished but towards what
            we can do tomorrow. Providing the best. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Sequi illo cupiditate laborum quidem
            labore similique esse consectetur corporis perspiciatis dolorum,
            libero consequuntur rerum ratione adipisci assumenda pariatur
            officiis. Est, cupiditate.
          </p>
          {showMore && (
            <p className="mb-6">
              Our doctors are more than healthcare providers; they are your
              partners in health. They are committed to not just treating your
              condition but also ensuring your overall well-being. Whether
              you're dealing with a complex medical issue or seeking routine
              care, you can trust our team to provide the highest quality
              medical services with a personal touch.
            </p>
          )}
          <button
            onClick={handleToggle}
            className="btn aboutbtn px-7 py-2 font-bold text-white border-none mb-4"
          >
            {showMore ? "Hide" : "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
