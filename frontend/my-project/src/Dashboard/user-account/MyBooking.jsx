import usefetchData from "../../hooks/usefetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../../Components/doctors/DoctorCard";
import Loading from "../../loader/Loading";
import Error from "../../Error/Error";

const MyBooking = () => {
  const {
    data: appointments,
    loading,
    error,
  } = usefetchData(`${BASE_URL}/users/appointment/my-appointments`);
  return (
    <>
      <div>
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
            {appointments.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor._id} />
            ))}
          </div>
        )}

        {!loading && !error && appointments.length === 0 && (
          <h2 className="mt-[50px] text-center text-[#313340] leading-7 text-[20px] font-semibold ">
            You did not book any doctor yet! {"😞"}
          </h2>
        )}
      </div>
    </>
  );
};

export default MyBooking;
