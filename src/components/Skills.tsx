import React from "react";

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
    <section className="py-20 relative" id="skills">
      {/* Header Section - Keeping as requested */}
      <div className="text-center mb-20">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 blur-[100px] rounded-full"></div>
          <h2 className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-3xl md:text-5xl font-bold">
            <div className="relative">
              <span className="absolute -inset-1 bg-white/20 blur-md rounded-lg"></span>
              <span className="relative text-white">My</span>
            </div>
            <div className="relative">
              <span className="absolute -inset-1 bg-purple-600/20 blur-md rounded-lg"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                Skills
              </span>
            </div>
          </h2>
        </div>
        <div className="mt-8 relative">
          <span className="absolute -left-4 -top-4 w-3 h-3 bg-cyan-500 rounded-full animate-ping"></span>
          <span className="absolute -right-4 -bottom-4 w-3 h-3 bg-violet-500 rounded-full animate-ping"></span>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Mastering the art of digital innovation with a diverse skill set
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-purple-500 text-2xl">🎮</span>
                <h3 className="text-xl font-semibold text-white">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-3">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools and Personal Skills Column */}
          <div className="grid grid-cols-1 gap-8">
            {/* Tools Card */}
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-cyan-500 text-2xl">🛠️</span>
                  <h3 className="text-xl font-semibold text-white">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Personal Skills Card */}
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-blue-500 text-2xl">👤</span>
                  <h3 className="text-xl font-semibold text-white">
                    Personal Skills
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {personalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
