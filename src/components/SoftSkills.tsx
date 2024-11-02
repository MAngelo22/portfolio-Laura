import React from "react";
import { Check , Plus } from "lucide-react";

export default function Habilidades() {
  return (
    <section className="mb-16 animate-fade-in stagger-delay-4">
      <div className="flex items-center gap-2 mb-6">
        <Plus className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800">Habilidades</h2>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl">
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Desarrollo cognitivo",
            "Habilidades socioemocionales",
            "Planificación de actividades",
            "Comunicación efectiva",
            "Trabajo en equipo",
            "Creatividad en el aula",
            "Paciencia y tolerancia",
            "Observación y seguimiento",            
            "Conocimiento de necesidades infantiles",
            "Adaptabilidad al cambio",
          ].map((skill, index) => (
            <li
              key={index}
              className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
            >
            <Check className="w-6 h-6 text-blue-500" />
            <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
