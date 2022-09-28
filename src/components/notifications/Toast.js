import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect } from 'react';

const CustomToastWithLink = (message, url) => (
  <div className='hover:cursor-default'>
    <img
      alt='toast'
      style={{ width: '100px', margin: 'auto' }}
      src='https://i.pravatar.cc/300'></img>
    <h1 className='text-xl font-semibold text-center color:white'>{message}</h1>
    <p className='text-center underline color:white hover:cursor-pointer'>
      <a target='_blank' rel='noreferrer' href={url}>
        {url}
      </a>
    </p>
  </div>
);

const Toast = ({ message, url, minutes }) => {
  useEffect(() => {
    async function checkToast() {
      let now = new Date().getTime();
      let minuteInMs = 60000;

      let lastReminder =
        JSON.parse(localStorage.getItem('improvementReminder')) ||
        now - minuteInMs * minutes;

      if (now - lastReminder > minuteInMs * minutes) {
        message && notify(message, url);
        localStorage.setItem('improvementReminder', JSON.stringify(now));
      }
    }

    const intervalId = setInterval(() => {
      checkToast();
    }, 1000 * 10);
    return () => clearInterval(intervalId);
  }, [message, minutes, url]);

  const notify = (message, url) =>
    toast(CustomToastWithLink(message, url), {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      newestOnTop: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      closeButton: false,
    });

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
