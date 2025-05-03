import { useState } from "react";
import Loading from "../../loader/Loading";
import Error from "../../Error/Error";
import useGetProfile from "../../hooks/usefetchData";
import Tabs from "../doctor-account/Tabs";
import { BASE_URL } from "../../config";
import { IoIosInformationCircle } from "react-icons/io";
import starIcon from "../../assets/Images/doctor-img/star.png";
import DoctorAbout from "../../Pages/Doctor-page/DoctorAbout";
import DocProfileSettings from "./DocProfileSettings";
import Appointments from "./Appointments";

const DoctorAccount = () => {
  const { data, loading, error, refetch } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );
  console.log(data);

  const [tab, setTab] = useState("overview");
  const [isActive, setIsActive] = useState(data?.isActive);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleStatus = async () => {
    setIsUpdating(true);

    try {
      const response = await fetch(`${BASE_URL}/toggle-status/${data._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.status === 200) {
        setIsActive(result.data.isActive);
        alert(result.message);
      } else {
        alert(result.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error updating status");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container px-3 mx-auto py-10 md:py-16 lg:px-20">
        <div className="px-5 mx-auto pt-[60px]">
          {loading && !error && <Loading />}
          {error && !loading && <Error errMessage={error} />}

          {!loading && !error && (
            <div className="grid md:grid-cols-3 gap-[30px] lg:gap-[50px]">
              <Tabs tab={tab} setTab={setTab} />
              <div className="lg:col-span-2">
                {data.isApproved === "pending" && (
                  <div className="flex p-4 mb-4 text-[#333333] bg-[#e7f0dc] rounded-lg">
                    <IoIosInformationCircle className="flex-shrink-0 w-5 h-5 text-yellow-500" />
                    <span className="sr-only"> Info</span>
                    <div className="ml-3 text-sm font-medium">
                      To receive approval, please complete your profile. We will
                      manually review it and provide approval within 3 days.
                    </div>
                  </div>
                )}
                <div className="mt-8">
                  {tab === "overview" && (
                    <div>
                      <div className="flex items-center gap-4 mb-10">
                        <figure className="w-full md:w-[300px] h-[200px]">
                          <img
                            src={data?.photo}
                            alt="Doctor"
                            className="w-[250px] h-[230px] object-cover border-4 border-[#C5D9CC]-600 mb-3"
                          />
                        </figure>
                        <div>
                          <span className=" bg-[#C5D9CC] py-2 px-3 text-sm lg:text-base text-[#333333] font-semibold rounded mt-2 lg:mt-3">
                            {data.specialization}
                          </span>
                          <h3 className="text-[22px] leading-9 font-bold mt-3">
                            {data.name}
                          </h3>

                          <div className="flex items-center gap-2 mt-2">
                            <span className="flex items-center gap-1 text-sm lg:text-base font-semibold">
                              <img
                                src={starIcon}
                                alt="Star"
                                className="h-4 w-4"
                              />
                              {data.averageRating}
                            </span>
                            <span className="text-sm lg:text-base font-normal">
                              ({data.totalRating})
                            </span>
                          </div>
                          <p className="text-sm sm:text-base mt-4 lg:max-w-[390px] font-semibold ">
                            {data?.bio}
                          </p>
                        </div>
                      </div>
                      <DoctorAbout
                        name={data.name}
                        about={data.about}
                        qualifications={data.qualifications}
                        experiences={data.experiences}
                      />
                    </div>
                  )}
                  {tab === "appointments" && (
                    <Appointments appointments={data.appointments} />
                  )}
                  {tab === "settings" && (
                    <DocProfileSettings doctorData={data} />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorAccount;
