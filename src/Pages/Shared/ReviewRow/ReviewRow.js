import { faEdit, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewRow = ({ review }) => {
    console.log(review)
    const { name, comment, photo, _id } = review;

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
                <p>{comment.slice(0, 98)}</p>
                <p>{comment.slice(98, 200)}</p>
            </td>
            <td>
                <div className="rating">
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                </div>
            </td>
            <th>
                <button className="btn btn-outline btn-info">
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                </button>
            </th>
            <td>
                <label>
                    <button className="btn btn-outline btn-error">
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </label>
            </td>
        </tr>
    );
};

export default ReviewRow;