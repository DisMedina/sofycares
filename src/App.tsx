import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Founder from "@/pages/Founder";
import Contact from "@/pages/Contact";
import ComingSoon from "@/pages/CommingSoon";

import AssistedLiving from "@/pages/AssistedLiving";
import IndependentLiving from "@/pages/IndependentLiving";
import LevelsOfCare from "@/pages/LevelsOfCare";

import GoogleTranslate from "@/shared/components/GoogleTranslate";

export default function App() {
  return (
    <>
      <GoogleTranslate />

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
        </Route>
      </Routes>
    </>
  );
}
