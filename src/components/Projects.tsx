import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSmartphone } from 'react-icons/fi';
import {
  SiKotlin, SiAndroid, SiTensorflow, SiSwift, SiApple, SiGoogleplay, SiFirebase, SiJavascript, SiPython, SiFfmpeg, SiYoutube,
} from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects: {
    title: string;
    description: string;
    image?: string;
    video?: string;
    imageFit?: 'portrait';
    technologies: { icon: React.ReactNode; name: string }[];
    stats: { period: string; location: string; terminals?: string; focus?: string };
    links: { github?: string; demo: string; demoLabel?: string; appStore?: string };
  }[] = [
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
      title: 'Unknot: Arrow Puzzle',
      description: 'An arrow-escape puzzle game I built solo on the Unpile engine: tap an arrow and it slides out the way it points, as long as nothing is in its path. Native Jetpack Compose on Android and SwiftUI on iOS, with identical boards on both kept honest by shared test vectors, and a generator that constructs every board to be solvable. 50 arrow themes, daily streaks, weekly leagues, "beat my time" friend links, and 21 languages. Live on Google Play, with iOS in App Store review.',
      video: '/unknot-ad.mp4',
      technologies: [
        { icon: <SiKotlin />, name: 'Compose' },
        { icon: <SiSwift />, name: 'SwiftUI' },
        { icon: <SiFirebase />, name: 'Firebase' },
      ],
      stats: { period: '2026', location: 'Indie', focus: 'Android + iOS' },
      links: {
        demo: 'https://play.google.com/store/apps/details?id=com.vectorinc.unknot',
        demoLabel: 'View on Play Store',
      },
    },
    {
      title: 'Unknot Ad Creatives',
      description: 'The app-install ads for Unknot, rendered entirely in code rather than edited by hand. The arrows are drawn exactly as the game draws them, every scripted tap is checked against the real puzzle rule before it renders, and the music and sound effects are synthesized, with the plucks ported from the game\'s own sound code. One pipeline outputs every placement (9:16, 1:1, 4:5 and 16:9) for the Google Ads soft launch they now run in. Shown here: the "IQ test" cut.',
      video: '/unknot-iq.mp4',
      technologies: [
        { icon: <SiJavascript />, name: 'Canvas' },
        { icon: <SiPython />, name: 'Audio synth' },
        { icon: <SiFfmpeg />, name: 'FFmpeg' },
      ],
      stats: { period: '2026', location: 'Indie', focus: 'Growth' },
      links: {
        demo: 'https://www.youtube.com/shorts/MqE8C-KMGPQ',
        demoLabel: 'Watch on YouTube',
      },
    },
    {
      title: 'Unpile Puzzle',
      description: 'A cozy puzzle game I designed and built solo, native on both platforms: SwiftUI on iOS and Jetpack Compose on Android, sharing one rules engine kept identical by cross-platform test vectors. Procedural level generator, a daily puzzle with shareable "beat my time" challenge links, live leagues on Firebase, subscriptions with StoreKit 2 and Play Billing, AdMob, and 20 languages.',
      image: '/unpile.webp',
      technologies: [
        { icon: <SiSwift />, name: 'SwiftUI' },
        { icon: <SiKotlin />, name: 'Compose' },
        { icon: <SiFirebase />, name: 'Firebase' },
      ],
      stats: { period: '2026', location: 'Indie', focus: 'iOS + Android' },
      links: {
        demo: 'https://unpile-mobile-game.web.app',
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
          <p>Android and iOS solutions powering payments, IoT, consumer apps, and games</p>
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
                    {project.links.github && (
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
                    )}
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
                      {project.links.demo.includes('play.google.com') ? <SiGoogleplay />
                        : project.links.demo.includes('youtube.com') ? <SiYoutube /> : <FiExternalLink />}{' '}
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
