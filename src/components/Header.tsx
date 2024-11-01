import React from 'react';
import { Linkedin, FileDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative bg-blue-100 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-white shadow-lg animate-float">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop"
              alt="Laura Calero Moreno"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Laura Calero Moreno</h1>
            <h2 className="text-2xl text-blue-600 mb-4">Educadora Infantil</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://linkedin.com" 
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="/cv.pdf" 
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
              >
                <FileDown className="w-5 h-5" />
                <span>Descargar CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}