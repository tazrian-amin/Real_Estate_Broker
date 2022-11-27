import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { showToastMessage } from '../../utilities/utilities';
import ReviewRow from './ReviewRow/ReviewRow';

const MyReviews = () => {

    useTitle('My Reviews');
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://y-zeta-coral.vercel.app/my-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-access-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if (proceed) {
            fetch(`https://y-zeta-coral.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('user-access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        showToastMessage('Review deleted successfully!');
                        const remainingReviews = reviews.filter(review => review._id !== id);
                        setReviews(remainingReviews);
                    }
                    else {
                        showToastMessage('Could not delete!');
                    }
                })
        }
    }

    return (
        <>
            {
                reviews.length === 0 ?
                    <div className="hero min-h-screen w-full mx-auto" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">No Reviews Were Added!</h1>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="overflow-x-auto min-h-screen w-full my-10">
                        <table className="table w-full">
                            <thead>
                                <tr className='text-center'>
                                    <th className='text-lg'>User</th>
                                    <th className='text-lg'>Review</th>
                                    <th className='text-lg'>Rating</th>
                                    <th className='text-lg'>Edit</th>
                                    <th className='text-lg'>Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    reviews.map(review => <ReviewRow
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                    ></ReviewRow>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
            <ToastContainer />
        </>
    );
};

export default MyReviews;