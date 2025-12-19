import Projects from "../components/Projects";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/NewsLetter";
import Navbar from "./Navbar";
import Features from "./Features";
import WhyChooseUs from "./WhyChooseUs";
import AboutUs from "./AboutUs";
import LearnMore from "./LearnMore";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
     
      <Navbar />
      <ContactForm />
      <Features />
      <WhyChooseUs />
      <AboutUs   />
      <Projects />
      <Clients />
      <LearnMore />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
