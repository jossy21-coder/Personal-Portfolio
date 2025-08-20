// src/components/Experience/Experience.jsx
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations";
import { Helmet } from "react-helmet-async";

const experiences = [
  {
    category: "AI & Generative AI Experience",
    items: [
      "Developed and deployed LLM-powered applications (Chatbots, RAG systems, fine-tuned GPT models).",
      "Engineered multi-agent AI systems using Langflow, CrewAI, and custom orchestration pipelines.",
      "Worked on generative applications for text, image, and audio (NLP, diffusion models, TTS/STT).",
      "Integrated vector databases (Pinecone, Weaviate, FAISS) for semantic search and retrieval.",
    ],
  },
  {
    category: "Machine Learning & Applied AI",
    items: [
      "Built predictive models for regression, classification, and forecasting (finance, marketing, healthcare).",
      "Implemented reinforcement learning systems including trading bots and autonomous decision-making tools.",
      "Developed recommendation systems for personalized products and content delivery.",
    ],
  },
  {
    category: "Full-Stack & Applied AI Projects",
    items: [
      "Designed SaaS AI tools with React, FastAPI, and cloud deployment (AWS, Vercel).",
      "Automated workflows in business intelligence, document processing, and customer support.",
      "Integrated AI into IoT pipelines for predictive maintenance and anomaly detection.",
    ],
  },
];

export default function Experience() {
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
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-4xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        {/* Experience Categories */}
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                {exp.category}
              </h3>
              <ul className="space-y-3 text-gray-300">
                {exp.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cyan-400 mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
