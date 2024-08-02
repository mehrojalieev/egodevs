import './App.scss'
import Logo from '../public/logo.png'
import { FaLinkedinIn, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {


  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Your email has been sent", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    })
  }

  return (
    <>
      <main className='main container'>
        <h3>Our website is Coming Soon</h3>
        <p>Before we jump into our list of coming soon page examples, let’s take a quick look at why you should create one of these for your own website launch.</p>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder='Enter your email' />
          <button type='submit'>SUBMIT</button>
        </form>
        <div className="social-actions">
          <h6>Follow us for update:</h6>
          <div className="icons">
            <a target='_blank' href='https://www.linkedin.com/company/egodevs/'><FaLinkedinIn /></a>
            <a target='_blank' href='https://www.instagram.com/egodevs/'><FaInstagram /></a>
            <a target='_blank' href='https://t.me/ego_devs'><FaTelegramPlane /></a>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
