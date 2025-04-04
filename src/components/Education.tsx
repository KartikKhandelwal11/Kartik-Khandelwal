import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { BsCalendarFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import "../Assets/Styles/education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Masters Of Commerce",
      stream: "Business Administration",
      universityName: "University of Rajasthan",
      duration: {
        start: "2024",
        end: "Present",
      },
    },
    {
      degree: "Bachelor Of Commerce",
      stream: "Business Administration",
      universityName: "University of Rajasthan",
      duration: {
        start: "2018",
        end: "2021",
      },
    },
    {
      degree: "B.Voc in Hotel Management",
      stream: "Hotel Management",
      universityName: "Dangayach School of Hotel Management",
      duration: {
        start: "2017",
        end: "2020",
      },
    },
  ];

  return (
    <section className="py-12 bg-pm-dark relative" id="education">
      <div className="grid-background absolute inset-0" />

      <div className="container-custom relative">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 
                          blur-[100px] rounded-full"></div>
            <h2 className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-3xl md:text-5xl font-bold">
              <div className="relative">
                <span className="absolute -inset-1 bg-white/20 blur-md rounded-lg"></span>
                <span className="relative text-white">
                  Academic
                </span>
              </div>
              <div className="relative">
                <span className="absolute -inset-1 bg-purple-600/20 blur-md rounded-lg"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                  Journey
                </span>
              </div>
            </h2>
            <div className="mt-6 relative">
              <span className="absolute -left-4 -top-4 w-2 h-2 bg-purple-500 rounded-full animate-ping"></span>
              <span className="absolute -right-4 -bottom-4 w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
              <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                Building knowledge, shaping future through continuous learning and growth
              </p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", 0.2 * (index + 1), 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="education-card"
            >
              <div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-transparent 
                            backdrop-blur-sm z-10"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
                  <FaGraduationCap className="w-full h-full education-icon" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-pm-accent">
                      <BsCalendarFill className="text-sm calendar-icon" />
                      <span className="text-sm font-medium">
                        {edu.duration.start} - {edu.duration.end}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold">
                      <span className="education-stream bg-gradient-to-r from-pm-accent via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        {edu.stream}
                      </span>
                    </h3>

                    <p className="text-lg text-pm-light/80">{edu.degree}</p>

                    <div className="flex items-center gap-2 text-pm-light/60">
                      <FaUniversity className="text-pm-accent" />
                      <span>{edu.universityName}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
