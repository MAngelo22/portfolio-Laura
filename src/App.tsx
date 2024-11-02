import React from "react";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Heart,
  Mail,
  MapPin,
  Linkedin,
  Send,
} from "lucide-react";
import Header from "./components/Header";
import SobreMi from "./components/SobreMi";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience";
import LanguageSkills from "./components/LanguageSkills";
import Footer from "./components/Footer";
import AdditionalData from "./components/AddittionalData";
import SoftSkills from "./components/SoftSkills";
import Educacion from "./components/Educa";
import Proyectos from "./components/proyectos";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* About Section */}
        <SobreMi/>

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Educacion />

        {/* softskills */}
        <SoftSkills />

        {/* Language Skills Section */}
        <LanguageSkills />

        {/* Projects Section */}
        <Proyectos />

        {/* Additional Data Section */}
        <AdditionalData />

        {/* Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
