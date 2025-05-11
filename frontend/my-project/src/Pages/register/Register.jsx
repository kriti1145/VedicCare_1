import { useState } from "react";
import registerimg from "../../assets/Images/registeration/registerimg.png";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

const Register = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    setPreviewURL(URL.createObjectURL(file));
    const data = await uploadImageToCloudinary(file);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-20 py-10 pt-[120px]">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ======= img box ========*/}
            <div className="hidden lg:block rounded-l-lg bg-[#C5D9CC] ">
              <figure className="rounded-l-lg">
                <img src={registerimg} alt="" className="w-full rounded-l-lg" />
              </figure>
            </div>

            {/* =========== form =========== */}
            <div className="rounded-r-lg lg:pl-16 py-10 text-center bg-gray-200 lg:pr-16 px-6 py-10">
              <h3 className="text-[29px] leading-9 font-bold mb-10">
                Create an <span className="text-[#366459]">account</span>
              </h3>

              <form className="py-4 md:py-0 px-5" onSubmit={handleSubmit}>
                <div className="mb-5 ">
                  <input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-transparent w-full pr-4 py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer"
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
                    className="bg-transparent w-full pr-4 py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-transparent w-full pr-4 py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer"
                    required
                  />
                </div>

                <div className="mb-5 flex items-center justify-between ">
                  <label className="font-semibold text-[16px] leading-7">
                    Are you a:
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="font-medium text-[15px] leading-7 px-4 py-2 focus:outline-none bg-transparent "
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </label>
                  <label className="font-semibold text-[16px] leading-7">
                    Gender:
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="font-medium text-[15px] leading-7 px-4 py-2 focus:outline-none bg-transparent"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  {previewURL && (
                    <figure className="w-[50px] h-[50px] rounded-full border border-solid border-[#7cb8aa] flex items-center justify-center bg-gray-200">
                      <img
                        src={previewURL}
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
                      className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#C5D9CC] font-semibold rounded-lg truncate cursor-pointer"
                    >
                      Upload Photo
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
                    {loading ? (
                      <BeatLoader size={15} color="#fff" />
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>

                <p className="mt-5 text-[#676869] text-center text-[14px]">
                  Already registered?
                  <Link
                    to="/login"
                    className="text-[#366459] font-semibold ml-1"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
