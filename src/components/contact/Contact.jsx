import React, { useRef } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n85dc4r", // ✅ Your EmailJS service ID
        "template_n0thh0b", // ✅ Your EmailJS template ID
        form.current,
        "sOiqgQ7Cqe2PHf3KS" // ✅ Your EmailJS user ID (public key for emailjs-com)
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          e.target.reset(); // Optional: Reset form after submit
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        {/* Contact Options */}
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_icon" />
            <h4>Email</h4>
            <h5>maheshavp12@gmail.com</h5>
            <a
              href="mailto:maheshavp12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Mail
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_icon" />
            <h4>Message</h4>
            <h5>Telegram</h5>
            <a
              href="https://t.me/__mahesh___03___/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <FaWhatsapp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5>+91 ******6458</h5>
            <a
              href="https://api.whatsapp.com/send?phone=918309206458"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
