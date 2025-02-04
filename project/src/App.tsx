import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { Navbar } from './components/Navbar';
import { ContactForm } from './components/ContactForm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen text-white">
      <Toaster position="top-right" />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-glow">
            Hi, I'm <span className="text-purple-400">Samprit Mandal</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Full Stack Developer crafting beautiful digital experiences
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/ByteHacker01010101" className="p-2 hover:text-purple-400 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/samprit-mandal-a339b9287/" className="p-2 hover:text-purple-400 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:samprit.code@gmail.com" className="p-2 hover:text-purple-400 transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-purple-300" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-glow">About Me</h2>
          <div className="glass rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* You can replace your image URL here */}
              <img
                src="/path/to/your/image.jpg"
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover ring-4 ring-purple-400 ring-opacity-50 animate-float"
              />
              <div className="flex-1">
                <p className="text-purple-200 leading-relaxed">
                  I'm a passionate full-stack developer with new cutting edge technologics experience building web applications.
                  I specialize in React, Node.js, and modern web technologies. When I'm not coding,
                  you can find me exploring new technologies, contributing to open source, or enjoying outdoor activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <SkillCard title="Frontend" skills={['React', 'TypeScript', 'Tailwind CSS']} />
            <SkillCard title="Backend" skills={['Node.js', 'Express', 'PostgreSQL']} />
            <SkillCard title="Tools" skills={['Git', 'Docker', 'AWS']} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured e-commerce platform built with React and Node.js"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500"
              tags={['React', 'Node.js', 'PostgreSQL']}
              link="https://github.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates"
              image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500"
              tags={['React', 'Socket.io', 'MongoDB']}
              link="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Get in Touch</h2>
          <div className="glass rounded-2xl p-8 max-w-lg mx-auto transform hover:scale-[1.02] transition-all duration-300">
            <ContactForm recipientEmail="samprit.code@gmail.com" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-purple-300">
          <p>© 2025 ByteHacker01010101. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;