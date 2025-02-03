import { toast } from 'react-toastify';

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
  });
};

export const showInfoToast = (message) => {
  toast.info(message, {
    position: "top-center",
    autoClose: 3000,
  });
};
