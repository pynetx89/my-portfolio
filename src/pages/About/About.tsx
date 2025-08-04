import React, { useRef } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Meteors } from "@/components/ui/meteors";
import { motion, useInView } from "framer-motion";
import { PageTransition } from "@/components/ui/page-transition";

const About: React.FC = () => {
  const aboutText =
    "Passionate developer crafting digital experiences with innovation and creativity";

  const skillsRef = useRef(null);
  const journeyRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const journeyInView = useInView(journeyRef, { once: true, margin: "-100px" });

  const skills = [
    { name: "React.js", color: "from-blue-400 to-blue-600" },
    { name: "Vue.js", color: "from-green-400 to-green-600" },
    { name: "TypeScript", color: "from-blue-500 to-indigo-600" },
    { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
    { name: "Bootstrap", color: "from-purple-400 to-purple-600" },
    { name: "Bootstrap Vue", color: "from-purple-500 to-green-500" },
    { name: "Node.js", color: "from-green-500 to-green-700" },
    { name: "MongoDB", color: "from-green-600 to-green-800" },
    { name: "Docker", color: "from-blue-600 to-cyan-600" },
    { name: "Accessibility", color: "from-pink-400 to-rose-600" },
    { name: "GraphQL", color: "from-pink-500 to-purple-600" },
    { name: "Git", color: "from-orange-400 to-red-600" },
    { name: "Figma", color: "from-purple-600 to-pink-600" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-blue-600" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-neutral-950 relative overflow-hidden pt-20">
        <Meteors number={30} />

        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.3,
            delayChildren: 0.2,
          }}
        >
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <TextGenerateEffect
                words="About Me"
                className="text-4xl md:text-6xl font-bold text-white mb-8"
              />
              <TextGenerateEffect
                words={aboutText}
                className="text-xl md:text-2xl text-neutral-300 mb-12"
                duration={0.3}
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              ref={journeyRef}
              initial={{ opacity: 0, x: -80, rotateY: -10 }}
              animate={
                journeyInView
                  ? {
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      transition: {
                        duration: 1,
                        ease: [0.25, 0.25, 0, 1],
                        staggerChildren: 0.2,
                      },
                    }
                  : {}
              }
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  journeyInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.3, duration: 0.8 },
                      }
                    : {}
                }
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
                <motion.div
                  className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 group"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.h2
                    className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    My Journey
                  </motion.h2>
                  <motion.p
                    className="text-neutral-300 leading-relaxed mb-4 group-hover:text-neutral-200 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      journeyInView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.5, duration: 0.8 },
                          }
                        : {}
                    }
                  >
                    I'm a passionate full-stack developer with over 2 years of
                    experience in creating modern web applications. My journey
                    started with curiosity about how websites work, and has
                    evolved into a deep love for crafting seamless user
                    experiences.
                  </motion.p>
                  <motion.p
                    className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      journeyInView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.7, duration: 0.8 },
                          }
                        : {}
                    }
                  >
                    I specialize in React, TypeScript, Node.js, and modern web
                    technologies. I believe in writing clean, maintainable code
                    and creating applications that not only function well but
                    also provide delightful user experiences.
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              ref={skillsRef}
              initial={{ opacity: 0, x: 80, rotateY: 10 }}
              animate={
                skillsInView
                  ? {
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      transition: {
                        duration: 1,
                        ease: [0.25, 0.25, 0, 1],
                      },
                    }
                  : {}
              }
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  skillsInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.2, duration: 0.8 },
                      }
                    : {}
                }
              >
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Skills & Technologies
                </h3>
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  animate={skillsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30, rotateX: -15 }}
                      animate={
                        skillsInView
                          ? {
                              opacity: 1,
                              y: 0,
                              rotateX: 0,
                              transition: {
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut",
                              },
                            }
                          : {}
                      }
                      whileHover={{
                        scale: 1.05,
                        rotateY: 5,
                        transition: { duration: 0.3 },
                      }}
                      className="relative group cursor-pointer"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300 blur-sm`}
                      ></div>
                      <div className="relative bg-neutral-800 rounded-lg p-4 text-center text-white border border-neutral-700 group-hover:border-neutral-600 transition-all duration-300 backdrop-blur-sm">
                        <span className="relative z-10 font-medium">
                          {skill.name}
                        </span>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Additional animated decorative elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Floating particles */}
          <motion.div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full"
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default About;
