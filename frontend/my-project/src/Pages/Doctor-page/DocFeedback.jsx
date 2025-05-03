import React, { useState } from "react";
import avatar from "../../assets/Images/user.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const DocFeedback = ({ reviews, totalRating }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-10 lg:mb-12">
        <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
          All reviews ({totalRating})
        </h4>

        {reviews?.map((review, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 mb-6 bg-[#e7f0dc] p-4 rounded-lg"
          >
            <div className="flex gap-4">
              <figure className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={review.user.photo}
                  alt="User avatar"
                />
              </figure>
              <div>
                <h5 className="text-md md:text-lg font-bold text-[#366459]">
                  {review.user.name}
                </h5>
                <p className="text-xs md:text-sm text-gray-600">
                  {formateDate(review.createdAt)}
                </p>
                <div className="flex gap-1 items-center mt-3 md:mt-0">
                  {[...Array(review.rating).keys()].map((_, index) => (
                    <AiFillStar
                      key={index}
                      className="mt-1 w-3 h-3 md:w-4 md:h-4 text-[#FDA403]"
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm md:text-base font-medium">
                  {review.reviewText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
          <button
            className="px-4 py-2 mt-5 text-sm md:text-base font-semibold  text-sm md:text-base border-0  feature-btn "
            onClick={() => setShowFeedbackForm(true)}
          >
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default DocFeedback;
