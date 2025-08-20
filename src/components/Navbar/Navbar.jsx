import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUpwork } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
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

      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 ease-in-out px-[5vw] md:px-[7vw] lg:px-[12vw] ${
          isScrolled
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="text-white py-5 flex justify-center items-center flex-wrap gap-4 sm:gap-0 space-x-6">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 text-gray-300 flex-wrap">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`relative ${activeSection === item.id ? "" : ""}`}
              >
                <button
                  className="cursor-pointer py-1 hover:text-cyan-600 hover:-translate-y-1 transition-transform duration-300"
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0 ">
            <a
              href="https://www.upwork.com/freelancers/natnaelm12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-600 hover:-translate-y-1 transition-transform duration-300"
            >
              <FaUpwork size={22} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-cyan-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-cyan-600 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#050414] bg-opacity-70 backdrop-blur-md z-50 rounded-lg shadow-lg p-4 lg:hidden">
            <ul className="flex flex-col justify-self-center space-y-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`relative ${activeSection === item.id ? "" : ""}`}
                >
                  <button
                    className="cursor-pointer px-2 py-1 text-base hover:text-cyan-600 hover:-translate-y-1 transition-transform duration-300"
                    onClick={() => handleMenuItemClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex justify-self-center pt-1">
                <a
                  href="https://www.upwork.com/freelancers/natnaelm12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 justify-self-center ml-3 hover:text-cyan-600"
                >
                  <FaUpwork size={22} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
