import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    // Handle review submission logic here
    setLoading(true);

    try {
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error("Rating and Review fields are required");
      }
      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, reviewText }),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      setLoading(false);
      toast.success(result.message);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmitReview} className="max-w-lg mx-auto mt-6">
      <div className="text-center">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4">
          How would you rate your overall experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= (hover || rating)
                    ? "text-[#FDA403]"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-lg md:text-xl cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4">
          Share your feedback or suggestions*
        </h3>
        <textarea
          className="border border-solid border-gray-300 focus:border-[#7cb8aa] focus:outline-none w-full px-4 py-3 rounded-md bg-gray-100 text-sm md:text-base"
          rows="5"
          placeholder="Write your message"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn mt-5 px-6 text-sm md:text-base font-semibold rounded-full bg-[#7cb8aa] text-gray-700 hover:bg-[#C5D9CC] text-[#7cb8aa] form-btn border-0"
          onClick={handleSubmitReview}
        >
          {loading ? <BeatLoader size={15} color="#fff" /> : "Submit Feedback"}
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
