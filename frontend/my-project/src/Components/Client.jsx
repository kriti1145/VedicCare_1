import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../src/assets/ldata.json";

const Client = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-[50px]">
          <h1 className="text-2xl font-bold pb-2 text-center">
            What our Patient Say
          </h1>
          <div className="md:px-[450px]">
            <p className="text-center font-[26px]">
              Corrupti tempore, voluptatibus doloremque commodi repudiandae
              consequuntur ipsam aperiam adipisci veniam modi voluptatem velit
              odio corporis quas voluptate nobis dolorem quo labore.
            </p>
          </div>
        </div>
        <div className="w-full h-fit p-8">
          {data.map((item, id) => (
            <div className="bg-white p-10 rounded-xl flex flex-col justify-center items-center vorder-b-[8px] border-gray-300"></div>
          ))}
        </div>
      </div>
    </>
  );
};
const data = [
  {
    id: 1,
    name: "John Morgan",
    img: "/client/patient.png",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam obcaecati corporis et perferendis officia fugit ad culpa labore, similique vitae atque, doloribus exercitationem repudiandae ullam placeat commodi numquam eos ab!",
  },
  {
    id: 2,
    name: "John Morgan",
    img: "/client/patient.png",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam obcaecati corporis et perferendis officia fugit ad culpa labore, similique vitae atque, doloribus exercitationem repudiandae ullam placeat commodi numquam eos ab!",
  },
  {
    id: 3,
    name: "John Morgan",
    img: "/client/patient.png",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam obcaecati corporis et perferendis officia fugit ad culpa labore, similique vitae atque, doloribus exercitationem repudiandae ullam placeat commodi numquam eos ab!",
  },
  {
    id: 4,
    name: "John Morgan",
    img: "/client/patient.png",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam obcaecati corporis et perferendis officia fugit ad culpa labore, similique vitae atque, doloribus exercitationem repudiandae ullam placeat commodi numquam eos ab!",
  },
  {
    id: 5,
    name: "John Morgan",
    img: "/client/patient.png",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam obcaecati corporis et perferendis officia fugit ad culpa labore, similique vitae atque, doloribus exercitationem repudiandae ullam placeat commodi numquam eos ab!",
  },
  {
    id: 6,
    name: "John Morgan",
    img: "/client/patient.png",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam obcaecati corporis et perferendis officia fugit ad culpa labore, similique vitae atque, doloribus exercitationem repudiandae ullam placeat commodi numquam eos ab!",
  },
];
export default Client;
