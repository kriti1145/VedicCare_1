import React, { useContext } from "react";
import convertTime from "../../utils/convertTime";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  //booking handler function
  const { user, role } = useContext(authContext);
  console.log(user, role);

  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              {
                name: doctorId,
                ticketPrice: ticketPrice * 100,
              },
            ],
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      if (!data.url) {
        toast.error("No payment URL received");
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      toast.error("Failed to initiate booking");
    }
  };

  return (
    <div className="shadow-panelShadow p-4 lg:p-6 rounded-md md:mt-8">
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg lg:text-xl">Consultant Price</p>
        <span className="text-lg lg:text-xl font-semibold text-[#366459]">
          Rs. {ticketPrice}
        </span>
      </div>

      <div className="mt-4 lg:mt-6">
        <p className="font-semibold text-[#366459] text-lg">
          Available Time Slots:
        </p>
        <ul className="mt-2">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <p className="text-base font-medium">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-base font-medium">
                {convertTime(item.startingTime)} -{convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="btn w-full mt-4 lg:mt-6 px-4 py-2 font-semibold text-base border-0 feature-btn disabled:text-gray-400"
        onClick={bookingHandler}
        disabled={role === "doctor"}
      >
        {role === "doctor" ? "Booking Disabled" : "Book Appointment"}
      </button>
    </div>
  );
};

export default SidePanel;
