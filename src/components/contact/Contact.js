import React from 'react';
import './ContactStyles.css';
import beachVid from '../../assets/beachVid.mp4';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqgrvyg");

  if (state.succeeded) {
    return (
      <div className="success-container">
        <div className="success-message">
          <div className="circle">
            <FontAwesomeIcon icon={faCheckCircle} size="3x" color="green" />
          </div>
          <p className='center'>Thanks for your message!</p>
        </div>
      </div>
    );
  }

  return (
    <div className='contact'>
      <div className="video-background">
        <video autoPlay loop muted className="video">
          <source src={beachVid} type="video/mp4" />
        </video>
      </div>
      {/* Ensure that navbar is only rendered if the form is not submitted */}
      {!state.succeeded && (
        <div>
          {/* Your navbar component goes here */}
        </div>
      )}
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1><span>Contact</span> Us</h1>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows='2'
                placeholder='Enter your message'
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" className='mb-8' disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
