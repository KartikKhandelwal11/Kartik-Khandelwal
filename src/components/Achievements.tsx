import React from "react";
import { Trophy, Star, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Safe Play Mode",
      description: "Introduced a feature aligning participant deadlines with match times and showing player lineups, enhancing accuracy in fantasy team creation.",
      highlight: "Industry Standard Feature"
    },
    {
      icon: Star,
      title: "Winning Conversion Feature",
      description: "Enhanced user engagement by converting winnings to wallet balances, addressing tax concerns and improving user retention.",
      highlight: "40% Increase in Retention"
    }
  ];

  const awards = [
    { year: "2023", title: "The Creative Idea Award", color: "from-purple-500" },
    { year: "2022", title: "Rising Star Award", color: "from-blue-500" },
    { year: "2021", title: "Shining Star Award", color: "from-pink-500" },
    { year: "2020", title: "Employee of the year", color: "from-indigo-500" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#0A0A0A] via-[#120B2E] to-[#0A0A0A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Showcasing impactful contributions and recognition in the field
          </p>
        </motion.div>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="inline-flex items-center gap-2 text-purple-400 font-medium">
                  <span>{item.highlight}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${award.color}/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
              <div className="relative">
                <Award className="w-8 h-8 text-purple-400 mb-3" />
                <div className="text-sm md:text-base font-semibold text-purple-400 mb-1">{award.year}</div>
                <div className="text-sm md:text-base text-white/80">{award.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;