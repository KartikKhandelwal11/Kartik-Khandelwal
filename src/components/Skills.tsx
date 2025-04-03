import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import "../Assets/Styles/skills.css";

const Skills = () => {
  const technicalSkills = [
    "Product Strategy and Roadmapping",
    "User-Centered Design (UI/UX)",
    "Market Research and Analysis",
    "Data-driven Decision Making",
    "Agile Methodologies (Scrum)",
    "Backlog Prioritization",
    "Stakeholder Engagement",
    "Jira, Confluence, Notion, Play Console",
    "Prototyping & Wireframing",
    "Team Leadership and Collaboration",
  ];

  const tools = [
    "JIRA",
    "Confluence",
    "Whimsical",
    "Google Play Console",
    "Figma",
    "Cucumber",
  ];

  const personalSkills = [
    "Leadership",
    "Problem-solving",
    "Strategic thinking",
    "Communication",
    "Prioritisation",
  ];

  return (
    <section className="py-16 bg-pm-dark relative overflow-hidden" id="skills">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-2xl" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="relative inline-flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-purple-400 uppercase tracking-wider mb-2"
            >
              What I Master
            </motion.span>
            <h2 className="text-2xl md:text-4xl font-bold relative z-10">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text">
                Professional Skillset
              </span>
            </h2>
            <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-lg rounded-lg"></div>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Mastering the art of digital innovation with a diverse skill set
          </p>
        </motion.div>

        <div className="skills-sections space-y-8">
          {/* Technical Skills Section */}
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="skill-section"
          >
            <div className="section-header">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400">⚡</span>
                </span>
                Technical Skills
              </h3>
            </div>
            <div className="skill-tags">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
                  className="skill-tag"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="skill-section"
          >
            <div className="section-header">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-pink-400">🛠️</span>
                </span>
                Tools
              </h3>
            </div>
            <div className="skill-tags">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
                  className="skill-tag tool"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Skills Section */}
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="skill-section"
          >
            <div className="section-header">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400">👤</span>
                </span>
                Personal Skills
              </h3>
            </div>
            <div className="skill-tags">
              {personalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
                  className="skill-tag personal"
                >
                  {skill}
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
