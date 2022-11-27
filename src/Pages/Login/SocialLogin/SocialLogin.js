import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { setAuthToken } from '../../../API/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { showToastMessage } from '../../../utilities/utilities';

const SocialLogin = () => {

    const { googleSignIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                setAuthToken(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                showToastMessage(err?.message);
                setLoading(false);
            })
    }

    return (
        <div className='mx-8 mb-4'>
            <div className="divider mb-4">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-block btn-outline btn-success">Continue with Google</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;