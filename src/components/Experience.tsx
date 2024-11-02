import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section className="mb-16 animate-fade-in stagger-delay-1">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800">
          Experiencia Laboral
        </h2>
      </div>
      <div className="space-y-6">
        {[
          {
            title: 'Monitora de Comedor',
            place: 'NSA',
            date: 'Oct 2024 - Presente',
            description: 'Ayudar a los menores en la hora de comidas, fomentar la higiene y seguridad.',
            current: true,
          },
          {
            title: 'Monitora de Ludoteca',
            place: 'Centros Escolares',
            date: 'Abr 2023 - Presente',
            description: 'Realización y coordinación de actividades con niño/as NEE.',
            current: true,
          },
          {
            title: 'Monitora de Comedor',
            place: 'GoEast',
            date: 'Sep 2023 - Feb 2024',
            description: 'Supervisé el cumplimiento de las normas de higiene y seguridad en el comedor.',
          },
          {
            title: 'Recepcionista (Sustitucion)',
            place: 'Centro de Educación Infantil Pequeños Pasos',
            date: 'Jun 2023 - Jul 2023',
            description: 'Atención profesional al cliente, gestión de citas y comunicaciones, asistencia a visitantes y resolución de conflictos en el comedor.',
          },
        ].map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {exp.title}
            </h3>{exp.current && (
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                Actual
              </span>
            )}
            
            <div className="text-blue-600 mb-2">{exp.place}</div>
            <div className="text-gray-500 text-sm">{exp.date}</div>
            
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
