import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";

import Home from "./pages/Home/Home";
import About from "@/pages/AboutUs/About";
import Services from "@/pages/HealthcareServices/Services";
import Founder from "@/pages/AboutUs/Founder";
import Contact from "@/pages/Contact/Contact";
import ComingSoon from "@/pages/CommingSoon";

import AssistedLiving from "@/pages/AssistedLiving/AssistedLiving";
import IndependentLiving from "@/pages/IndependentLiving";
import LevelsOfCare from "@/pages/LevelsOfCare";
import Gallery from "@/pages/Gallery/Gallery";
import Events from "@/pages/Events/Events";

import GoogleTranslate from "@/shared/components/GoogleTranslate";
import ScrollToTop from "@/components/ScrollToTop";

export default function App() {
  return (
    <>
      <GoogleTranslate />
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />

          <Route path="/assisted-living" element={<AssistedLiving />} />
          <Route path="/independent-living" element={<IndependentLiving />} />
          <Route path="/levels-of-care" element={<LevelsOfCare />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </>
  );
}
