import React from 'react';
import { Car, Award, Heart, Cross, Plus,  } from 'lucide-react';

const additionalData = [
  {
    icon: <Car className="w-5 h-5" />,
    title: 'Carnet de conducir (B)',
    description: 'Permiso de conducción vigente y Vehículo proprio',
  }, {
    icon: <Award className="w-5 h-5" />,
    title: 'Carnet de discapacidad',
    description: 'Grado reconocido del 41%',
  }, {
    icon: <Cross className="w-5 h-5" />,
    title: 'Primeros Auxilios Infantiles',
    description: 'Atención en primeros auxilios dependiendo de la edad/tamaño del menor',
  }, {
    icon: <Plus className="w-5 h-5" />,
    title: 'Especialista en Atención Temprana',
    description: 'Ayuda en la gestion emocional del menor ante adversidades y conflictos',
  }, {
    icon: <Award className="w-5 h-5" />,
    title: 'Formación en Disciplina Positiva',
    description: 'Educar en base a refuerzos positivos',
  },
];

export default function AdditionalData() {
  return (
    <section className="mb-16 animate-fade-in stagger-delay-4">
      <div className="flex items-center gap-2 mb-6">
        <Heart className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800">Datos Adicionales</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {additionalData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-blue-50 text-blue-500 group-hover:bg-blue-100 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}