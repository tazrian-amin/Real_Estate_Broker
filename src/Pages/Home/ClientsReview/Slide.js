import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Slide = ({ slide }) => {
    const { client, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="card md:card-side">
                <img className="mask mask-decagon w-32 ml-5" src={client?.photo} alt="client" />
                <div className="card-body">
                    <h2 className="card-title">{client?.name}</h2>
                    <div className="rating">
                        <FontAwesomeIcon className='text-warning' icon={faStar} />
                        <FontAwesomeIcon className='text-warning' icon={faStar} />
                        <FontAwesomeIcon className='text-warning' icon={faStar} />
                        <FontAwesomeIcon className='text-warning' icon={faStar} />
                        <FontAwesomeIcon className='text-warning' icon={faStar} />
                    </div>
                    <p>{client?.comment}</p>
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn opacity-50 hover:opacity-70 btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn opacity-50 hover:opacity-70 btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Slide;