import { faBathtub, faBed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-photo-view/dist/react-photo-view.css';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    console.log(service)

    const { category, details, img, location, owner, price, rating, _id } = service;

    return (
        <div className="card bg-base-100 shadow-xl m-4">
            <figure className='cursor-pointer' title='view full size image'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='max-h-64 w-full' src={img} alt={category} />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <div className="badge badge-secondary">NEW</div>
                <p><FontAwesomeIcon icon={faBed} /> Bed: {details[0].bed} <br /><FontAwesomeIcon icon={faBathtub} /> Bath: {details[0].bath}</p>
                <p className='text-lg font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/buy/${_id}`} className="btn btn-primary">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;