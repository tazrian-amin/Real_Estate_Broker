import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { showToastMessage } from '../../utilities/utilities';

const Sell = () => {
    useTitle('Sell');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSellingHouse = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const name = form.name.value;
        const email = user?.email || 'Unregistered';
        const phone = form.phone.value;
        const location = form.location.value;
        const bed = form.bed.value;
        const bath = form.bath.value;
        const area = form.area.value;
        const facility = form.facility.value || 'No Additional Facility';
        const image = form.image.value;
        const price = form.price.value;

        const addToBuy = {
            category,
            details: [
                {
                    area,
                    bath,
                    bed,
                    facility,
                    img1: image,
                }
            ],
            img: image,
            location,
            owner: [
                {
                    email,
                    name,
                    phone,
                    photo: user?.photoURL,

                }
            ],
            price,
            rating: 5,
        }

        fetch('http://localhost:5000/buy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('user-access-token')}`
            },
            body: JSON.stringify(addToBuy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    showToastMessage('Property added successfully!')
                }
                form.reset();
                navigate('/buy');
            })
    }

    return (
        <div>
            <h1 className="text-5xl font-bold text-center py-5">Add Your Property</h1>
            <p className='text-center text-lg font-semibold mb-5'>Fill up the form to add your property. <br /> Reach millions of buyers <br />With a single post!</p>

            <form onSubmit={handleSellingHouse} className='w-4/5 mx-auto rounded-md border-2 border-neutral my-10 p-10'>
                <h1 className="text-5xl font-bold text-center pb-5">Form</h1>
                <div className='flex flex-col md:flex-row items-center justify-evenly my-5'>
                    <div className="form-control btn btn-outline btn-success w-full lg:w-1/5">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">Apartment</span>
                            <input type="radio" name="category" value={'Apartment'} className="radio checked:bg-primary" required />
                        </label>
                    </div>
                    <div className="form-control btn btn-outline btn-success w-full lg:w-1/5 my-4">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">House</span>
                            <input type="radio" name="category" value={'House'} className="radio checked:bg-primary" required />
                        </label>
                    </div>
                    <div className="form-control btn btn-outline btn-success w-full lg:w-1/5">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">Condominium</span>
                            <input type="radio" name="category" value={'Condominium'} className="radio checked:bg-primary" required />
                        </label>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
                    <label className="input-group input-group-vertical">
                        <span>Name</span>
                        <input name='name' type="text" placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered w-full" required />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Email</span>
                        <input name='email' type="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Phone</span>
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" required />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Location</span>
                        <input name='location' type="text" placeholder="House Location" className="input input-bordered w-full" required />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Bed</span>
                        <input name='bed' type="number" placeholder="Total Bedrooms" className="input input-bordered w-full" required />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Bath</span>
                        <input name='bath' type="number" placeholder="Total Bathrooms" className="input input-bordered w-full" required />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Area</span>
                        <input name='area' type="number" placeholder="Total Area in Square Feet" className="input input-bordered w-full" required />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Facility</span>
                        <input name='facility' type="text" placeholder="Additional Facility" className="input input-bordered w-full" />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Photo URL</span>
                        <input name='image' type="text" placeholder="Photo URL of Your Property" className="input input-bordered w-full" required />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Price</span>
                        <input name='price' type="number" placeholder="Price in USD" className="input input-bordered w-full" required />
                    </label>
                </div>
                <input className='btn btn-primary my-2' type="submit" value="Add Property" />
            </form>
        </div>
    );
};

export default Sell;