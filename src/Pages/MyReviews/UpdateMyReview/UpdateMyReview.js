import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { showToastMessage } from '../../../utilities/utilities';

const UpdateMyReview = () => {

    const { name, comment, photo, rating, _id } = useLoaderData();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const time = new Date();
        const name = form.name.value;
        const photo = form.photo.value;
        const rating = form.rating.value;

        const updatedReview = {
            photo,
            rating,
            name,
            comment,
            time
        }

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('user-access-token')}`
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    showToastMessage('Review updated successfully!');
                }
                form.reset();
                setTimeout(() => {
                    navigate('/my-reviews');
                }, 3000);
            })
            .catch(err => {
                console.error(err);
                showToastMessage(err.message);
                form.reset();
            })
    }

    return (
        <form className='bg-base-100 w-full md:w-4/5 mx-auto rounded-none md:rounded-md border-y-2 md:border-2 border-neutral my-10 p-10' onSubmit={handleUpdate}>
            <ToastContainer></ToastContainer>
            <h1 className="text-4xl md:text-5xl font-bold text-center pb-5">Update Your Review & Info</h1>

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

                <select defaultValue={rating} name='rating' className="select select-bordered w-full">
                    <option disabled>Select</option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </label>

            <label className="input-group input-group-vertical">
                <span>Name</span>
                <input name='name' defaultValue={name} type="text" placeholder="Full Name" className="input input-bordered w-full" required />
            </label>

            <label className="input-group input-group-vertical my-5">
                <span>Photo URL</span>
                <input name='photo' defaultValue={photo} type="text" placeholder="New User Photo URL" className="input input-bordered w-full" />
            </label>

            <textarea name='comment' defaultValue={comment} className="textarea textarea-bordered w-full" placeholder="Update comment..."></textarea>

            <input className="btn btn-primary mt-5 w-full" type="submit" value="Update Review" />
        </form>
    );
};

export default UpdateMyReview;