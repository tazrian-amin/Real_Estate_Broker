import { faAreaChart, faBathtub, faBed, faDollar, faEnvelope, faMapMarkerAlt, faPhone, faPlusCircle, faStar, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { PhotoSlider } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Details = () => {
    useTitle('Details');
    const { category, details, img, location, owner, price, rating, _id } = useLoaderData();
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    console.log(owner)

    return (
        <div>
            <div className="bg-base-100">
                <h2 className="text-5xl font-semibold text-center mt-3">Buy a perfect {category} that suits you</h2>
                <div className='mt-7 flex justify-center'>
                    <img className='' src={img} alt="" />
                </div>
                <PhotoSlider
                    images={
                        [{ src: `${details[0].img1}` },
                        { src: `${details[0].img2}` },
                        { src: `${details[0].img3}` }]
                    }
                    visible={visible}
                    onClose={() => {
                        setVisible(false);
                        setIndex(0);
                    }}
                    index={index}
                    onIndexChange={setIndex}
                />

                <div className="flex flex-col mt-8 w-full border-opacity-50">
                    <div className="grid card py-4 bg-base-200 rounded-box place-items-center">
                        <h3 className='text-2xl font-bold pb-2'>{category} Details</h3>
                        <p className='text-lg font-semibold'><FontAwesomeIcon icon={faBed} /> Bed: {details[0].bed}</p>
                        <p className='text-lg font-semibold'><FontAwesomeIcon icon={faBathtub} /> Bath: {details[0].bath}</p>
                        <p className='text-lg font-semibold'><FontAwesomeIcon icon={faPlusCircle} /> Facility: {details[0].facility}</p>
                        <p className='text-lg font-semibold'><FontAwesomeIcon icon={faAreaChart} /> Area: {details[0].area} sqr ft.</p>
                        <p className='text-lg font-semibold'><FontAwesomeIcon icon={faMapMarkerAlt} /> Location: {location}</p>
                        <p className='text-lg font-semibold'><FontAwesomeIcon icon={faDollar} /> Price: ${price}</p>
                        <p className='text-lg font-semibold'><FontAwesomeIcon className='text-warning' icon={faStar} /> Ratings: {rating}</p>
                    </div>
                    <div className="divider my-10"><button className='btn btn-primary w-100 mx-auto' onClick={() => setVisible(true)} primary>View Gallery</button></div>
                    <div className="grid card py-4 bg-base-200 rounded-box place-items-center">
                        <h3 className='text-2xl font-bold'>Owner Details</h3>
                        <img className="mask mask-decagon w-32" src={owner[0].photo} alt="owner" />
                        <p className='text-lg font-semibold'><FontAwesomeIcon icon={faUserAlt} /> Name: {owner[0].name}</p>
                        <p className='text-lg font-semibold'><FontAwesomeIcon icon={faPhone} /> Phone: {owner[0].phone}</p>
                        <p className='text-lg font-semibold'><FontAwesomeIcon icon={faEnvelope} /> Email: {owner[0].email}</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <Link to={`/myReview`} className="btn btn-primary">Add a Review</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;