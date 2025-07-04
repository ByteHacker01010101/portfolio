import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Rocket, Brain } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { Navbar } from './components/Navbar';
import { ContactForm } from './components/ContactForm';
import { ExperienceCard } from './components/ExperienceCard';
import { CertificateCard } from './components/CertificateCard';
import { TechStack } from './components/TechStack';
import { Toaster } from 'react-hot-toast';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const frontendSkills = [
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind CSS', icon: 'tailwind' }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: 'node' },
    { name: 'Express', icon: 'express' },
    { name: 'PostgreSQL', icon: 'postgresql' }
  ];

  const toolsSkills = [
    { name: 'Git', icon: 'git' },
    { name: 'Docker', icon: 'docker' },
    { name: 'AWS', icon: 'aws' }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'text-white' : 'text-gray-800'}`}>
      <Toaster position="top-right" />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="animate-float">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-glow">
                  Full Stack <span className="text-purple-600">Developer</span> 👋
                </h1>
                <p className={`text-lg md:text-xl ${isDark ? 'text-purple-200' : 'text-purple-700'} mb-8 max-w-lg`}>
                  Driven by curiosity and code, Hey it's Samprit Mandal - a Full Stack Developer exploring how Web3.0 can reshape the digital world.
                </p>
                <div className="flex gap-4 justify-center lg:justify-start mb-8">
                  <a 
                    href="https://github.com/ByteHacker01010101" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 ${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-all hover:scale-110 glass-card rounded-xl`}
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/samprit-mandal-a339b9287/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 ${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-all hover:scale-110 glass-card rounded-xl`}
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="mailto:samprit.code@gmail.com" 
                    className={`p-3 ${isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-all hover:scale-110 glass-card rounded-xl`}
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 bg-opacity-20 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <img 
                    src="/profile.jpg"
                    alt="Samprit Mandal"
                    className="w-full h-full object-cover rounded-full border-4 border-purple-500 border-opacity-30 animate-float shadow-2xl"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mt-16 text-center">
            <TechStack />
          </div>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className={isDark ? 'text-purple-300' : 'text-purple-600'} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-glow">About Me</h2>
          <div className="glass rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex flex-col gap-4 items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 bg-opacity-20 rounded-full blur-xl"></div>
                  <div className="relative grid grid-cols-2 gap-4">
                    <div className="p-4 glass-card rounded-2xl animate-float" style={{ animationDelay: '0s' }}>
                      <Code2 size={32} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
                    </div>
                    <div className="p-4 glass-card rounded-2xl animate-float" style={{ animationDelay: '0.2s' }}>
                      <Rocket size={32} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
                    </div>
                    <div className="p-4 glass-card rounded-2xl animate-float" style={{ animationDelay: '0.4s' }}>
                      <Brain size={32} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
                    </div>
                    <div className="p-4 glass-card rounded-2xl bg-purple-500 bg-opacity-20 animate-float" style={{ animationDelay: '0.6s' }}>
                      <div className="text-2xl font-bold text-purple-300">3+</div>
                      <div className="text-xs text-purple-200">Years</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className={isDark ? 'text-purple-200' : 'text-gray-700'}>
                  I'm a passionate full-stack developer with cutting-edge technology experience in building web applications.
                  I specialize in React, Node.js, and modern web technologies. When I'm not coding,
                  you can find me exploring new technologies, contributing to open source, or enjoying outdoor activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Experience</h2>
          <div className="space-y-6">
            <ExperienceCard
              title="Open Source Contributor"
              company="GirlScript Summer of Code"
              duration="Oct 2024 - Present"
              description={[
                "As an Open Source Contributor with GirlScript Summer of Code, I actively collaborate on software development projects, enhancing existing code and debugging alongside a diverse community of developers. This role allows me to sharpen my technical skills, gain practical experience in version control, and contribute to inclusive tech initiatives. My work not only improves the projects but also fosters knowledge sharing within the community"
              ]}
            />
             <ExperienceCard
              title="Intern"
              company="Etailled Digital Services Private Limited"
              duration="JUN 2025 - Present"
              description={[
                `🌐 I'm excited to announce that I've joined Etailled Digital Services Private Limited as a Frontend Developer Intern! 🎉

As a Frontend Developer, I will be responsible for designing and implementing user-facing features of web applications. My primary focus will be on translating UI/UX designs into interactive, responsive, and accessible web interfaces using modern frontend technologies.

I'll be working closely with backend developers to ensure seamless data flow and smooth integration of frontend components with APIs. My role involves creating reusable components, optimizing performance, and enhancing the user experience across different devices and platforms.

This internship is a great opportunity to deepen my knowledge in HTML, CSS, JavaScript, and frameworks like React, while gaining real-world experience in a collaborative tech environment.

Looking forward to contributing and learning with the amazing team at Etailled Digital Services! 🚀`
              ]}
            />
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Certificates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CertificateCard
              title="Certificate of Completion (Project-Based Learning: Build an AI Text Summarizer app)"
              issuer="Postman Academy"
              date="November 2024"
              link="http://verify.skilljar.com/c/kt3jjgmsv54c"
            />
            <CertificateCard
              title="Postman API Fundamental Student Expert Certificate"
              issuer="Postman"
              date="November 2024"
              link="https://badgr.com/public/assertions/qqS9LzFnT_e-0hcAhu47-w"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard title="Frontend" skills={frontendSkills} />
            <SkillCard title="Backend" skills={backendSkills} />
            <SkillCard title="Tools" skills={toolsSkills} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
             <ProjectCard
              title="Resume Builder"
              description="A modern, interactive resume builder with real-time preview, multiple professional templates, and export functionality. Built with React and TypeScript for seamless user experience."
              image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500"
              tags={['React', 'TypeScript', 'Tailwind CSS', 'PDF Export']}
              link="https://github.com/ByteHacker01010101"
            />
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured e-commerce platform built with React and Node.js"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500"
              tags={['React', 'Node.js', 'PostgreSQL']}
              link="https://kickcraze.netlify.app/"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates"
              image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500"
              tags={['React', 'Socket.io', 'MongoDB']}
              link="https://dashvista.netlify.app/"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center animate-glow">Get in Touch</h2>
          <h3 className={`text-xl ${isDark ? 'text-purple-300' : 'text-purple-600'} mb-12 text-center`}>Don't be shy! Hit me up! 👇</h3>
          <div className="glass rounded-2xl p-8 max-w-lg mx-auto transform hover:scale-[1.02] transition-all duration-300">
            <ContactForm recipientEmail="samprit.code@gmail.com" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className={isDark ? 'text-purple-300' : 'text-purple-600'}>© 2025 Samprit.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
