import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
        {title}
      </h1>
      <p className="text-secondary-400 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}
