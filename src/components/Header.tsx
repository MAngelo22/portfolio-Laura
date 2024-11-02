import React from 'react';
import { Linkedin, FileDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative bg-blue-100 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-white shadow-lg animate-float">
            <img
              src="https://static.wixstatic.com/media/23fc43_009a154cc6cc4dfda456a6d732eb8218~mv2.jpg/v1/crop/x_4,y_0,w_1179,h_1179/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Imagen%20de%20WhatsApp%202024-03-16%20a%20las%2017_55_06_fdd8400d.jpg"
              alt="Laura Calero Moreno"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Laura Calero Moreno
            </h1>
            <h2 className="text-2xl text-blue-600 mb-4">
              Educadora Infantil y Opositora a Magisterio
            </h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
              target="_blank"
                href="https://www.linkedin.com/in/lauracaleromoreno/"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <a
              target="_blank"
                href="https://9a39a6ec-b016-4881-a3a9-8643596bce73.filesusr.com/ugd/23fc43_2b492fcb37ce4790bb8e3b4983c71703.pdf"
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
