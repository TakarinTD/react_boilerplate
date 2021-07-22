import { toast } from 'react-toastify';

export const toastError = (error) => {
  let message = null;
  if (typeof error === 'object' && error.message) {
    ({ message } = error);
  }
  if (message !== 'undefined' && message !== null && message !== '') {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }
};

export const toastSuccess = (msg) => {
  if (msg !== 'undefined' && msg !== null && msg !== '') {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }
};

export const toastWarning = (msg) => {
  if (msg !== 'undefined' && msg !== null && msg !== '') {
    toast.warning(msg, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }
};

export const toastMsgError = (msg) => {
  if (msg !== 'undefined' && msg !== null && msg !== '') {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }
};
