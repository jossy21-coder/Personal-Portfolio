import { motion } from "framer-motion";
import { Cpu, Brain, BarChart3, Zap } from "lucide-react"; 
import { fadeInUp } from "../../animations";
import { Helmet } from "react-helmet-async";

const skillsData = [
  {
    category: "Core Generative AI Work",
    icon: Brain,
    skills: [
      "LLM Applications: Chatbots, RAG systems, fine-tuning GPT models, prompt engineering.",
      "Content Generation: Text, image, or audio generation projects (NLP, diffusion models, TTS/STT).",
      "Agentic AI Systems: Multi-agent workflows, orchestration (Langflow, CrewAI, AnythingLLM).",
      "Vector Databases & Retrieval: Pinecone, Weaviate, FAISS for semantic search.",
    ],
  },
  {
    category: "Machine Learning Essentials",
    icon: Cpu,
    skills: [
      "Predictive Modeling: Regression, classification, forecasting (finance, marketing, healthcare).",
      "Reinforcement Learning: Trading bots, decision-making systems.",
      "Recommendation Systems: Personalized product/content recommenders.",
    ],
  },
  {
    category: "Data Science & Analytics",
    icon: BarChart3,
    skills: [
      "Data Engineering: Cleaning, preprocessing, feature engineering pipelines.",
      "Visualization: Dashboards with Dash, Streamlit, Power BI, Tableau.",
      "Statistical Analysis: Hypothesis testing, A/B testing, statistical modeling.",
    ],
  },
  {
    category: "Applied Niches (High Demand on Upwork)",
    icon: Zap,
    skills: [
      "Business Intelligence with AI: Automating insights from marketing or financial data.",
      "AI for Automation: Document processing, customer support, bookkeeping categorization.",
      "Custom SaaS AI Tools: End-to-end apps using FastAPI, React, AWS, Vercel, etc.",
      "IoT + AI: Predictive maintenance, anomaly detection for sensor data.",
    ],
  },
];

const Skills = () => {
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
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-20"
    >
      <div className="absolute inset-0 border-t border-purple-400/20"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-2xl font-semibold text-white">
                    {category.category}
                  </h3>
                </div>
                <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
      </section>
    </>
  );
};

export default Skills;
