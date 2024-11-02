import React from "react";
import { BookOpen} from "lucide-react";

export default function Experience() {
  return (


<section className="mb-16 animate-fade-in stagger-delay-3">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800">
              Proyectos Destacados
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Actividades Extraescolares",
                description:
                  "Proyecto de educación extraescolares en niños de 3 a 4 años.",
                image:
                  "https://static.wixstatic.com/media/23fc43_aead8d7090664b86b5162a556b6eed23~mv2.jpg/v1/fill/w_491,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/patio.jpg",
              },
              {
                title: "Taller de pintura",
                description:
                  "Desarrollo de habilidades motoras y artísticas en menores.",
                image:
                  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=500&auto=format&fit=crop",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        );
    }