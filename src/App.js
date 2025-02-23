import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import config from "./Config.json";
import "./App.css";

// Header Component
const Header = ({ companyName, companyLogo }) => {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={companyLogo} alt="Logo" className="h-12" />
          <h1 className="text-xl font-bold text-blue-500">{companyName}</h1>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <a
            href="#home"
            className="hover:text-blue-500 transition duration-200"
          >
            Visa
          </a>
          <a
            href="#services"
            className="hover:text-blue-500 transition duration-200"
          >
            Flight Ticket
          </a>
          <a
            href="#about"
            className="hover:text-blue-500 transition duration-200"
          >
            Tour Package
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500 transition duration-200"
          >
            Tourist Bus
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500 transition duration-200"
          >
            Family, Friends Tour Trip
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-blue-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = ({ carouselImages }) => {
  return (
    <section
      id="HeroSection"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/hero.jpg')`,

        height: "100vh",
        width: "100%",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Encouraging Exploration of New Places
        </h2>
        <p className="text-lg md:text-2xl mb-6">
          Discover hidden gems and make unforgettable memories with us.
        </p>
        <button className="bg-blue-500 px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
          Get Starteddd
        </button>
        <div className="mt-8">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            className="rounded-lg shadow-lg"
          >
            {Object.values(carouselImages).map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

// Info Section
const InfoSection = ({ companyAddress }) => {
  return (
    <section className="container mx-auto px-6 py-16" id="InfoSection">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-4xl font-bold text-blue-500 mb-4">
            Trusted Travel Agency in Coimbatore
          </h3>
          <h4 className="text-xl md:text-3xl font-semibold mb-4">
            Plan the Trip of a Lifetime with Ease
          </h4>
          <p className="text-gray-700 mb-6">
            The best travel agency in Coimbatore, Hazara Travel Solutions,
            ensures your next vacation will be memorable.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            More Info
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/map-placeholder.jpg" alt="Map" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-16">
      <h3 className="text-3xl font-semibold text-blue-500 mb-6">
        Our Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          "Flight Booking",
          "Hotel Booking",
          "Tour Packages",
          "Pilgrimage",
          "Visa",
          "Friends & Family Tours",
        ].map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h4 className="text-xl font-bold text-blue-400 mb-4">{service}</h4>
            <p>Experience the best travel services tailored for you.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Tour Places Section
const TourPlacesSection = ({ tourPlaces }) => {
  return (
    <section id="tour-places" className="container mx-auto px-6 py-16">
      <h3 className="text-3xl font-semibold text-blue-500 mb-6">
        Places We Cover
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tourPlaces.map((place, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h4 className="text-xl font-bold text-blue-400 mb-4">{place}</h4>
            <p>
              Explore the beauty of {place} with our exclusive tour packages.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ companyName, companyAddress, companyMail }) => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-400">{companyName}</h3>
          <p className="mt-2 text-gray-400">
            Travel beyond your imagination, with our Travel Agency!
          </p>
          <div className="flex gap-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="text-blue-400 hover:text-white transition">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white transition">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white transition">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white transition">
              <i className="fab fa-whatsapp fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400">
            Corporate Office Address
          </h3>
          <p className="text-gray-400 mt-2">{companyAddress}</p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
          <p className="text-gray-400 mt-2">
            <a
              href={`mailto:${companyMail}`}
              className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              {companyMail}
            </a>
          </p>
          <p className="text-gray-400 mt-2">📞 +91 9362266666</p>
          <p className="text-gray-400">📞 +91 9514433334</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 mt-8">
        <p>
          &copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

// Home Page Component
const HomePage = () => {
  const [configData, setConfigData] = useState(null);

  useEffect(() => {
    setConfigData(config);
  }, []);

  if (!configData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-blue-900 min-h-screen text-white">
      <Header
        companyName={configData.company_name}
        companyLogo={configData.company_logo}
      />
      <HeroSection carouselImages={configData.carousel_images} />
      <InfoSection companyAddress={configData.company_address} />
      <ServicesSection />
      <TourPlacesSection tourPlaces={configData.tour_places} />
      <Footer
        companyName={configData.company_name}
        companyAddress={configData.company_address}
        companyMail={configData.company_mail}
      />
    </div>
  );
};

export default HomePage;
