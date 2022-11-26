import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewSection = ({ review }) => {
    const { name, comment, photo, rating } = review;

    return (
        <div className="card md:card-side bg-base-100 shadow-xl border my-5">
            <img className="mask mask-decagon w-32 ml-5" src={photo} alt="owner" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='font-semibold'>{comment}</p>
                <div className="rating">
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                </div>
                <p className='font-bold'>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default ReviewSection;