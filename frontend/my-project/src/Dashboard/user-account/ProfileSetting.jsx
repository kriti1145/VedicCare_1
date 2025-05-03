import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

const ProfileSetting = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    gender: "",
    bloodType: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
    });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setSelectedFile(file);
    setFormData({ ...formData, photo: data.url });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "PUT",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/users/profile/me");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="mt-10 md:pr-[10px]">
        <form className="py-4 md:py-0 px-2" onSubmit={handleSubmit}>
          <div className="mb-5 ">
            <input
              type="text"
              placeholder="Full name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-transparent w-full pr-5 py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7 cursor-pointer pl-2 "
              required
            />
          </div>
          <div className="mb-5 ">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-transparent w-full pr-4 py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer pl-2"
              arial-readonly
              readOnly
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="bg-transparent w-full pr-4 py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer pl-2"
              arial-readonly
              readOnly
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Blood Group"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleInputChange}
              className="bg-transparent w-full pr-4 py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer pl-2"
              required
            />
          </div>

          <div className="mb-5 flex items-center justify-between ">
            <label className="font-semibold text-[16px] leading-7">
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="font-medium text-[15px] leading-7 px-4 py-2 focus:outline-none bg-transparent"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className="mb-5 flex items-center gap-3">
            {formData.photo && (
              <figure className="w-[50px] h-[50px] rounded-full border border-solid border-[#7cb8aa] flex items-center justify-center bg-gray-200">
                <img
                  src={formData.photo}
                  alt=""
                  className="w-full rounded-full bg-gray-200"
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
                className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#C5D9CC] font-semibold rounded-lg truncate cursor-pointer text-[#313340]"
              >
                {selectedFile ? selectedFile.name : "Upload Photo"}
              </label>
            </div>
          </div>

          <div className=" mt-7">
            <button
              disabled={loading && true}
              type="submit"
              className="btn px-4 text-[15px] text-white border-none login-form-btn w-full rounded-lg
              "
            >
              {loading ? <BeatLoader size={15} color="fffff" /> : "Update"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileSetting;
