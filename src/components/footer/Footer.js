import React from 'react';
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi';
import './FooterStyles.css';
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
  const [state, handleSubmit] = useForm("xoqgrvyg");

  if (state.succeeded) {
    return (
      <div className="success-container">
        <div className="success-message">
          <p className='center'>Thanks for subscribing!</p>
        </div>
      </div>
    );
  }

  return (
    <div className='footer'>
      <div className="container">
        {/* Your existing footer content */}
        <form onSubmit={handleSubmit}>
          <h3>Join Our Team</h3>
          <input type="email" name="email" placeholder='Enter your email' required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <FiMail className='mail-icon' />
          <div className="social-group">
            <FiInstagram className='social-icon' />
            <FiFacebook className='social-icon' />
            <FiLinkedin className='social-icon' />
            <FiDribbble className='social-icon' />
            <FiGithub className='social-icon' />
          </div>
          <button type="submit" disabled={state.submitting}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
