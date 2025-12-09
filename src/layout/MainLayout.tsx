// import Header from "@/components/Header";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import EmergencyInfo2 from "@/components/EmergencyInfo2";
import DonateStickyButton from "@/components/DonateStickyButton";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50">
      <header className="relative z-40">
        <EmergencyInfo2 />
        <Header2 />
      </header>

      <main className="flex-1 relative">
        <Outlet />
      </main>

      {/* Botón flotante global */}
      <DonateStickyButton />

      <footer className="z-40">
        <Footer />
      </footer>
    </div>
  );
}
