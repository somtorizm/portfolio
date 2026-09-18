import { motion } from 'framer-motion';
import {
  SiKotlin,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiGraphql,
  SiDocker,
  SiGit,
  SiAndroidstudio,
  SiSwift,
  SiApple,
  SiXcode,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Kotlin', icon: <SiKotlin />, level: 95 },
        { name: 'Java', icon: <SiJavascript />, level: 90 },
        { name: 'Swift', icon: <SiSwift />, level: 85 },
        { name: 'C++', icon: <SiTypescript />, level: 80 },
        { name: 'Python', icon: <SiReact />, level: 75 },
      ],
    },
    {
      title: 'Android Frameworks',
      skills: [
        { name: 'Jetpack Compose', icon: <SiReact />, level: 92 },
        { name: 'Android SDK', icon: <SiAndroidstudio />, level: 95 },
        { name: 'WebRTC', icon: <SiReact />, level: 85 },
        { name: 'TensorFlow Lite', icon: <SiReact />, level: 80 },
      ],
    },
    {
      title: 'iOS',
      skills: [
        { name: 'SwiftUI', icon: <SiSwift />, level: 85 },
        { name: 'iOS SDK', icon: <SiApple />, level: 85 },
        { name: 'Xcode', icon: <SiXcode />, level: 88 },
        { name: 'AVFoundation', icon: <SiApple />, level: 80 },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Firebase', icon: <SiFirebase />, level: 88 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 85 },
        { name: 'REST APIs', icon: <SiReact />, level: 90 },
        { name: 'Retrofit', icon: <SiReact />, level: 92 },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Android Studio', icon: <SiAndroidstudio />, level: 95 },
        { name: 'Git', icon: <SiGit />, level: 95 },
        { name: 'Gradle', icon: <SiDocker />, level: 88 },
        { name: 'CI/CD', icon: <SiDocker />, level: 85 },
      ],
    },
  ];

  const expertise = [
    'Android Architecture (MVVM, MVI, Clean Architecture)',
    'SDK Development & Integration',
    'Payment Systems & POS Terminals',
    'Play Store & App Store Shipping',
    'iOS Photo & Video Pipelines',
    'WebRTC & Real-time Communication',
    'IoT Device Integration',
    'AI/ML (TensorFlow Lite, Audio Processing)',
    'Performance Optimization & Profiling',
    'Security & Transaction Encryption',
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <p>Technologies I work with</p>
        </motion.div>

        <div className="skills-content">
          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3>{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    >
                      <div className="skill-header">
                        <div className="skill-name">
                          <span className="skill-icon">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expertise Section */}
          <motion.div
            className="expertise-section glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3>Areas of Expertise</h3>
            <div className="expertise-grid">
              {expertise.map((item, index) => (
                <motion.div
                  key={item}
                  className="expertise-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="expertise-icon">✓</div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
