import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dt4isn7", 
        "template_yli3akc",
        form.current,
        "5MREjGf7vZ25m2RDX"
      )
      .then(
        () => {
          form.current.reset(); // Reset form fields after sending
          toast.success("Message Sent Successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Error Sending Message.", error);
          toast.error("Failed to Send Message. Please Try Again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };
  return (
    <>
      <Helmet>
        <title>Natnael Mekuria</title>
        <meta
          name="description"
          content="Explore AI, AI Chat, and CV projects by Natnael Mekuria."
        />
        <meta
          name="keywords"
          content="AI, AI Chat, GenAI, Portfolio, Natnael Mekuria"
        />
      </Helmet>
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <ToastContainer />

        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 mt-5">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>

          <motion.div
            className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-500 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 text-gray-300 space-y-3">
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-cyan-400" />{" "}
                mekurianatnael98@gmail.com
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2 text-cyan-400" /> +251923427064
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-cyan-400" /> Addis Ababa,
                Ethiopia
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
