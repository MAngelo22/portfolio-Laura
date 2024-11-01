import React from 'react';
import { GraduationCap, BookOpen, Briefcase, Heart, Mail, MapPin } from 'lucide-react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800">Sobre mí</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <p className="text-gray-600 leading-relaxed">
              Soy una educadora infantil apasionada con más de 5 años de experiencia en el desarrollo y educación temprana. 
              Me especializo en crear entornos de aprendizaje estimulantes y seguros donde cada niño puede desarrollar su máximo potencial.
            </p>
            <div className="flex gap-4 mt-4 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Madrid, España</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>laura.calero@email.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16 animate-fade-in stagger-delay-1">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800">Experiencia Laboral</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: "Educadora Principal",
                place: "Escuela Infantil Arcoíris",
                date: "2020 - Presente",
                description: "Desarrollo e implementación de programas educativos para niños de 0-3 años. Coordinación con familias y equipo docente."
              },
              {
                title: "Educadora Infantil",
                place: "Centro de Educación Infantil Pequeños Pasos",
                date: "2018 - 2020",
                description: "Atención y cuidado de grupos de 1-2 años. Diseño de actividades lúdicas y educativas."
              }
            ].map((exp, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50"
              >
                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                <div className="text-blue-600 mb-2">{exp.place}</div>
                <div className="text-gray-500 text-sm mb-3">{exp.date}</div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
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
                date: "2022 - Presente",
                current: true
              },
              {
                title: "Grado Superior en Educación Infantil",
                place: "IES María Moliner",
                date: "2016 - 2018"
              },
              {
                title: "Curso de Especialización en Pedagogía Montessori",
                place: "Centro de Formación Educativa",
                date: "2019"
              }
            ].map((edu, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50"
              >
                <h3 className="text-xl font-semibold text-gray-800">{edu.title}</h3>
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

        {/* Projects Section */}
        <section className="mb-16 animate-fade-in stagger-delay-3">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800">Proyectos Destacados</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Huerto Escolar Educativo",
                description: "Proyecto de educación medioambiental para niños de 2-3 años.",
                image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=500&auto=format&fit=crop"
              },
              {
                title: "Taller de Música y Movimiento",
                description: "Desarrollo de habilidades motoras y musicales en bebés.",
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=500&auto=format&fit=crop"
              }
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Skills */}
        <section className="mb-16 animate-fade-in stagger-delay-4">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800">Datos de Interés</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Certificación en Primeros Auxilios Infantiles",
                "Nivel B2 de Inglés",
                "Especialista en Atención Temprana",
                "Formación en Disciplina Positiva"
              ].map((skill, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>

      <footer className="bg-blue-100 py-6 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Laura Calero Moreno - Educadora Infantil</p>
        </div>
      </footer>
    </div>
  );
}

export default App;