import React from 'react';
import './ContactStyles.css';
import beachVid from '../../assets/4440864-hd_1920_1080_25fps.mp4';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqgrvyg");

  if (state.succeeded) {
    return (
      <div className="contact success"> {/* Dodaj klasę 'success' */}
        <div className="success-container">
          <div className="success-message">
            <div className="circle">
              <FontAwesomeIcon icon={faCheckCircle} size="3x" color="green" />
            </div>
            <p className='center'>Dziękujemy za  twoją wiadomość!</p>
          </div>
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
            <h1 className='mt-20 text-5xl'><span></span>Kontakt</h1>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Wprowadź swoją nazwę"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Wprowadź swój email"
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
                placeholder='Napisz wiadomość'
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" className='mb-8' disabled={state.submitting}>
              Wyślij
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;
