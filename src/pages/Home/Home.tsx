import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Sparkles from "@/components/ui/sparkles";
import { Button } from "@/components/ui/moving-border";
import { PageTransition } from "@/components/ui/page-transition";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate("/projects");
  };

  const handleGetInTouch = () => {
    navigate("/contact");
  };

  return (
    <PageTransition>
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
        {/* Background Image with Low Opacity - Optional */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-0"
          style={{
            backgroundImage: `url(/my-profile-img.jpg)`,
            filter: "blur(1px)",
            backgroundColor: "#0a0a0a",
          }}
        />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/70 to-neutral-950/90 z-10" />

        {/* Background animations */}
        <div className="absolute inset-0 z-20">
          <BackgroundBeams />
        </div>

        <motion.div
          className="relative z-30 max-w-4xl mx-auto text-center px-4 mt-25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute inset-0 z-0">
              <Sparkles
                className="w-full h-full"
                particleColor="#0ea5e9"
                minSize={0.6}
                maxSize={1.4}
              />
            </div>

            {/* Hero Title with Enhanced Styling */}
            <motion.div
              className="relative z-10 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-center bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Rohit Sharma
              </motion.h1>
              <motion.div
                className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-400 mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                Software Engineer & Frontend Developer
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <TextGenerateEffect
                words="Building dynamic, user-friendly web applications with modern technologies"
                className="text-lg md:text-xl lg:text-2xl font-medium text-center text-neutral-300 relative z-10"
                duration={0.4}
              />
            </motion.div>
          </div>

          {/* Enhanced Description */}
          <motion.div
            className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto mt-8 leading-relaxed relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.p
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Passionate about creating efficient and scalable solutions with{" "}
              <span className="text-blue-400 font-semibold">React.js</span> and{" "}
              <span className="text-blue-400 font-semibold">Vue.js</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              Specializing in component-based architecture and responsive UI
              design
            </motion.p>
          </motion.div>

          {/* Action Buttons with Enhanced Styling */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.7 }}
            >
              <Button borderRadius="1rem" onClick={handleViewWork}>
                View My Work
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.9 }}
            >
              <Button borderRadius="1rem" onClick={handleGetInTouch}>
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Tech Stack Indicators */}
          <motion.div
            className="mt-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
          >
            <motion.p
              className="text-neutral-500 text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.3 }}
            >
              Specializing in
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              {[
                "JavaScript",
                "Vue.js",
                "React.js",
                "TypeScript",
                "Node.js",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-full text-neutral-300 text-sm hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 2.7 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
