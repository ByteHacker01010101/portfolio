import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center">
            <span className="w-2 h-2 bg-purple-300 rounded-full mr-2"></span>
            <span className="text-purple-100">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}