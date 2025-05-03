import { BiMenu } from "react-icons/bi";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  //delete profile
  const handleDeleteAccount = async () => {
    const confirmDeletion = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmDeletion) {
      try {
        const response = await fetch(`${BASE_URL}/doctors/profile/me`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          toast.success("Account and data deleted successfully.");
          dispatch({ type: "LOGOUT" });
          navigate("/");
        } else {
          const result = await response.json();
          toast.error(result.message || "Failed to delete account.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    }
  };
  return (
    <>
      <div className="">
        <span className=" lg:hidden">
          <BiMenu className="w-6 h-6 cursor-pointer" />
        </span>
        <div className=" hidden lg:flex flex-col p-[20px] bg-[#fffff] shadow-panelShadow items-center h-max rounded-md text-[15px]">
          <button
            onClick={() => setTab("overview")}
            className={`${
              tab === "overview"
                ? "bg-[#C5D9CC]  text-[#366459] font-bold"
                : "bg-transparent  text-[#313340] font-semibold"
            } w-full py-2 rounded-md mt-0`}
          >
            Overview
          </button>
          <button
            onClick={() => setTab("appointments")}
            className={`${
              tab === "appointments"
                ? "bg-[#C5D9CC]   text-[#366459] font-bold "
                : "bg-transparent  text-[#313340] font-semibold"
            } w-full rounded-md mt-1 py-2 `}
          >
            Appointments
          </button>
          <button
            onClick={() => setTab("settings")}
            className={`${
              tab === "settings"
                ? "bg-[#C5D9CC] text-[#366459] font-bold"
                : "bg-transparent  text-[#313340] font-semibold"
            } w-full rounded-md mt-1 py-2`}
          >
            Profile
          </button>

          <div className="mt-[100px] w-full">
            {" "}
            <button
              className="w-full py-2 px-4 text-[#313340]  leading-7  text-[14px] bg-[#7cb8aa] border-0 rounded-md font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="w-full py-2 px-4 text-[#313340] leading-7  text-[14px] bg-red-600 border-0 rounded-md mt-4 text-white font-semibold"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
