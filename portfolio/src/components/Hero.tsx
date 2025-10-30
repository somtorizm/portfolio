import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { SiKotlin, SiJetpackcompose, SiAndroid, SiTensorflow } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub size={24} />, href: 'https://github.com/ezinwavictor', label: 'GitHub' },
    { icon: <FiLinkedin size={24} />, href: 'https://linkedin.com/in/ezinwavictor', label: 'LinkedIn' },
    { icon: <FiMail size={24} />, href: '#contact', label: 'Email' },
  ];

  const techIcons = [
    { icon: <SiKotlin size={40} />, name: 'Kotlin' },
    { icon: <SiJetpackcompose size={40} />, name: 'Jetpack Compose' },
    { icon: <SiAndroid size={40} />, name: 'Android' },
    { icon: <SiTensorflow size={40} />, name: 'TensorFlow' },
  ];

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in the public folder
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ezinwa Victor
            </motion.h1>

            <motion.div
              className="title-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="subtitle">Senior Android Engineer</h2>
            </motion.div>

            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Specialized in Android development with expertise in WebRTC, SDK development, and payment systems.
              Building secure, scalable solutions for POS terminals, fintech applications, and IoT devices.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <button onClick={handleDownloadResume} className="btn btn-glass">
                <FiDownload size={20} />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="social-icon glass-card"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="profile-card glass-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <img src="/profile.png" alt="Ezinwa Victor - Android Engineer" />
                </div>
              </div>

              <div className="floating-tech-icons">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="tech-icon glass-card"
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          id="about"
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-content glass-card">
            <h2>About Me</h2>
            <div className="about-text">
              <p>
                I'm a Senior Android Engineer currently at Moniepoint Inc., where I contribute to building
                and improving Android POS terminals used nationwide for secure payments and agent banking.
                My expertise spans SDK development, WebRTC integration, payment systems, and IoT solutions.
              </p>
              <p>
                With experience at TrustPayments, CloudChef, and SingKing Karaoke, I've developed secure
                payment modules, smart kitchen SDKs, and AI-powered audio processing systems. I specialize
                in creating robust, scalable Android solutions that power real-world applications.
              </p>
              <p>
                I'm passionate about clean architecture, performance optimization, and leveraging cutting-edge
                technologies like Jetpack Compose, WebRTC, and TensorFlow Lite to build exceptional mobile experiences.
              </p>
            </div>

            <div className="stats-grid">
              <motion.div
                className="stat-item glass-card"
                whileHover={{ scale: 1.05 }}
              >
                <h3>5+</h3>
                <p>Years Experience</p>
              </motion.div>
              <motion.div
                className="stat-item glass-card"
                whileHover={{ scale: 1.05 }}
              >
                <h3>4</h3>
                <p>Major Companies</p>
              </motion.div>
              <motion.div
                className="stat-item glass-card"
                whileHover={{ scale: 1.05 }}
              >
                <h3>1000s</h3>
                <p>Active Terminals</p>
              </motion.div>
              <motion.div
                className="stat-item glass-card"
                whileHover={{ scale: 1.05 }}
              >
                <h3>SDKs</h3>
                <p>IoT & Payments</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
