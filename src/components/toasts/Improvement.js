import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect } from 'react';

const CustomToastWithLink = () => (
  <div>
    <a
      style={{ textDecoration: 'none', color: 'white' }}
      target='_blank'
      rel='noreferrer'
      href='https://dev.azure.com/unit4-global/U4ERP/_queries/query/b638d1db-72b3-4a92-9c37-d293ee550c3c'>
      It's been more than 3 days! Check your improvements
    </a>
  </div>
);

const Improvement = ({ message }) => {
  useEffect(() => {
    let lastReminder =
      JSON.parse(localStorage.getItem('improvementReminder')) ||
      new Date().getTime();
    let now = new Date().getTime();
    let dayInMs = 86400000;

    if (now - lastReminder > dayInMs * 3) {
      notify();
      localStorage.setItem('improvementReminder', JSON.stringify(now));
    }
  }, []);

  const notify = () =>
    toast(CustomToastWithLink, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  return (
    <div>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};

export default Improvement;
