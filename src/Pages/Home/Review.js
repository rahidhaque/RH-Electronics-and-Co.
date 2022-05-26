import React from 'react';
import PrettyRating from 'pretty-rating-react';
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";



const Review = ({ review }) => {
    const icons = {
        star: {
            complete: faStar,
            half: faStarHalfAlt,
        }
    };

    const colors = {
        star: ['#27213B', '#27213B', '#27213B']
    };
    return (
        <div className="card bg-base-100 shadow-xl mt-5">
            <div className='flex justify-center items-center'>
                <div className='description'>
                    <h1 className='text-xl'>{review.name}</h1>
                </div>
            </div>
            <div className="card-body items-center text-center">
                <p className='lg:w-80 w-100'>{review.review}</p>
                <span className='fw-bold'>
                    <PrettyRating value={review.rating} icons={icons.star} colors={colors.star} max={5} />
                </span>
            </div>
        </div>
    );
};

export default Review;