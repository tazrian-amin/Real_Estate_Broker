import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { setAuthToken } from '../../../API/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Spinner from '../../../utilities/Spinner';
import { showToastMessage } from '../../../utilities/utilities';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    useTitle('Login');
    const { login, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(res => {
                const user = res.user;
                setAuthToken(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                showToastMessage(err.message);
                setLoading(false);
            })
    }
    return (
        <>
            <ToastContainer />
            {
                loading ?
                    <Spinner></Spinner>
                    :
                    <div className="hero w-full md:w-4/5 mx-auto rounded-none md:rounded-md border-y-2 md:border-2 border-neutral my-10 pb-10 md:pb-0">
                        <div className="hero-content grid md:gap-10 lg:gap-20 md:grid-cols-2 flex-col lg:flex-row">
                            <div className="text-center lg:text-left">
                                <img className='w-full' src="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                                <h1 className="text-5xl text-center mt-5 font-bold">Login</h1>
                                <form onSubmit={handleLogin} className="card-body pb-0">
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
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Login" />
                                    </div>
                                </form>
                                <SocialLogin></SocialLogin>
                                <p className='text-center'>Don't have an account? <Link to='/register' className='text-primary underline font-bold my-5'>Register</Link></p>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Login;