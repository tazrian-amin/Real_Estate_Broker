import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// common function to show toast message 
const showToastMessage = (message) => {
    return toast.success(message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export { showToastMessage };