import React, { useState } from "react";
import emailjs from "emailjs-com";

import Footer from "../Components/Footer";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Replace these values with your EmailJS service ID, template ID, and user ID
    const serviceId = "service_vto0ays";
    const templateId = "template_iamt6hs";
    const userId = "EEsCPa402Y8DSj5XH";

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");
        // Clear the form after successful submission
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-center mt-25 pt-20 text-3xl md:text-5xl md:mt-10 mb-4">
        Contact Us
      </h1>
      <p className="text-center text-lg md:text-xl mb-8">
        Got questions or need to book a session? <br />
       Reach out - Let's Create
        Stunning memories together
      </p>
      <form className="w-full max-w-md mb-20" onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className="block  text-sm mb-2 " htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full bg-black p-2 text-gray-300 border"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2 " htmlFor="email">
            Your Email
          </label>
          <input
            className="w-full p-2 bg-black text-gray-300 border"
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-10">
          <label className="block text-sm mb-2" htmlFor="message">
            How can we help?
          </label>
          <textarea
            className="w-full bg-black p-2 text-gray-300 mb-1 border"
            id="message"
            rows="4"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button
              className="w-195 h-73 px-2 rounded-[35px] border border-white  font-[Poppins] bg-white font-medium text-black py-2 mb-20 hover:bg-gray-300 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
      <Footer/>
    </div>
  );
}
