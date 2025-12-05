"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FormEvent, useState } from "react";
import axios from "axios";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

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

      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error: any) {
      console.error("Error sending email:", error);
      setErrorMessage(
        "Failed to send email: " +
          (error.response?.data?.message || error.message)
      );
      setTimeout(() => setErrorMessage(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = email && subject && message;

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-8">
      
      {/* LEFT SIDE */}
      <div>
        <h5 className="text-xl font-bold text-white py-2">Let's Connect</h5>
        <p className="text-secondary-500 mb-4 max-w-md">
          I'm open to projects and collaborations! Drop me a message below.
        </p>
        <div className="flex flex-row gap-4">
          <Link href="https://github.com/ezahiri10" target="_blank">
            <FaGithub className="w-6 h-6 text-white hover:text-primary-500 transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/el-mustapha-zahiri-a33760368/?locale=en_US"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6 text-white hover:text-primary-500 transition-colors" />
          </Link>
        </div>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-secondary-800 p-6 rounded-xl shadow-md"
      >
        {successMessage && (
          <p className="text-green-500 font-medium text-center transition-opacity duration-500">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-500 font-medium text-center transition-opacity duration-500">
            {errorMessage}
          </p>
        )}

        <input
          type="email"
          value={email}
          required
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-secondary-900 placeholder-secondary-600 text-gray-200 border border-secondary-700 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 focus:ring-2 focus:ring-primary-500"
          disabled={isSubmitting}
        />

        <input
          type="text"
          value={subject}
          required
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          className="bg-secondary-900 placeholder-secondary-600 text-gray-200 border border-secondary-700 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 focus:ring-2 focus:ring-primary-500"
          disabled={isSubmitting}
        />

        <textarea
          value={message}
          required
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          className="bg-secondary-900 placeholder-secondary-600 text-gray-200 border border-secondary-700 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 focus:ring-2 focus:ring-primary-500"
          disabled={isSubmitting}
        />

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="relative bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full flex justify-center items-center gap-2 disabled:opacity-50 transition-colors"
        >
          {isSubmitting && (
            <ArrowPathIcon className="h-5 w-5 animate-spin text-white" />
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default EmailSection;
