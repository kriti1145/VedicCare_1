import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { authContext } from "../../context/AuthContext.jsx";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log(result, "login data");

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-20 py-10 pt-[120px]">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 ">
          <h3 className="text-[29px] leading-9 font-bold mb-10 text-center">
            Hello! <span className="text-[#366459]">Welcome</span> Back 🎉
          </h3>

          <form className="py-4 md:py-0 px-5" onSubmit={handleSubmit}>
            <div className="mb-5 ">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-transparent w-full  py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer"
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
                className="bg-transparent w-full  py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7 cursor-pointer"
                required
              />
            </div>
            <div className=" mt-7">
              <button
                type="submit"
                className="btn px-4 text-[15px] text-white border-none login-form-btn w-full rounded-lg
              "
              >
                {" "}
                {loading ? <BeatLoader size={15} color="#fff" /> : "Login"}
              </button>
            </div>

            <p className="mt-5 text-[#676869] text-center text-[14px]">
              Don't have an acoount?
              <Link
                to="/register"
                className="text-[#366459] font-semibold ml-1"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
