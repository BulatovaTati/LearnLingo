import { Toaster, toast } from 'react-hot-toast';

const toastStyles = {
    success: {
        style: {
            border: '3px solid var(--main-accent)',
            padding: '10px',
            color: '#101828',
            backgroundColor: 'var(--main-accent-light)',
        },
    },
    error: {
        style: {
            border: '3px solid #F00000',
            padding: '10px',
            color: '#101828',
            backgroundColor: '#fbfbfb',
        },
    },
};

export const showToast = (type = 'success', message = 'Action completed') => {
    toast[type](message, toastStyles[type]);
};

const CustomToaster = () => {
    return <Toaster position="top-center" reverseOrder={false} />;
};

export default CustomToaster;
