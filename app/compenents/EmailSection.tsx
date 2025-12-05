"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FormEvent, useState } from "react";
import axios from "axios";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      setIsSubmitting(true);

      const res = await axios.post(
        "/api/contact",
        { email, subject, message },
        { headers: { "Content-Type": "application/json" } }
      );

      setSuccessMessage("Email sent successfully!");
      setEmail("");
      setSubject("");
      setMessage("");

      // Hide message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error: any) {
      setErrorMessage("Failed to send email: " + (error.response?.data?.message || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "bg-secondary-900 placeholder-secondary-600 text-gray-200 border border-secondary-700 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300";

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-8 px-4 md:px-12">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center gap-4">
        <h5 className="text-2xl md:text-3xl font-semibold text-white">Let's Connect</h5>
        <p className="text-secondary-500 max-w-md">
          I'm always open to collaborate on exciting projects or just have a chat. Drop me a message!
        </p>
        <div className="flex flex-row gap-4 text-2xl">
          <Link href="https://github.com/ezahiri10" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 hover:text-primary-500 transition-colors duration-300" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/el-mustapha-zahiri-a33760368/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 hover:text-primary-500 transition-colors duration-300" />
          </Link>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {successMessage && (
          <div className="bg-green-500 text-white p-3 rounded-lg">
            {successMessage}
          </div>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <label className="flex flex-col gap-1">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="Enter your email"
            required
          />
        </label>

        <label className="flex flex-col gap-1">
          Subject
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={inputClass}
            placeholder="Enter your subject"
            required
          />
        </label>

        <label className="flex flex-col gap-1">
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClass + " h-32 resize-none"}
            placeholder="Enter your message"
            required
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-300 ease-in-out"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default EmailSection;
