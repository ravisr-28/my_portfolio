import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiVerifiedBadgeFill,
  RiMapPin2Fill,
  RiMailSendLine,
} from "react-icons/ri";
import { FiHeart, FiFileText } from "react-icons/fi";
import BackgroundStyle from "../../core/BackgroundStyle";
import { socialLinks } from "../../../data/hero-data";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <BackgroundStyle>
        <div className="animate-pulse space-y-4 p-6">
          <div className="h-28 sm:h-36 bg-gray-800/50 rounded-t-lg -mt-4 -mx-6" />
          <div className="flex items-end -mt-12 px-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-700/50 border-4 border-black" />
          </div>
          <div className="h-8 bg-gray-800/50 rounded w-48" />
          <div className="h-4 bg-gray-800/50 rounded w-96" />
        </div>
      </BackgroundStyle>
    );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const socialContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  return (
    <BackgroundStyle>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10"
      >
        {/* Profile Banner */}
        <motion.div
          variants={itemVariants}
          className="h-28 sm:h-36 overflow-hidden rounded-t-lg -mt-4 -mx-6 relative group"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full overflow-hidden"
          >
            <img
              src="/profile/profile_banner.png"
              alt="Profile Banner"
              className="object-cover object-center w-full h-full opacity-20 group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="relative -mt-12 sm:-mt-16 mb-4 px-4 sm:px-6 flex items-end justify-between"
        >
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            whileTap={{ scale: 0.95 }}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-[4px] border-white dark:border-[#0F1115] shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing transition-all duration-300 z-20"
          >
            <img
              src="/profile/ravi-dp.JPG"
              alt="Profile Photo"
              className="object-cover object-center w-full h-full"
            />
          </motion.div>
        </motion.div>

        {/* Profile Info */}
        <div className="space-y-4 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-1.5"
                >
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
                    Ravi Shankar
                  </h1>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="text-blue-500"
                  >
                    <RiVerifiedBadgeFill className="w-5 h-5" />
                  </motion.span>
                  <span className="text-xs sm:text-sm font-medium text-gray-400 bg-gray-100 dark:bg-gray-800/50 px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-700">
                    he/him
                  </span>
                </motion.div>

                {/* <motion.div variants={itemVariants}>
                  <a
                    href="https://github.com/sponsors/ravisr-28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-3 py-1 text-xs font-semibold bg-pink-50 text-pink-500 rounded-full overflow-hidden transition-all duration-300 border border-pink-200 dark:border-pink-900/30 dark:bg-pink-900/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] active:scale-95 flex items-center gap-1.5"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <FiHeart className="w-3.5 h-3.5 fill-current" />
                    </motion.div>
                    <span className="relative z-10 py-0.5">Sponsor</span>
                  </a>
                </motion.div> */}
              </div>
            </div>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed tracking-wide font-light"
          >
            BCA&apos;27{" "}
            <span className="text-gray-300 dark:text-gray-600">|</span>{" "}
            Full-Stack Developer{" "}
            <span className="text-gray-300 dark:text-gray-600">|</span> React.js
            &amp; Flutter{" "}
            <span className="text-gray-300 dark:text-gray-600">|</span> Problem
            Solver <span className="text-gray-300 dark:text-gray-600">|</span>{" "}
            Exploring the intersection of{" "}
            <span className="font-medium text-green-600 dark:text-green-400">
              Design
            </span>{" "}
            and{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              Engineering
            </span>
            .
          </motion.p>

          {/* Social Links & Resume */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <motion.div
              variants={socialContainerVariants}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 text-gray-600 bg-gray-50 dark:bg-gray-800/50 dark:hover:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="/exp/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-5 py-2 text-sm font-medium bg-gray-200/50 dark:bg-gray-800/50 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <span className="absolute inset-0 w-full py-16 px-24 h-full bg-white dark:bg-white transition-transform duration-750 ease-out transform translate-y-1/3 -rotate-12 -translate-x-full group-hover:translate-x-0 group-hover:translate-y-0 origin-bottom-left z-0" />
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-900">
                    <FiFileText className="w-4 h-4" />
                    <span>Resume</span>
                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">
                      →
                    </span>
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Location & Contact */}
          <motion.div
            variants={itemVariants}
            className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <RiMapPin2Fill className="text-red-500" />
              <span>Bihar, India</span>
            </div>
            <div className="flex items-center gap-2 group">
              <RiMailSendLine className="text-blue-500 group-hover:animate-bounce" />
              <a
                href="mailto:ravishankarsingh345@gmail.com"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                ravishankarsingh345@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </BackgroundStyle>
  );
}
