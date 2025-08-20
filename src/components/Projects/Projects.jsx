import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp } from "../../animations";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Github } from "lucide-react";
import project1 from "../../assets/project1.png";
import project3 from "../../assets/project3.png";
import project5 from "../../assets/project5.png";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  const toggleExpanded = (index) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const projects = [
    {
      title: "Autonomous AI Agent For Task Automation",
      description:
        "The Main Objective Of this project Is creating own AI Agency using different AI Agent To automate any task. This AI Agency can handle tasks autonomously with a little help of human being.",
      image: project1,
      link: "https://www.upwork.com/freelancers/natnaelm12?p=1802020927477981184",
      tags: ["GPT-4 API", "GPT-4o", "Python", "AI Agent Development", "Gradio"],
    },
    {
      title: "Fullstack AI Study Hub",
      description:
        "A fullstack learning platform for AI/ML enthusiasts with study materials, exercises, and resources.",
      image:
        "https://opengraph.githubassets.com/1/natnaelmekuria98/Fullstack-AI-Study-Hub",
      link: "https://github.com/natnaelmekuria98/Fullstack-AI-Study-Hub",
      tags: ["React", "Node.js", "MongoDB", "AI"],
    },
    {
      title: "AI generated images for vocabulary list Using Dall-E-3",
      description:
        "A collection of AI-generated images designed with DALL·E 3 to bring vocabulary words to life, combining language and visuals for a creative learning experience.",
      image: project3,
      link: "https://www.upwork.com/freelancers/natnaelm12?p=1820465071650316288",
      tags: ["DALL-E", "Image Prompt Engineering", "GPT-4o"],
    },
    {
      title: "CrewAI Agents",
      description:
        "AI-powered autonomous agents built with CrewAI for workflow automation and orchestration.",
      image:
        "https://opengraph.githubassets.com/1/natnaelmekuria98/crewai-agents",
      link: "https://github.com/natnaelmekuria98/crewai-agents",
      tags: ["CrewAI", "Python", "AI Agents"],
    },
    {
      title: "AI Driven Custom Search Engine RAG App",
      description:
        "This project aims to develop a custom search engine web application that leverages OpenAI's embedding models and Pinecone's vector database to enable users to chat with pre-processed PDF documents. - The application will allow users to perform semantic searches and interactive queries on the content of their documents, which have already been vectorized and stored in Pinecone.",
      image: project5,
      link: "https://www.upwork.com/freelancers/natnaelm12?p=1795759577697976320",
      tags: [
        "Generative AI",
        "LangChain",
        "AI Development",
        "Pinecone",
        "OpenAI Embeddings",
      ],
    },
    {
      title: "AnythingLLM Archetyplas",
      description:
        "Custom implementation of AnythingLLM for document processing and retrieval augmented generation.",
      image:
        "https://opengraph.githubassets.com/1/natnaelmekuria98/AnythingLLM-archetyplas",
      link: "https://github.com/natnaelmekuria98/AnythingLLM-archetyplas",
      tags: ["AnythingLLM", "RAG", "Vector DB"],
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
      <section id="projects" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mt-5 mb-12">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const isExpanded = expandedProjects.has(index);
              const needsTruncation = project.description.length > 120;

              return (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-cyan-500/50 transform hover:scale-[1.02] transition"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 15} // continues stagger
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <div className="mb-4">
                      <p className="text-gray-300 transition-all duration-300">
                        {isExpanded || !needsTruncation
                          ? project.description
                          : truncateText(project.description)}
                      </p>
                      {needsTruncation && (
                        <button
                          onClick={() => toggleExpanded(index)}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded px-1 cursor-pointer"
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-cyan-400/10 text-cyan-300 px-3 py-1 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:underline"
                    >
                      View Project <FaExternalLinkAlt className="ml-2" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/natnaelmekuria98?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View More Projects</span>
          </a>
        </div>
      </section>
    </>
  );
}
