import React from 'react';
import { Languages } from 'lucide-react';

const languages = [
  { name: 'Español', level: 100, color: 'rose', nivel: 'NATIVO' },
  { name: 'Inglés', level: 60, color: 'blue', nivel: 'B2' },
];

export default function LanguageSkills() {
  return (
    <section className="mb-16 animate-fade-in stagger-delay-2">
      <div className="flex items-center gap-2 mb-6">
        <Languages className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800">Idiomas</h2>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl">
        <div className="space-y-6">
          {languages.map((lang, index) => (
            <div key={index} className="relative">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{lang.name}</span>
                <span className="text-sm text-gray-500">{lang.nivel}</span>
              </div>
              
              {/* Pencil Bar Container */}
              <div className="h-8 bg-gray-100 rounded-full overflow-hidden relative">
                {/* Pencil Body (Progress Bar) */}
                <div
                  className={`h-full bg-${lang.color}-500 transition-all duration-1000 ease-out relative`}
                  style={{ 
                    width: `${lang.level}%`,
                    animation: 'growWidth 1.5s ease-out'
                  }}
                >
                  {/* Pencil Tip */}
                  <div className={`absolute right-0 top-0 h-full w-4 bg-${lang.color}-600 clip-pencil-tip`} />
                  
                  {/* Wood Texture Lines */}
                  <div className="absolute inset-0 flex items-center justify-around opacity-30">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-full w-0.5 bg-${lang.color}-700 transform -skew-x-12`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Eraser */}
                <div className="absolute left-0 top-0 h-full w-6 bg-pink-200 rounded-l-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-transparent opacity-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}