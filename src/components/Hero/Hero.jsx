import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import img from "../../assets/profile-img.webp";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = React.useMemo(
    () => [
      "AI Agent Specialist",
      "Automation Expert",
      "Full-Stack Developer",
      "AI Chat Developer",      
      "React Enthusiast",
      "AI Developer",
      "GenAI Developer",
      "Freelancer",
    ],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (!isDeleting) {
          setCurrentText(current.substring(0, currentText.length + 1));

          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setCurrentText(current.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Natnael Mekuria",
            url: "https://example.com", // url should be updated to the actual portfolio URL
            sameAs: ["https://www.upwork.com/freelancers/natnaelm12"],
            jobTitle: "GenAI Developer",
          })}
        </script>
      </Helmet>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              >
                <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-60"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="lg:mt-[80px] w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <img
                      src={img}
                      alt="nati"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Natnael Mekuria
              </span>
            </h1>

            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 h-12">
              <span className="inline-block">
                {currentText}
                <span className="animate-blink">|</span>
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting intelligent solutions and seamless user experiences
              through cutting-edge technology and AI-driven automation.
              Transforming ideas into powerful digital realities.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
                <Mail className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/natnaelmekuria98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/natnael-mekuria-36335523b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

