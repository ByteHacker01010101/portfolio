import React from 'react';
import { Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export function ExperienceCard({ title, company, duration, description }: ExperienceCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="glass-card rounded-2xl p-6 mb-6">
      <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-200' : 'text-purple-900'}`}>{title}</h3>
      <h4 className={isDark ? 'text-purple-300' : 'text-purple-700'}>{company}</h4>
      <div className={`flex items-center ${isDark ? 'text-purple-400' : 'text-purple-600'} mb-4`}>
        <Calendar size={16} className="mr-2" />
        <span className="text-sm">{duration}</span>
      </div>
      <ul className="space-y-2">
        {description.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className={`w-2 h-2 ${isDark ? 'bg-purple-300' : 'bg-purple-600'} rounded-full mr-2 mt-2`}></span>
            <span className={isDark ? 'text-purple-100' : 'text-gray-800'}>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}