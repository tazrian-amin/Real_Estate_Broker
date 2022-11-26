import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateMyReview = () => {
    const { name, comment, photo, rating, _id } = useLoaderData();
    console.log(name, comment, photo, rating, _id);
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
                    alert('Review updated successfully!');
                }
                form.reset();
                navigate('/my-reviews');
            })
            .catch(err => {
                console.error(err);
                alert('Could not update!');
                form.reset();
            })
    }

    return (
        <form onSubmit={handleUpdate}>
            <h3 className="font-bold text-lg mt-5">Update Your Review & Info</h3>

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

            <input className="btn btn-primary" type="submit" value="Update Review" />
        </form>
    );
};

export default UpdateMyReview;