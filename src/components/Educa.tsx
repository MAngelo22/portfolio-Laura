import React from "react";
import { GraduationCap} from "lucide-react";

export default function Experience() {
  return (


<section className="mb-16 animate-fade-in stagger-delay-2">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800">Formación</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: "Grado en Magisterio de Educación Infantil",
                place: "Universidad Complutense de Madrid",
                date: "2023 - Presente",
                current: true,
              },
              {
                title: "Grado Superior en Educación Infantil",
                place: "IES Pio Baroja",
                date: "2021 - 2023",
              }
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.title}
                </h3>
                <div className="text-blue-600 mb-2">{edu.place}</div>
                <div className="flex items-center gap-2">
                  <div className="text-gray-500 text-sm">{edu.date}</div>
                  {edu.current && (
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      Actual
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
          );
        }
        