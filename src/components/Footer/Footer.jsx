import { Github, Linkedin, Heart, ArrowUp } from "lucide-react";
import { FaUpwork } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/natnaelmekuria98",
      label: "GitHub",
    },
    {
      icon: FaUpwork,
      href: "https://www.upwork.com/freelancers/natnaelm12",
      label: "Upwork",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/natnael-mekuria-36335523b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: FaTelegram,
      href: "https://t.me/@natnaelmekuria456",
      label: "Telegram",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
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
      <footer className="bg-gray-900 text-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Natnael Mekuria
                </h3>
                <p className="text-gray-400 mt-2">
                  Full-Stack Developer & AI Specialist
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Crafting intelligent solutions and seamless user experiences
                through cutting-edge technology and AI-driven automation.
                Let&#39;s build the future together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Agent Development</li>
                <li>Process Automation</li>
                <li>Full-Stack Development</li>
                <li>Technical Consulting</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>
          {/* Developed By Text */}
          <p className="text-md text-gray-400 mt-6">
            POWERED BY{" "}
            <span className="text-md text-cyan-500">
              {" "}
              Jossy<span className="text-md text-amber-300">AM21.</span>
            </span>
          </p>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Natnael Mekuria. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
