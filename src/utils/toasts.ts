import { toast } from 'react-toastify';

export const successToast = () => toast.success('Logged in successfully', {
  position: 'top-center',
  autoClose: 5000,
});

export const errorToast = () => {
  toast.error('Error in login', {
    position: 'top-center',
    autoClose: 5000,
  });
};

export const errorTotpToast = () => {
  toast.error('TOTP is not filled', {
    position: 'top-center',
    autoClose: 5000,
  });
};