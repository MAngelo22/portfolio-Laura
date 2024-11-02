import React from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-blue-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 font-medium relative">
            © 2024 Laura Calero Moreno
            <span className="block text-sm text-blue-600">Educadora Infantil</span>
          </p>
          <div className="flex gap-6">
            <a
              href="http://t.me/Lauritacalero"
              className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="hidden md:inline">Telegram</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/lauracaleromoreno/"
              className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>
            
            <a
              href="mailto:lauracalero13@email.com"
              className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="hidden md:inline">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}