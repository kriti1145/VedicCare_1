import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";

const DocProfileSettings = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: "",
  });

  useEffect(() => {
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    });
  }, [doctorData]);

  // handleInputChange
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handleFileInputChange
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setFormData({ ...formData, photo: data.url });
  };

  //updateProfileHandler
  const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw Error(result.message);
      }
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  //reusable function for adding items
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  //reusable function for deleting items
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i != index),
    }));
  };

  //reusable input change function
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];

      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  //qualification
  const addQualification = (e) => {
    e.preventDefault();

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "MD",
      university: "Ventak Medical College",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  //experience
  const addExperience = (e) => {
    e.preventDefault();

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "Senior Surgeon",
      hospital: "Ventak Medical Hospital",
    });
  };

  const handleExperiencesChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event);
  };

  const deleteExperiences = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };

  //time Slot
  const addTimeSlot = (e) => {
    e.preventDefault();

    addItem("timeSlots", {
      day: "Sunday",
      startingTime: "10:00",
      endingTime: "04:30",
    });
  };

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <>
      <div>
        <h2 className="font-bold text-[24px] leading-9 mb-7 text-[#333333]">
          Profile Information
        </h2>

        <form className="py-4 md:py-0 px-2">
          {/* update name */}
          <div className="mb-5 ">
            <p className="text-[15px] lg:max-w-[390px] pl-1">Name*</p>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full"
            />
          </div>

          {/* email */}
          <div className="mb-5 ">
            <p className="text-[15px] lg:max-w-[390px] pl-1">Email*</p>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full"
              readOnly
              aria-readonly
              disabled="true"
            />
          </div>

          {/* update phone  */}
          <div className="mb-5 ">
            <p className="text-[15px] lg:max-w-[390px] pl-1">Phone*</p>
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full"
            />
          </div>

          {/* update bio */}
          <div className="mb-5 ">
            <p className="text-[15px] lg:max-w-[390px] pl-1">Bio*</p>
            <input
              type="text"
              placeholder="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full"
              maxLength={100}
            />
          </div>

          {/* update gender, specialization and consultant fee */}
          <div className="mb-5">
            <div className="grid grid-cols-3 gap-10 mb-[30px] w-full">
              <div>
                <p className="text-[15px] lg:max-w-[390px] pl-1">Gender* </p>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="bg-transparent pr-5 py-3 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full "
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <p className="text-[15px] lg:max-w-[390px] pl-1">
                  Specialization*{" "}
                </p>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="bg-transparent pr-5 py-3 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full"
                >
                  <option value="">Select</option>
                  <option value="surgeon">Surgeon</option>
                  <option value="neurologist">Neurologist</option>
                  <option value="dermatologist">Dermatologist</option>
                </select>
              </div>
              <div>
                <p className="text-[15px] lg:max-w-[390px] pl-1">
                  Consultant Fee*{" "}
                </p>
                <input
                  type="number"
                  placeholder="100"
                  name="ticketPrice"
                  value={formData.ticketPrice}
                  className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* update qualifications */}
          <div className="mb-5">
            <p className="text-[18px] lg:max-w-[390px]">Qualifications* </p>
            {formData.qualifications?.map((item, index) => (
              <div key={index}>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-5 ">
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">
                        Starting Date*
                      </p>
                      <input
                        type="date"
                        name="startingDate"
                        value={item.startingDate}
                        className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full text-gray-500"
                        onChange={(e) => handleQualificationChange(e, index)}
                      />
                    </div>
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">
                        Ending Date*
                      </p>
                      <input
                        type="date"
                        name="endingDate"
                        value={item.endingDate}
                        className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full text-gray-500 "
                        onChange={(e) => handleQualificationChange(e, index)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-5 ">
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">
                        Degree*
                      </p>
                      <input
                        type="text"
                        name="degree"
                        value={item.degree}
                        className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full text-gray-500"
                        onChange={(e) => handleQualificationChange(e, index)}
                      />
                    </div>
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">
                        University*
                      </p>
                      <input
                        type="text"
                        name="university"
                        value={item.university}
                        className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full text-gray-500 "
                        onChange={(e) => handleQualificationChange(e, index)}
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="mt-2 bg-red-600 rounded-full text-white text-[18px] mb-[30px] cursor-pointer p-1 "
                  onClick={(e) => deleteQualification(e, index)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            ))}
            <button
              className="bg-[#333333] px-5 py-2 text-[#f2f2f2] rounded h-fit cursor-pointer mt-2"
              onClick={addQualification}
            >
              Add Qualifications
            </button>
          </div>

          {/* update experience */}
          <div className="mb-5">
            <p className="text-[18px] lg:max-w-[390px]">Experiences* </p>
            {formData.experiences?.map((item, index) => (
              <div key={index}>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-5 ">
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">
                        Starting Date*
                      </p>
                      <input
                        type="date"
                        name="startingDate"
                        value={item.startingDate}
                        className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full text-gray-500"
                        onChange={(e) => handleExperiencesChange(e, index)}
                      />
                    </div>
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">
                        Ending Date*
                      </p>
                      <input
                        type="date"
                        name="endingDate"
                        value={item.endingDate}
                        className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full text-gray-500 "
                        onChange={(e) => handleExperiencesChange(e, index)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-5 ">
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">
                        Position*
                      </p>
                      <input
                        type="text"
                        name="position"
                        value={item.position}
                        className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full text-gray-500"
                        onChange={(e) => handleExperiencesChange(e, index)}
                      />
                    </div>
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">
                        Hospital*
                      </p>
                      <input
                        type="text"
                        name="hospital"
                        value={item.hospital}
                        className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full text-gray-500 "
                        onChange={(e) => handleExperiencesChange(e, index)}
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="mt-2 bg-red-600 rounded-full text-white text-[18px] mb-[30px] cursor-pointer p-1 "
                  onClick={(e) => deleteExperiences(e, index)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            ))}
            <button
              className="bg-[#333333] px-5 py-2 text-[#f2f2f2] rounded h-fit cursor-pointer mt-2"
              onClick={addExperience}
            >
              Add Experience
            </button>
          </div>

          {/* update time Slot */}
          <div className="mb-5">
            <p className="text-[18px] lg:max-w-[390px]">Time Slot* </p>
            {formData.timeSlots?.map((item, index) => (
              <div key={index}>
                <div className="mt-5">
                  <div className="grid grid-cols-2 gap-5 md:grid-cols-4 mb-[30px]">
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">Days*</p>
                      <select
                        name="day"
                        value={item.day}
                        className="bg-transparent pr-5 py-3 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full "
                        onChange={(e) => handleTimeSlotChange(e, index)}
                      >
                        <option value="">Select</option>
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesady">Tuesady</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                      </select>
                    </div>
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">
                        Starting Time*
                      </p>
                      <input
                        type="time"
                        name="startingTime"
                        value={item.startingTime}
                        className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full text-gray-500 "
                        onChange={(e) => handleTimeSlotChange(e, index)}
                      />
                    </div>
                    <div>
                      <p className="text-[15px] lg:max-w-[390px] pl-1">
                        Ending Time*
                      </p>
                      <input
                        type="time"
                        name="endingTime"
                        value={item.endingTime}
                        className="bg-transparent pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full text-gray-500 "
                        onChange={(e) => handleTimeSlotChange(e, index)}
                      />
                    </div>
                    <div className="flex items-center">
                      <button
                        className=" bg-red-600 rounded-full text-white text-[18px] cursor-pointer p-1 mt-6"
                        onClick={(e) => deleteTimeSlot(e, index)}
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="bg-[#333333] px-5 py-2 text-[#f2f2f2] rounded h-fit cursor-pointer "
              onClick={addTimeSlot}
            >
              Add TimeSlot
            </button>
          </div>

          {/* add about me */}
          <div className="mb-5 ">
            <p className="text-[15px] lg:max-w-[390px] pl-1">About*</p>
            <textarea
              name="about"
              cols={5}
              rows={5}
              placeholder="Write about you"
              value={formData.about}
              onChange={handleInputChange}
              className="bg-[#fff] pr-5 py-2 mt-1 border-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-[#C5D9CC] text-[14px] leading-7 cursor-pointer pl-3 rounded-md w-full"
            ></textarea>
          </div>

          {/* update photo */}
          <div className="mb-5 flex items-center gap-3">
            {formData.photo && (
              <figure className="w-[50px] h-[50px] rounded-full border border-solid border-[#7cb8aa] flex items-center justify-center bg-gray-200">
                <img
                  src={formData.photo}
                  alt=""
                  className="w-full h-full rounded-full bg-gray-200"
                />
              </figure>
            )}
            <div className="relative w-[130px] h-[40px]">
              <input
                type="file"
                name="photo"
                id="customFile"
                onChange={handleFileInputChange}
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label
                htmlFor="customFile"
                className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#C5D9CC] font-semibold rounded-md truncate cursor-pointer"
              >
                Upload Photo
              </label>
            </div>
          </div>

          {/* update button */}
          <div className=" mt-7">
            <button
              type="submit"
              className="btn px-4 text-[15px] text-white border-none login-form-btn w-full rounded-lg
              "
              onClick={updateProfileHandler}
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DocProfileSettings;
