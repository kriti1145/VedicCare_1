// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HiStar } from "react-icons/hi";
import user from "../../assets/Images/user.png";

const TestimonialCard = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-8 px-5 rounded-lg shadow-lg bg-gray-200 mb-10">
            <div className="flex items-center gap-4">
              <img src={user} alt="User" className="h-12 w-12 rounded-full" />
              <div>
                <h4 className="text-lg leading-7 font-semibold">
                  Muhibur Rehman
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-6 mt-4 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              obcaecati, nihil animi odit soluta nam voluptates?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-8 px-5  rounded-lg shadow-lg bg-gray-200">
            <div className="flex items-center gap-4">
              <img src={user} alt="User" className="h-12 w-12 rounded-full" />
              <div>
                <h4 className="text-lg leading-7 font-semibold">
                  Muhibur Rehman
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-6 mt-4 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              obcaecati, nihil animi odit soluta nam voluptates?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-8 px-5 rounded-lg shadow-lg bg-gray-200">
            <div className="flex items-center gap-4">
              <img src={user} alt="User" className="h-12 w-12 rounded-full" />
              <div>
                <h4 className="text-lg leading-7 font-semibold">
                  Muhibur Rehman
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-6 mt-4 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              obcaecati, nihil animi odit soluta nam voluptates?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-8 px-5 rounded-lg shadow-lg bg-gray-200">
            <div className="flex items-center gap-4">
              <img src={user} alt="User" className="h-12 w-12 rounded-full" />
              <div>
                <h4 className="text-lg leading-7 font-semibold">
                  Muhibur Rehman
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-6 mt-4 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              obcaecati, nihil animi odit soluta nam voluptates?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-8 px-5 rounded-lg shadow-lg bg-gray-200">
            <div className="flex items-center gap-4">
              <img src={user} alt="User" className="h-12 w-12 rounded-full" />
              <div>
                <h4 className="text-lg leading-7 font-semibold">
                  Muhibur Rehman
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-6 mt-4 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              obcaecati, nihil animi odit soluta nam voluptates?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-8 px-5 rounded-lg shadow-lg bg-gray-200">
            <div className="flex items-center gap-4">
              <img src={user} alt="User" className="h-12 w-12 rounded-full" />
              <div>
                <h4 className="text-lg leading-7 font-semibold">
                  Muhibur Rehman
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                  <HiStar className="text-yellow-400 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-6 mt-4 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              obcaecati, nihil animi odit soluta nam voluptates?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
