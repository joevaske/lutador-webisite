import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import TestStranica from "./components/test-stranica/TestStranica";
import PromoStatistika from "./components/promo-statistika/PromoStatistika";
import Ponuda from "./components/ponuda/Ponuda";
import AboutUs from "./components/about-us/AboutUs";
import ContactUs from "./components/contact-us/ContactUs";
import WhyChooseUs from "./components/why-choose-us/WhyChooseUs";
import Testimonials from "./components/testimonials/Testimonials";
import Schedule from "./components/schedule/Schedule";
import Footer from "./components/footer/Footer";
import GoTop from "./components/go-top/GoTop";
import MatejaValjarevic from "./components/pages/mateja-valjarevic/MatejaValjarevic";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/mateja-valjarevic" element={<MatejaValjarevic />} />
        </Routes>
        <Header />
        <PromoStatistika />
        <AboutUs />
        <Ponuda />
        <WhyChooseUs />
        <Testimonials />
        <Schedule />
        <ContactUs />
        {/*      <TestStranica /> */}
        <Footer />
        <GoTop />
      </div>
    </Router>
  );
};

export default App;
