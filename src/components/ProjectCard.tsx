import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`mb-4 ${isDark ? 'text-purple-100' : 'text-gray-700'}`}>{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm ${
                isDark 
                  ? 'bg-purple-500 bg-opacity-20 text-purple-100' 
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center ${
            isDark 
              ? 'text-purple-300 hover:text-purple-100' 
              : 'text-purple-600 hover:text-purple-800'
          }`}
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
}