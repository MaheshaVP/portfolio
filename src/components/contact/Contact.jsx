import React, { useRef } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n85dc4r",
        "template_n0thh0b",
        form.current,
        "sOiqgQ7Cqe2PHf3KS"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          e.target.reset();
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

      <motion.div
        className="container contact_container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Contact Options */}
        <motion.div
          className="contact_options"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
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
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
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
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
