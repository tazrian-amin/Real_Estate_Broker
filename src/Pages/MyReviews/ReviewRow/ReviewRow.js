import { faEdit, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete }) => {
    const { name, comment, photo, rating, _id } = review;

    return (
        <tr className='text-center'>
            <td>
                <div className="flex items-center justify-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>
            <td>
                <p className='font-semibold'>{comment.slice(0, 102)}</p>
                <p className='font-semibold'>{comment.slice(102, 202)}</p>
            </td>
            <td>
                <div className="rating">
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                </div>
                <p className='font-semibold'>{rating}</p>
            </td>
            <th>
                <Link to={`/my-reviews/${_id}`}>
                    <button className="btn btn-outline btn-primary">
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                    </button>
                </Link>
            </th>
            <td>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </label>
            </td>
        </tr>
    );
};

export default ReviewRow;