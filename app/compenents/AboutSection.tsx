"use client";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { TAB_DATA } from "./tabData";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (titleTab: string) => {
    startTransition(() => {
      setTab(titleTab);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-secondary-400 text-lg max-w-2xl mx-auto">
            Passionate developer with expertise in building modern, scalable
            applications
          </p>
        </motion.div>

        {/* Content only - removed image grid */}
        <motion.div
          className="space-y-8 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.p
            className="text-secondary-300 text-lg leading-relaxed"
            variants={itemVariants}
          >
            I'm a full-stack developer specialized in Nodejs (ExpressJS, Fastify), React, Next.js, and
            SQL. With a strong foundation in computer science, I create
            innovative solutions that solve real-world problems.
          </motion.p>

          {/* Tab buttons */}
          <motion.div
            className="flex gap-3 flex-wrap justify-center"
            variants={itemVariants}
          >
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                active={tab === t.id}
                selectTab={() => handleTabChange(t.id)}
              >
                {t.label}
              </TabButton>
            ))}
          </motion.div>

          {/* Tab content */}
          <motion.div
            className="bg-gradient-to-br from-secondary-800/50 to-secondary-900/50 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {TAB_DATA.find((t) => tab === t.id)?.content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
