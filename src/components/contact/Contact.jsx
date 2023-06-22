import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fyhr4u",
        "template_gjzbovg",
        form.current,
        "awMPOUCU7Al3Qnmpo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="top__contact__section">
      <div className="top__contacts__container">
        <div className="headings__container">
          <h2>Get in Touch</h2>
          <h1>Contact Me</h1>
        </div>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMail className="contact__option-icon" />
              <h5>ajinkyavidwans18@gmail.com</h5>
              <a href="mailto:ajinkyavidwans18@gmail.com">Send Email</a>
            </article>
            <article className="contact__option">
              <FaWhatsapp className="contact__option-icon" />
              <h5>8551096556</h5>
              <a href="https://wa.me/918551096556" target="_blank">
                Send Text
              </a>
            </article>
            <article className="contact__option">
              <SiCodeforces className="contact__option-icon" />
              <h5>vidwansAD</h5>
              <a href="https://codeforces.com/usertalk?other=vidwansad">
                Send Message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your message"
              required
            />
            <button type="submit" className="btn btn-primary send__button">
              Send Message
            </button>

            <h1>Successfully sent your message!</h1>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
