import React, { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/moving-border";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { PageTransition } from "@/components/ui/page-transition";
import emailjs from "@emailjs/browser";
import { emailJSConfig } from "@/config/email.config";

const Contact: React.FC = () => {
  // const contactText = "Let's build something amazing together";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  // EmailJS configuration
  // Update these values in src/config/email.config.ts or use environment variables

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear any previous status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Rohit", // Your name
        reply_to: formData.email,
      };

      await emailjs.send(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        templateParams,
        emailJSConfig.publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const contactItems = [
    {
      icon: Mail,
      text: "srohit1404@gmail.com",
      id: "email",
      href: "mailto:srohit1404@gmail.com",
    },
    {
      icon: Phone,
      text: "+91 7018959166",
      id: "phone",
      href: "tel:+917018959166",
    },
    {
      icon: MapPin,
      text: "Mohali Punjab",
      id: "location",
      href: "https://maps.app.goo.gl/ZFKza9caXc97foez7",
      target: "_blank",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/pynetx89",
      label: "GitHub",
      id: "github",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rohit-sharma-47bb92161?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      label: "LinkedIn",
      id: "linkedin",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-neutral-950 relative pt-20 overflow-hidden">
        <BackgroundBeams />

        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <TextGenerateEffect
              words="Get In Touch"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            />
            {/* <TextGenerateEffect
              words={contactText}
              className="text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto"
              duration={0.02}
            /> */}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white mb-8"
                variants={itemVariants}
              >
                Contact Information
              </motion.h2>

              <motion.div className="space-y-6" variants={containerVariants}>
                {contactItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="flex items-center space-x-4 text-neutral-300 group cursor-pointer p-3 rounded-lg hover:bg-neutral-900/50 transition-all duration-300"
                  >
                    <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <item.icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
                    </div>
                    {item.text === "Mohali Punjab" ? (
                      <a
                        href={item.href}
                        target={item.target}
                        className="text-lg group-hover:text-white transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-lg group-hover:text-white transition-colors">
                        {item.text}
                      </span>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="pt-8" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.id}
                      variants={socialVariants}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-neutral-800/50 backdrop-blur-sm rounded-xl text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 border border-neutral-700 hover:border-blue-500/50 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-neutral-900/50 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-2xl"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center">
                <Send className="h-7 w-7 text-blue-400 mr-3" />
                Send a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border flex items-center space-x-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border-green-500/30 text-green-400"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium">
                      {submitStatus.message}
                    </span>
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-neutral-300 mb-3 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-blue-400 focus:bg-neutral-800 transition-all duration-300 hover:border-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-neutral-300 mb-3 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-blue-400 focus:bg-neutral-800 transition-all duration-300 hover:border-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your email address"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-neutral-300 mb-3 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-4 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-blue-400 focus:bg-neutral-800 transition-all duration-300 hover:border-neutral-600 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your message here..."
                    required
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Button
                    borderRadius="1rem"
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 flex items-center justify-center font-medium transition-all duration-300 ${
                      isSubmitting 
                        ? "opacity-50 cursor-not-allowed" 
                        : "hover:scale-105 active:scale-95"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="h-5 w-5 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Contact;
