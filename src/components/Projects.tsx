import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSmartphone } from 'react-icons/fi';
import { SiKotlin, SiAndroid, SiTensorflow, SiSwift, SiApple, SiGoogleplay } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'HD Status',
      description: 'Shipped HD Status: No Quality Loss, a Photo & Video app on Google Play and the App Store that helps people post WhatsApp Status photos and videos without WhatsApp’s aggressive compression. Media is sent to the user’s own WhatsApp chat first, then forwarded to Status so quality is preserved. Trim, crop, music, and quality-comparison tools handle Status framing, with Premium removing ads and watermarks and raising send limits.',
      image: '/hdstatus-play.png',
      imageFit: 'portrait',
      technologies: [
        { icon: <SiKotlin />, name: 'Kotlin' },
        { icon: <SiAndroid />, name: 'Android' },
        { icon: <SiSwift />, name: 'Swift' },
      ],
      stats: { period: '2025-Present', location: 'Remote', focus: 'Photo & Video' },
      links: {
        github: 'https://github.com/ezinwavictor',
        demo: 'https://play.google.com/store/apps/details?id=com.vectorinc.hdstatus',
        demoLabel: 'View on Play Store',
        appStore: 'https://apps.apple.com/us/app/hd-status-no-quality-loss/id6802051651',
      },
    },
    {
      title: 'Moniepoint POS',
      description: 'Building and improving Android POS terminals used nationwide for secure payments and agent banking. SDK integration for terminal communication, device management, and transaction security. Enhanced transaction speed and reliability across thousands of active terminals.',
      image: '/pos.png',
      technologies: [
        { icon: <SiKotlin />, name: 'Kotlin' },
        { icon: <SiAndroid />, name: 'Android SDK' },
      ],
      stats: { period: '2023-Present', location: 'Nigeria', terminals: '1000s+' },
      links: {
        github: 'https://github.com/ezinwavictor',
        demo: 'https://moniepoint.com',
      },
    },
    {
      title: 'TrustPayments',
      description: 'Developed secure payment modules for card transactions and tokenized payments. Optimized checkout flow reducing latency and improving UX across merchant apps. Integrated REST and GraphQL APIs for seamless backend communication.',
      image: '/trustpayment.png',
      technologies: [
        { icon: <SiKotlin />, name: 'Kotlin' },
        { icon: <SiAndroid />, name: 'Android' },
      ],
      stats: { period: '2022-2023', location: 'Remote', focus: 'Fintech' },
      links: {
        github: 'https://github.com/ezinwavictor',
        demo: 'https://www.trustpayments.com/products/point-of-sale-payments/',
      },
    },
    {
      title: 'CloudChef IoT SDK',
      description: 'Built the CloudChef SDK powering smart kitchen utensils and IoT-based cooking devices. Designed APIs for real-time recipe sync, temperature control, and cooking time management. Seamless device-to-app communication with firmware engineers.',
      video: '/cloudchef_video.mp4',
      technologies: [
        { icon: <SiKotlin />, name: 'Kotlin' },
        { icon: <SiAndroid />, name: 'IoT SDK' },
      ],
      stats: { period: '2021-2022', location: 'Remote', focus: 'IoT' },
      links: {
        github: 'https://github.com/ezinwavictor',
        demo: 'https://www.cloudchef.co/',
      },
    },
    {
      title: 'SingKing Karaoke',
      description: 'AI-powered karaoke experience using TensorFlow-based pitch detection model. Implemented speech recognition and vowel sound detection for real-time vocal scoring. Gamified karaoke engine with intelligent performance feedback.',
      image: '/singking_image1.webp',
      technologies: [
        { icon: <SiKotlin />, name: 'Kotlin' },
        { icon: <SiTensorflow />, name: 'TensorFlow' },
      ],
      stats: { period: '2020-2021', location: 'Remote', focus: 'AI/Audio' },
      links: {
        github: 'https://github.com/ezinwavictor',
        demo: 'https://play.google.com/store/apps/details?id=com.singking.singking&hl=en',
      },
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Professional Experience</h2>
          <p>Android and iOS solutions powering payments, IoT, and consumer apps</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-content">
                <div className="project-info">
                  <div className="project-header">
                    <FiSmartphone className="project-icon" size={32} />
                    <h3>{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="tech-badge glass"
                        whileHover={{ scale: 1.1 }}
                        title={tech.name}
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="project-stats">
                    <div className="stat">
                      <span className="stat-value">{project.stats.period}</span>
                      <span className="stat-label">Period</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{project.stats.location}</span>
                      <span className="stat-label">Location</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{project.stats.terminals || project.stats.focus}</span>
                      <span className="stat-label">{project.stats.terminals ? 'Scale' : 'Focus'}</span>
                    </div>
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-glass"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub /> GitHub
                    </motion.a>
                    {project.links.appStore && (
                      <motion.a
                        href={project.links.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-glass"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <SiApple /> App Store
                      </motion.a>
                    )}
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.links.demo.includes('play.google.com') ? <SiGoogleplay /> : <FiExternalLink />}{' '}
                      {project.links.demoLabel || 'View Project'}
                    </motion.a>
                  </div>
                </div>

                <div className="project-mockup">
                  <motion.div
                    className={`project-image-container${project.imageFit === 'portrait' ? ' portrait-preview' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="project-video"
                      />
                    ) : (
                      <img src={project.image} alt={project.title} />
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
