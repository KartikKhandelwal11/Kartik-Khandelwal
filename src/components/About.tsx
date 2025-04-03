import React from "react";
import { Rocket, Brain, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen relative py-12 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#120B2E] to-[#0A0A0A]"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-[20%] w-64 h-64 bg-cyan-500/10 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-40 right-[10%] w-72 h-72 bg-violet-500/10 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-[40%] right-[30%] w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[100px] animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-indigo-500/20 rounded-full blur-lg animate-pulse"></div>
              <h2 className="relative text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-cyan-500 via-violet-500 to-indigo-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Main Content */}
            <div className="glass bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Passionate{" "}
                  <span className="text-cyan-400 font-semibold">
                    Product Manager
                  </span>{" "}
                  with a proven track record in transforming fantasy sports
                  experiences through innovative solutions and data-driven
                  strategies.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Successfully launched{" "}
                  <span className="text-violet-400 font-semibold">
                    industry-first features
                  </span>{" "}
                  that enhanced user engagement and retention while maintaining
                  a perfect balance between user experience and business
                  objectives.
                </p>
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="space-y-6">
              <div className="glass bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl">
                    <Rocket className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                      Innovation Driven
                    </h3>
                    <p className="text-gray-400">
                      Pioneered Safe Play Mode and Winning Conversion features
                      that became industry standards
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-violet-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-violet-500/10 rounded-xl">
                    <Brain className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-violet-400 mb-2">
                      Strategic Thinking
                    </h3>
                    <p className="text-gray-400">
                      Blend of technical expertise and business acumen to
                      deliver exceptional results
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#experience"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 p-px rounded-xl"
              >
                <div className="w-full bg-[#0A0A0A] hover:bg-transparent transition-colors rounded-xl px-6 py-3">
                  <span className="flex items-center justify-center gap-2 font-medium">
                    View My Experience
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
