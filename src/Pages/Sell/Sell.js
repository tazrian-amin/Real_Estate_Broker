import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
        const img1 = form.image.value;
        const price = form.price.value;
        // used default images
        const img2 = 'https://images.unsplash.com/photo-1498409505433-aff66f7ba9e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80';
        const img3 = 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=913&q=80';
        const images = { img1, img2, img3 };

        const addToBuy = {
            category,
            details: [
                {
                    area,
                    bath,
                    bed,
                    facility,
                    img1: images.img1,
                    img2: images.img2,
                    img3: images.img3
                }
            ],
            img: images.img1,
            location,
            owner: [
                {
                    email,
                    name,
                    phone,
                    photo: user?.photoURL
                }
            ],
            price,
            rating: 5,
        }

        fetch('https://y-zeta-coral.vercel.app/buy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('user-access-token')}`
            },
            body: JSON.stringify(addToBuy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    showToastMessage('Property added successfully!');
                }
                form.reset();
                setTimeout(() => {
                    navigate('/buy');
                }, 3000);
            })
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <h1 className="text-5xl font-bold text-center py-5">Add Your Property</h1>
            <p className='text-center text-lg font-semibold mb-5'>Fill up the form to add your property. <br /> Reach millions of buyers <br />With a single post!</p>

            <form onSubmit={handleSellingHouse} className='w-full md:w-4/5 px-5 mx-auto rounded-none md:rounded-md border-y-2 md:border-2 border-neutral my-10 py-10'>
                <h1 className="text-5xl font-bold text-center pb-5">Form</h1>
                <div className='flex flex-col lg:flex-row items-center justify-evenly my-5'>
                    <div className="form-control btn bg-gray-900 w-full lg:w-1/5">
                        <label className="label cursor-pointer">
                            <span className="label-text text-zinc-50 mr-2">Apartment</span>
                            <input type="radio" name="category" value={'Apartment'} className="radio bg-white checked:bg-success" required />
                        </label>
                    </div>

                    <div className="form-control btn bg-gray-900 w-full lg:w-1/5 my-4">
                        <label className="label cursor-pointer">
                            <span className="label-text text-zinc-50 mr-2">House</span>
                            <input type="radio" name="category" value={'House'} className="radio bg-white checked:bg-success" required />
                        </label>
                    </div>

                    <div className="form-control btn bg-gray-900 w-full lg:w-1/5">
                        <label className="label cursor-pointer">
                            <span className="label-text text-zinc-50 mr-2">Condominium</span>
                            <input type="radio" name="category" value={'Condominium'} className="radio bg-white checked:bg-success" required />
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

                <input className='btn hover:text-zinc-50 bg-zinc-50 text-gray-900 font-bold my-2 w-full' type="submit" value="Add Property" />
            </form>
        </div>
    );
};

export default Sell;