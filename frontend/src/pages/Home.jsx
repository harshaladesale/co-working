import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Plans from "../components/Plans";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import EnquiryForm from "../components/EnquiryForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Reviews from "../components/Reviews"; 

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Plans />
      <Amenities />
      <Gallery />
      
      <EnquiryForm />
      <Contact />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
