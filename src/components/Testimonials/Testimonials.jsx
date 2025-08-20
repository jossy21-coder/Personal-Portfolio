import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Houston Computer",
      rating: 5.0,
      feedback:
        "Natnael did great work, always had a positive attitude, and was quick to respond to messages. I would love to work with him again.",
    },
    {
      name: "Gavin",
      rating: 4.7,
      feedback:
        "Natnael is a skilled programmer with timely communication. If your project requires a comprehensive understanding of the English language, or has nuances that require fluency, or detailed requests, you may want to put extra time into describing them or ensure he fully understands the concepts. The project took longer than he originally estimated and cost a bit more as well. But, compared to the average freelancer, I think he scores quite well.",
    },
    {
      name: "John",
      rating: 5.0,
      feedback:
        "Great working with Natnael! All aspects of the project were completed. He took care of every detail needed to complete the task!",
    },
    {
      name: "Stephen Jones",
      rating: 5.0,
      feedback:
        "Nati is a good freelancer and I will be re-hiring him for another project. Recommended.",
    },
    {
      name: "Salah",
      rating: 5.0,
      feedback:
        "He is very knowledgeable and committed. It was a pleasure working him.",
    },
  ];

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
    <section id="testimonials" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Client <span className="text-cyan-400">Testimonials</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} index={index} />
          ))}
        </div>
      </div>
      </section>
    </>
  );
}

function TestimonialCard({ testimonial, index }) {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 160;

  const isLong = testimonial.feedback.length > MAX_LENGTH;
  const displayedText = expanded
    ? testimonial.feedback
    : testimonial.feedback.slice(0, MAX_LENGTH) + (isLong ? "..." : "");

  // Helper to render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalf) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    while (stars.length < 5) {
      stars.push(
        <FaRegStar key={`empty-${stars.length}`} className="text-gray-500" />
      );
    }

    return stars;
  };

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 p-6 hover:shadow-cyan-500/30 transition"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index + 10}
    >
      <p className="text-gray-300 mb-4">&quot;{displayedText}&quot;</p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-cyan-400 hover:underline text-sm mb-4 cursor-pointer"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}

      <div className="flex items-center justify-between">
        <span className="font-semibold text-cyan-400">{testimonial.name}</span>
        <div className="flex items-center space-x-2">
          <div className="flex">{renderStars(testimonial.rating)}</div>
          <span className="font-bold text-yellow-400">
            {testimonial.rating}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    feedback: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
