import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export function CertificateCard({ title, issuer, date, link }: CertificateCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="glass-card rounded-2xl p-6 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-purple-500 bg-opacity-20 rounded-lg">
          <Award size={24} className={isDark ? 'text-purple-300' : 'text-purple-600'} />
        </div>
        <div className="flex-1">
          <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-200' : 'text-purple-900'}`}>{title}</h3>
          <p className={isDark ? 'text-purple-300' : 'text-purple-700'}>{issuer}</p>
          <p className={`text-sm mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{date}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center ${
                isDark ? 'text-purple-300 hover:text-purple-100' : 'text-purple-600 hover:text-purple-800'
              } text-sm`}
            >
              View Certificate <ExternalLink size={14} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}