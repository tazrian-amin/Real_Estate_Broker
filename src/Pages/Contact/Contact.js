import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import { showToastMessage } from '../../utilities/utilities';

const Contact = () => {

    useTitle('Contact');
    const navigate = useNavigate();
    const handleContact = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        showToastMessage(`Hi ${userName}! We will contact you soon!`);
        form.reset();
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }

    return (
        <div className="hero w-full md:w-4/5 mx-auto rounded-none md:rounded-md border-y-2 md:border-2 border-neutral my-10 pb-10 md:pb-0">
            <div className="hero-content grid md:gap-5 lg:gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-full' src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl text-center mt-5 font-bold">Contact Us</h1>
                    <form onSubmit={handleContact} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Your Email" required className="input input-bordered" />
                        </div>
                        <textarea name='comment' className="textarea textarea-bordered w-full mt-5" required placeholder="Write your message..."></textarea>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Contact;