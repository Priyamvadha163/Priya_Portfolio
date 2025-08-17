import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  User, 
  Code, 
  Briefcase, 
  Award, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  GraduationCap,
  ChevronRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                PP
              </div>
              <span className="ml-3 text-xl font-semibold text-slate-800 hidden sm:block">
                Priyamvadha Puppala
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 bg-white">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Priyamvadha Puppala</span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-slate-600 font-medium">
                  Python & Full Stack Developer | Passionate about building scalable web apps and solving real-world problems with technology.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                 I am a Computer Science graduate specializing in Artificial Intelligence & Data Science. With hands-on experience in web development and machine learning projects, I enjoy creating practical solutions that merge technology with innovation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/PRIYAMVADHA_CV(1).pdf" 
                  download="Priyamvadha_Puppala_Resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Download className="mr-2" size={18} />
                  View Resume
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Mail className="mr-2" size={18} />
                  Contact Me
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="/Priya_omg(1).jpg"
                    alt="Priyamvadha Puppala"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My academic journey and educational background
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* B.Tech */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">Bachelor of Technology</h3>
              </div>
              <div className="space-y-3">
                <p className="text-blue-600 font-medium">Computer Science & Engineering - AI & DS</p>
                <p className="text-slate-600">SITAM</p>
                <div className="flex items-center text-slate-500 text-sm">
                  <Calendar className="mr-2" size={16} />
                  2020 – 2024
                </div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  CGPA: 7.52
                </div>
              </div>
            </div>

            {/* Intermediate */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">Intermediate</h3>
              </div>
              <div className="space-y-3">
                <p className="text-indigo-600 font-medium">MPC</p>
                <p className="text-slate-600">P.S.N Junior College</p>
                <div className="flex items-center text-slate-500 text-sm">
                  <Calendar className="mr-2" size={16} />
                  2018 – 2020
                </div>
                <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  CGPA: 9.69
                </div>
              </div>
            </div>

            {/* SSC */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">SSC</h3>
              </div>
              <div className="space-y-3">
                <p className="text-purple-600 font-medium">SSC</p>
                <p className="text-slate-600">Z.P. High School</p>
                <div className="flex items-center text-slate-500 text-sm">
                  <Calendar className="mr-2" size={16} />
                  2017 – 2018
                </div>
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  CGPA: 9.7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My technical expertise and core competencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <Code className="mr-3 text-blue-600" size={24} />
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Languages</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Frameworks</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Django</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Web Technologies</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm mr-2 mb-2">HTML</span>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm mr-2 mb-2">CSS</span>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm mr-2 mb-2">WordPress</span>
                    
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm mr-2 mb-2">Shopify</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Databases</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">MySQL</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Version Control</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm mr-2 mb-2">Git</span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm mr-2 mb-2">GitHub</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Tools</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Figma</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <User className="mr-3 text-indigo-600" size={24} />
                Soft Skills & Other
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Methodologies</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm mr-2 mb-2">Agile</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Core Competencies</h4>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm mr-2 mb-2">Adaptability</span>
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm mr-2 mb-2">Time Management</span>
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm mr-2 mb-2">Attention to Detail</span>
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm mr-2 mb-2">Teamwork</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my technical projects and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-blue-100">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <img
                  src="/Depression_Detection.png"
                  alt="Depression Detection using NLP"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Depression Detection using NLP</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  ML system with tokenization and TF-IDF vectorization achieving 90%+ accuracy in mental health detection.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">NLP</span>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-indigo-100">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <img
                  src="/Employee_Mental_Stress.jpg"
                  alt="Employee Mental Stress Detection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Employee Mental Stress Detection</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  SVM classifier implementation achieving 90%+ accuracy for workplace mental health monitoring.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">SVM</span>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-purple-100">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                <img
                  src="/Project_Management.png"
                  alt="Project Management System"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Project Management System</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Django-based system with role-based access control, CRUD operations, and comprehensive project tracking.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Django</span>
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Python</span>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Internship Experience</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My professional journey and hands-on experience
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {/* PPCROY */}
              <div className="relative flex items-center md:justify-center">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg"></div>
                <div className="ml-12 md:ml-0 md:w-5/12 md:mr-auto">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-slate-800">Web Development Intern</h3>
                      <Briefcase className="text-blue-600" size={24} />
                    </div>
                    <p className="text-blue-600 font-medium mb-2">PPCROY</p>
                    <p className="text-slate-600 mb-3">
                      Developed SEO-optimized WordPress landing pages with enhanced UI/UX design and comprehensive SEO implementation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">WordPress</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Shopify</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">SEO</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navodita Infotech */}
              <div className="relative flex items-center md:justify-center">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg"></div>
                <div className="ml-12 md:ml-0 md:w-5/12 md:ml-auto">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-slate-800">Web Development Intern</h3>
                      <Briefcase className="text-indigo-600" size={24} />
                    </div>
                    <p className="text-indigo-600 font-medium mb-2">Navodita Infotech</p>
                    <p className="text-slate-600 mb-3">
                      Built a responsive temperature converter web application with modern UI design and cross-browser compatibility.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">HTML</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">CSS</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Taurius Technologies */}
              <div className="relative flex items-center md:justify-center">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg"></div>
                <div className="ml-12 md:ml-0 md:w-5/12 md:mr-auto">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-slate-800">Data Science Intern</h3>
                      <Briefcase className="text-purple-600" size={24} />
                    </div>
                    <p className="text-purple-600 font-medium mb-2">Taurius Technologies</p>
                    <p className="text-slate-600 mb-3">
                      Implemented Python programming and machine learning algorithms through hands-on mini-projects and data analysis.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Python</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Machine Learning</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Data Analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Python with ML */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4 mx-auto">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center">Python with Machine Learning</h3>
              <p className="text-blue-600 text-sm text-center font-medium mb-3">Data Pro</p>
            
            </div>

            {/* Python Full-Stack */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-4 mx-auto">
                <Award className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center">Python Full-Stack</h3>
              <p className="text-indigo-600 text-sm text-center font-medium mb-3">PentagonSpace</p>
              
            </div>

            {/* SQL HackerRank */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl mb-4 mx-auto">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center">SQL (Basic & Intermediate)</h3>
              <p className="text-purple-600 text-sm text-center font-medium mb-3">HackerRank</p>
             
            </div>

            {/* AMCAT */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-xl mb-4 mx-auto">
                <Award className="text-pink-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center">Technical Operations</h3>
              <p className="text-pink-600 text-sm text-center font-medium mb-3">AMCAT</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Email</p>
                      <p className="text-slate-800 font-medium">priyamvadha163@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Phone</p>
                      <p className="text-slate-800 font-medium">+91 6281 6341 28</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                <a
      href="https://www.linkedin.com/in/puppala-priyamvadha-372b6521b/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-300"
    >
      <Linkedin className="text-blue-600" size={20} />
    </a>
    <a
      href="https://github.com/Priyamvadha163"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
    >
      <Github className="text-gray-600" size={20} />
    </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-3">
                PP
              </div>
              <span className="text-xl font-semibold">Priyamvadha Puppala</span>
            </div>
            <p className="text-slate-400 mb-4">
              Python & Full Stack Developer passionate about creating impactful solutions
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <a href="https://www.linkedin.com/in/puppala-priyamvadha-372b6521b/" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Priyamvadha163" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:priyamvadha163@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 Priyamvadha Puppala. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;