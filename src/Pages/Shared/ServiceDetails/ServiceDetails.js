import { faAreaChart, faBathtub, faBed, faDollar, faEnvelope, faMapMarkerAlt, faPhone, faPlusCircle, faStar, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { PhotoSlider } from 'react-photo-view';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Spinner from '../../../utilities/Spinner';
import ReviewSection from './ReviewSection';

const ServiceDetails = () => {
    useTitle('Details');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);
    const { category, details, img, location, owner, price, rating } = useLoaderData();
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const time = new Date();
        const name = user?.displayName || 'Anonymous';
        const email = user?.email;
        const photo = user?.photoURL || 'https://img.myloview.com/stickers/user-icon-vector-people-icon-profile-vector-icon-person-illustration-business-user-icon-users-group-symbol-male-user-symbol-700-223068886.jpg';
        const rating = form.rating.value;
        // console.log(rating, comment, time, name, email, photo);

        const addReview = {
            photo,
            rating,
            name,
            email,
            comment,
            time
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('user-access-token')}`
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review added successfully!');
                }
                form.reset();
                navigate('/my-reviews');
            });
    }

    return (
        <div>
            {/* Service Details Section */}
            <div className="bg-base-100">
                <h1 className="text-3xl md:text-5xl font-bold text-center my-10">Buy a perfect {category} that suits you</h1>

                <div className='flex justify-center'>
                    <img className='w-4/5 mx-auto' src={img} alt="home" />
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

                <div className="flex flex-col mt-10 w-4/5 mx-auto border-opacity-50 text-center">
                    <div className="grid card p-4 bg-base-200 rounded-box place-items-center">
                        <h3 className='text-3xl font-bold pb-2'>{category} Details</h3>
                        <p className='text-md lg:text-lg font-semibold'><FontAwesomeIcon icon={faBed} /> Bed: {details[0].bed}</p>
                        <p className='text-md lg:text-lg font-semibold'><FontAwesomeIcon icon={faBathtub} /> Bath: {details[0].bath}</p>
                        <p className='text-md lg:text-lg font-semibold'><FontAwesomeIcon icon={faPlusCircle} /> Facility: {details[0].facility}</p>
                        <p className='text-md lg:text-lg font-semibold'><FontAwesomeIcon icon={faAreaChart} /> Area: {details[0].area} sqr ft.</p>
                        <p className='text-md lg:text-lg font-semibold'><FontAwesomeIcon icon={faMapMarkerAlt} /> Location: {location}</p>
                        <p className='text-md lg:text-lg font-semibold'><FontAwesomeIcon icon={faDollar} /> Price: ${price}</p>
                        <p className='text-md lg:text-lg font-semibold'><FontAwesomeIcon className='text-warning' icon={faStar} /> Ratings: {rating}</p>
                    </div>

                    <div className="divider my-10"><button className='btn btn-primary w-100 mx-auto' onClick={() => setVisible(true)} primary='true'>View Gallery</button></div>

                    <div className="grid card p-4 bg-base-200 rounded-box place-items-center">
                        <h3 className='text-3xl font-bold'>Owner Details</h3>
                        <img className="mask mask-decagon w-32" src={owner[0].photo || "https://img.myloview.com/stickers/user-icon-vector-people-icon-profile-vector-icon-person-illustration-business-user-icon-users-group-symbol-male-user-symbol-700-223068886.jpg"} alt="owner" />
                        <p className='text-md lg:text-lg font-semibold'><FontAwesomeIcon icon={faUserAlt} /> Name: {owner[0].name}</p>
                        <p className='text-md lg:text-lg font-semibold'><FontAwesomeIcon icon={faPhone} /> Phone: {owner[0].phone}</p>
                        <p className='text-md lg:text-lg font-semibold'><FontAwesomeIcon icon={faEnvelope} /> Email: {owner[0].email}</p>
                    </div>
                </div>
            </div>

            <div className="divider mt-10"></div>

            {/* Review Section */}
            <div className='mb-10 w-4/5 mx-auto'>
                <h1 className="text-4xl md:text-5xl font-bold text-center pb-5">Reviews</h1>

                {
                    reviews.length === 0 ?
                        <Spinner></Spinner>
                        :
                        <>
                            {
                                reviews.map(review => <ReviewSection
                                    key={review._id}
                                    review={review}
                                ></ReviewSection>)
                            }
                        </>
                }


                {
                    user?.email ?
                        <div className="card-actions justify-center mt-10">
                            <label htmlFor="my-modal" className="btn btn-primary">Add a Review</label>
                        </div>
                        :
                        <div className="card-actions justify-center mt-10">
                            <p>Want to add your review? Please <Link to='/login' className='text-primary font-bold underline'>Login</Link></p>
                        </div>
                }

                {/* <div className="card-actions justify-center mt-10">
                    <label htmlFor="my-modal" className="btn btn-primary">Add a Review</label>
                </div> */}
            </div>

            {/* Modal Body */}
            <form onSubmit={handleAddReview}>
                <input type="checkbox" id="my-modal" className="modal-toggle" />

                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg mt-5">Give us your rating & valuable review on our service!</h3>

                        <label className="input-group input-group-vertical my-5">
                            <span className='flex justify-between'>
                                <span className='pl-0'>Rating</span>
                                <div className="rating">
                                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                                </div>
                            </span>

                            <select name='rating' className="select select-bordered w-full">
                                <option disabled>Select</option>
                                <option defaultValue>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </label>

                        <textarea name='comment' required className="textarea textarea-bordered w-full" placeholder="Write comment..."></textarea>

                        <div className="modal-action">
                            <label htmlFor="my-modal">
                                <input className="btn btn-primary" type="submit" value="Post Review" />
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default ServiceDetails;