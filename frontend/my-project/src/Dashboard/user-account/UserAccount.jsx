import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import MyBooking from "../../Dashboard/user-account/MyBooking.jsx";
import ProfileSetting from "./ProfileSetting";
import useGetProfile from "../../hooks/usefetchData";
import Loading from "../../loader/Loading";
import Error from "../../Error/Error";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";

const UserAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("bookings");

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  //delete account
  const handleDeleteAccount = async () => {
    const confirmDeletion = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmDeletion) {
      try {
        const response = await fetch(`${BASE_URL}/users/profile/me`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          toast.success("Account deleted successfully.");
          dispatch({ type: "LOGOUT" });
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
      <div className="max-w-screen-2xl container  px-3 mx-auto  py-10 md:py-16 lg:px-20 ">
        <div className="px-5 mx-auto pt-[60px] ">
          {loading && !error && <Loading />}
          {error && !loading && <Error errMessage={error} />}
          {!loading && !error && (
            <div className="grid md:grid-cols-3 gap-20">
              <div className="pb-[40px] px-[30px] rounded-md border border-[#C5D9CC] px-3 py-10 bg-[#e7f0dc]">
                <div className="flex items-center justify-center">
                  <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-[#C5D9CC]">
                    <img
                      src={userData.photo}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </figure>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-[18px] leading-[30px] font-bold">
                    {userData.name}
                  </h3>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[15px] leading-6 font-medium">
                    Email : {userData.email}
                  </p>
                  <p className="text-[15px] leading-6 font-medium">
                    Blood Type:
                    <span className="ml-2 text-[18px] leading-8">
                      {userData.bloodType}
                    </span>
                  </p>
                </div>

                <div className="mt-[50px] md:mt-[30px]">
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

              <div className="md:col-span-2 md:px-[30px]">
                <div>
                  <button
                    className={`${
                      tab === "bookings" &&
                      "bg-[#7cb8aa] text-[#313340] font-normal"
                    } p-2 mr-5 px-5 rounded-md font-semibold text-[16px] leading-7 border border-solid border-[#C5D9CC]`}
                    onClick={() => setTab("bookings")}
                  >
                    My Bookings
                  </button>
                  <button
                    className={`${
                      tab === "settings" &&
                      "bg-[#7cb8aa] text-[#313340] font-normal"
                    } py-2 px-5 rounded-md font-semibold text-[16px] leading-7 border border-solid border-[#C5D9CC]`}
                    onClick={() => setTab("settings")}
                  >
                    Profile Settings
                  </button>
                </div>
                {tab === "bookings" && <MyBooking />}
                {tab === "settings" && <ProfileSetting user={userData} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserAccount;
