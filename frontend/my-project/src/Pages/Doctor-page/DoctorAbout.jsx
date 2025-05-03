import { formateDate } from "../../utils/formateDate";

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
  return (
    <>
      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold flex items-center gap-2 ">
          About{" "}
          <span className="text-[#366459] text-xl sm:text-2xl md:text-3xl">
            {name}
          </span>
        </h3>
        <p className="text-sm md:text-base mt-3">{about}</p>
      </div>

      <div className="mt-10">
        <h3 className="text-lg md:text-xl font-semibold">Education</h3>
        <ul className="pt-4 md:pt-6">
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-6"
            >
              <div>
                <span className="text-[#366459] text-sm md:text-base font-semibold">
                  {formateDate(item.startingDate)} -{" "}
                  {formateDate(item.endingDate)}
                </span>
                <p className="text-sm md:text-base font-medium">
                  {item.degree}
                </p>
              </div>
              <p className="text-sm md:text-base font-medium">
                {item.university}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-lg md:text-xl font-semibold">Experience</h3>
        <ul className="grid gap-6 md:grid-cols-2 pt-4 md:pt-6">
          {experiences?.map((item, index) => (
            <li key={index} className="p-4 rounded bg-[#e7f0dc]">
              <span className="text-[#366459] text-sm md:text-base font-semibold">
                {formateDate(item.startingDate)} -{" "}
                {formateDate(item.endingDate)}
              </span>
              <p className="text-base md:text-lg font-semibold">
                {item.position}
              </p>
              <p className="text-sm md:text-base font-medium">
                {item.hospital}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DoctorAbout;
