import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../utilities/Spinner';
import Slide from './Slide';

const ClientsReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const [client1, client2, client3, client4] = reviews;

    const slideData = [
        {
            client: client1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            client: client2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            client: client3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            client: client4,
            prev: 3,
            id: 4,
            next: 1
        }
    ];
    return (
        <div className='bg-base-200 w-full md:w-4/5 mx-auto rounded-none md:rounded-md border-y-2 md:border-2 border-neutral my-10'>
            <h1 className="text-4xl md:text-5xl font-bold text-center pt-5">What Our Clients Say...</h1>
            {
                reviews.length === 0 ?
                    <Spinner></Spinner>
                    :
                    <>
                        <div className="carousel w-4/5 lg:w-3/5 mx-auto my-10 border-2 border-neutral rounded-3xl">
                            {
                                slideData.map(slide => <Slide
                                    key={slide.id}
                                    slide={slide}
                                ></Slide>)
                            }
                        </div>
                        <div className='flex justify-center'>
                            <Link to='/my-reviews' className="btn btn-primary mb-10">Add a Review</Link>
                        </div>
                    </>
            }
        </div>
    );
};

export default ClientsReview;