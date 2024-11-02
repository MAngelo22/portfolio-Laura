import React from "react";
import { Mail, MapPin, User2} from "lucide-react";

export default function Experience() {
  return (
    <section className="mb-16 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <User2 className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800">Sobre mí</h2>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <p className="text-gray-600 leading-relaxed">
          Soy una educadora infantil, con una energía inagotable y entusiasmo
          que inspiran a mis niños/as cada día. Mi motivación me impulsa a crear
          un ambiente de aprendizaje acogedor y estimulante, donde cada niño/a
          se siente valorado y apoyado. Siempre busco nuevas metodologías para
          mejorar mis clases, demostrando mi compromiso con la educación. La
          pasión que tengo por enseñar se refleja en la sonrisa de cada uno de
          mis pequeños.
        </p>
        <div className="flex gap-4 mt-4 text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>Madrid, España</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            <a href="mailto:lauracalero13@gmail.com"><span>lauracalero13@gmail.com</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
