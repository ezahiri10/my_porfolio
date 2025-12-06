"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FormEvent, useState } from "react";
import axios from "axios";
import { ArrowPathIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    initial: { x: 0, rotate: 0 },
    hover: { x: 3, rotate: -20 },
    tap: { x: 0, rotate: 0 },
  };

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-8 px-4 md:px-0">
      
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h5 className="text-xl font-bold text-white py-2">Let's Connect</h5>
        <p className="text-secondary-500 mb-4 max-w-md">
          I'm open to projects and collaborations! Drop me a message below.
        </p>
        <motion.div 
          className="flex flex-row gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
            <Link href="https://github.com/ezahiri10" target="_blank">
              <FaGithub className="w-6 h-6 text-white hover:text-primary-500 transition-colors" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
            <Link
              href="https://www.linkedin.com/in/el-mustapha-zahiri-a33760368/?locale=en_US"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6 text-white hover:text-primary-500 transition-colors" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gradient-to-br from-secondary-800/50 to-secondary-900/50 p-6 rounded-xl shadow-lg border border-primary-500/10 backdrop-blur-sm"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {successMessage && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-green-500 font-medium text-center transition-opacity duration-500 bg-green-500/10 p-3 rounded-lg border border-green-500/30"
          >
            ✓ {successMessage}
          </motion.p>
        )}
        {errorMessage && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 font-medium text-center transition-opacity duration-500 bg-red-500/10 p-3 rounded-lg border border-red-500/30"
          >
            ✕ {errorMessage}
          </motion.p>
        )}

        <motion.input
          type="email"
          value={email}
          required
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-secondary-900 placeholder-secondary-600 text-gray-200 border border-secondary-700 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          disabled={isSubmitting}
          whileFocus={{ scale: 1.02 }}
        />

        <motion.input
          type="text"
          value={subject}
          required
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          className="bg-secondary-900 placeholder-secondary-600 text-gray-200 border border-secondary-700 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          disabled={isSubmitting}
          whileFocus={{ scale: 1.02 }}
        />

        <motion.textarea
          value={message}
          required
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          className="bg-secondary-900 placeholder-secondary-600 text-gray-200 border border-secondary-700 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none h-32"
          disabled={isSubmitting}
          whileFocus={{ scale: 1.02 }}
        />

        <motion.button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-3 px-6 rounded-lg w-full flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
          variants={buttonVariants}
          initial="initial"
          whileHover={!isSubmitting ? "hover" : "initial"}
          whileTap={!isSubmitting ? "tap" : "initial"}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <ArrowPathIcon className="h-5 w-5" />
              </motion.div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </motion.div>
            </>
          )}
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-secondary-500 text-xs text-center"
        >
          We'll get back to you within 24 hours
        </motion.p>
      </motion.form>
    </section>
  );
};

export default EmailSection;
