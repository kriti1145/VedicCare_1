import DoctorCard from "./DoctorCard";
import Loading from "../../loader/Loading";
import Error from "../../Error/Error";
import { BASE_URL } from "../../config";
import usefetchData from "../../hooks/usefetchData";

const DoctorList = () => {
  const { data: doctors, loading, error } = usefetchData(`${BASE_URL}/doctors`);

  return (
    <>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  lg:gap-4 mt-8 sm:mt-7 lg:mt-9">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;
