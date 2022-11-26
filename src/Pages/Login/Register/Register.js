import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { setAuthToken } from '../../../API/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Spinner from '../../../utilities/Spinner';
import { showToastMessage } from '../../../utilities/utilities';

const Register = () => {
    useTitle('Register');
    const { createUser, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        // Added password validation for user registration
        if (password !== confirm) {
            return showToastMessage('Passwords did not match!');
        }
        else if (password.length < 6) {
            return showToastMessage('Password must have at least 6 characters!');
        }
        else {
            createUser(email, password)
                .then(res => {
                    const user = res.user;
                    user.displayName = name;
                    setAuthToken(user);
                    showToastMessage('User Registered Successfully!');
                    form.reset();
                    setTimeout(() => {
                        navigate(from, { replace: true });
                    }, 3000);
                })
                .then(err => {
                    console.error(err);
                    showToastMessage(err?.message);
                    setLoading(false);
                })
        }
    }
    return (
        <>
            <ToastContainer />
            {
                loading ?
                    <Spinner></Spinner>
                    :
                    <div className="hero w-full md:w-4/5 mx-auto rounded-none md:rounded-md border-y-2 md:border-2 border-neutral my-10 pb-10 md:pb-0">
                        <div className="hero-content grid md:gap-5 lg:gap-20 md:grid-cols-2 flex-col lg:flex-row">
                            <div className="text-center lg:text-left">
                                <img className='w-full' src="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                                <h1 className="text-5xl text-center mt-5 font-bold">Register</h1>
                                <form onSubmit={handleRegister} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' required placeholder="Your Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' required placeholder="Your Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' required placeholder="Password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="password" name='confirm' required placeholder="Confirm Password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Register" />
                                    </div>
                                </form>
                                <p className='text-center'>Already Have an Account? <Link to='/login' className='text-primary font-bold underline my-5'>Login</Link></p>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Register;