import React from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import "../Assets/Styles/experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Product Manager",
      company: "MyTeam11",
      location: "Jaipur",
      period: "2023 - Present",
      responsibilities: [
        "Led cross-functional teams in developing and launching innovative fantasy gaming features, resulting in a 30% increase in user engagement",
        "Implemented agile methodologies and established a structured sprint planning process, improving team velocity by 40%",
        "Developed comprehensive product strategy and roadmap aligned with business objectives and market demands",
        "Orchestrated successful launches of multiple product features through effective stakeholder management and clear communication",
        "Introduced data-driven decision-making processes, leading to a 25% improvement in user retention metrics",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "MyTeam11",
      location: "Jaipur",
      period: "09/2022 - 09/2023",
      responsibilities: [
        "Spearheaded the redesign of key user journeys, resulting in a 20% increase in user satisfaction scores",
        "Collaborated with engineering teams to optimize product performance and reduce load times by 35%",
        "Created and maintained detailed product specifications and user stories for new features",
        "Conducted competitive analysis and user research to identify market opportunities and user pain points",
      ],
    },
    {
      title: "Sr. CX Business Analyst",
      company: "MyTeam11",
      location: "Jaipur",
      period: "08/2021 - 08/2022",
      responsibilities: [
        "Implemented automated customer feedback analysis system, reducing response time by 50%",
        "Developed predictive models for customer churn, enabling proactive retention strategies",
        "Created comprehensive dashboards that improved customer insight visibility by 75%",
        "Led a team of 5 analysts in implementing customer experience improvement initiatives",
      ],
    },
    {
      title: "CX Business Analyst",
      company: "MyTeam11",
      location: "Jaipur",
      period: "07/2020 - 08/2021",
      responsibilities: [
        "Analyzed customer journey touchpoints to identify and resolve pain points, improving CSAT by 15%",
        "Developed and implemented customer feedback loops that increased customer retention by 25%",
        "Created automated reporting systems that saved 10 hours of manual work weekly",
      ],
    },
    {
      title: "Customer Relation Manager",
      company: "MyTeam11",
      location: "Jaipur",
      period: "06/2019 - 06/2020",
      responsibilities: [
        "Managed a portfolio of 500+ premium customers with 95% satisfaction rate",
        "Reduced average resolution time for customer queries by 40% through process optimization",
        "Implemented new onboarding protocol that improved new customer activation rate by 30%",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 min-h-screen bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 
                          blur-[100px] rounded-full"
            ></div>
            <h2 className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-4xl md:text-6xl font-bold">
              <div className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-md rounded-lg"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200">
                  Work
                </span>
              </div>
              <div className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 to-purple-600/20 blur-md rounded-lg"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200">
                  Experience
                </span>
              </div>
            </h2>
          </div>
          <div className="mt-8 relative">
            <span className="absolute -left-4 -top-4 w-3 h-3 bg-purple-500 rounded-full animate-ping"></span>
            <span className="absolute -right-4 -bottom-4 w-3 h-3 bg-pink-500 rounded-full animate-ping"></span>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences that drive business growth
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-container relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-8 sm:left-1/2 w-0.5 h-full transform sm:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col sm:flex-row items-start gap-6"
              >
                {/* Timeline Icon Dot */}
                <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 z-20">
                  <div
                    className="timeline-dot w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 
                                rounded-full border-4 border-black flex items-center justify-center"
                  >
                    {exp.title.includes("Product") ? (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ) : exp.title.includes("Business Analyst") ? (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content Card - rest remains same */}
                <div
                  className={`ml-20 sm:ml-0 flex-1 ${
                    index % 2 === 0
                      ? "sm:mr-[calc(50%+2rem)]"
                      : "sm:ml-[calc(50%+2rem)]"
                  }`}
                >
                  <div className="experience-card group relative">
                    {/* Card Gradient Border */}
                    <div
                      className="absolute -inset-[1px] bg-gradient-to-r from-purple-600 to-pink-600 
                                  rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"
                    ></div>

                    <div className="relative bg-black/90 rounded-xl p-6 hover:bg-black/80 transition-all">
                      <div className="flex flex-col gap-4">
                        {/* Header */}
                        <div className="flex flex-col gap-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {exp.title}
                          </h3>
                          <span className="inline-flex items-center text-sm text-purple-400">
                            <BiCalendar className="mr-2" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Company Info */}
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center">
                            <BsBuildingsFill className="mr-2 text-purple-400" />
                            {exp.company}
                          </div>
                          <div className="flex items-center">
                            <HiLocationMarker className="mr-2 text-purple-400" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li
                              key={respIndex}
                              className="pl-4 border-l-2 border-purple-500/30 hover:border-purple-500 
                                         text-gray-300 hover:text-white transition-all"
                            >
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
