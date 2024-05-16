import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

import Form from "@elements/Form";

export default function DiscussForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formdata.name || !formdata.email || !formdata.message) {
      toast.error("Please fill all the fields");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_c72sovn",
        "template_3os0tyb",
        e.target,
        "0G77_CfuuxUey0DMU"
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          toast.success("Got your message.I will get back to you!");
          setFormdata({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Failed to send email. Error:", error);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="container flex flex-col justify-center mx-auto mt-10"
    >
      <h1 className="text-5xl font-bold text-center text-theme-blue">
        Lets Connect
      </h1>

      <p className="mb-12 text-lg font-light text-center text-gray-400">
        Fill out the form below to get in touch. Let's build something amazing!
      </p>
      <form onSubmit={sendEmail} className="flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center w-full">
          <Form
            id="name"
            name="name"
            type="text"
            value={formdata.name}
            placeholder="Your name"
            className="mb-3 md:w-[500px] w-72"
            onChange={handleChange}
          />
          <Form
            id="email"
            name="email"
            type="email"
            value={formdata.email}
            placeholder="Your email address"
            className="mb-3 md:w-[500px] w-72"
            onChange={handleChange}
          />

          <Form
            id="message"
            name="message"
            type="textarea"
            value={formdata.message}
            placeholder="Your Message"
            className="w-2/3 mb-4 lg:w-1/2"
            onChange={handleChange}
          />

          <button
            className="px-12 py-3 mx-auto mt-5 mb-5 text-xl text-white transition duration-200 border-2 rounded-full bg-theme-purple border-theme-purple hover:bg-dark-theme-purple focus:outline-none"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="text-white animate-pulse">Submitting ...</span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
      <ToastContainer />
    </motion.div>
  );
}
