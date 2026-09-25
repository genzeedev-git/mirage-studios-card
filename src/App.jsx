import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBehance,
  FaPinterestP,
  FaWhatsapp,
  FaShareAlt,
  FaCheck,
  FaCopy,
  FaServer,
  FaTable,
  FaChartBar,
  FaLink,
  FaSearch,
  FaInstagram,
  FaDribbble,
  FaGlobe,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const LINK_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Website",
    description: "Live pages and deployments",
    icon: FaGlobe,
    color: "from-blue-600 to-cyan-500",
    links: [
      { name: "Main Website", url: "https://mirage-studios.com", icon: FaGlobe },
      { name: "Test Website", url: "https://mirage-studios-test.netlify.app/", icon: FaGlobe },
      { name: "Admin Page", url: "https://mirage-studios.com/admin-dashboard", icon: FaChartBar },
      { name: "Links Page", url: "https://mirage-studios.com/links", icon: FaLink },
      { name: "Portfolio PDF", url: "https://mirage-studios.com/portfolio", icon: FaSearch },
    ],
  },
  {
    id: "backend",
    title: "Backend & API",
    description: "Server, endpoints, and database",
    icon: FaServer,
    color: "from-violet-500 to-purple-400",
    links: [
      { name: "Main Backend API", url: "https://p1-mirage-studios-backend.vercel.app", icon: SiVercel },
      { name: "Health Check", url: "https://p1-mirage-studios-backend.vercel.app/health", icon: FaChartBar },
      { name: "Projects API", url: "https://p1-mirage-studios-backend.vercel.app/projects", icon: FaTable },
    ],
  },
  {
    id: "sheets",
    title: "Google Sheets",
    description: "Form collection and data storage",
    icon: FaTable,
    color: "from-emerald-500 to-teal-400",
    links: [
      { name: "Spreadsheet", url: "https://docs.google.com/spreadsheets/d/1dehxVYrjGk9ibSZizfFJ_dNc6ZvgT2e_S8ZeyQNNaII", icon: FaTable },
    ],
  },
  {
    id: "social",
    title: "Social Media",
    description: "Connect with us across platforms",
    icon: FaShareAlt,
    color: "from-pink-500 to-rose-400",
    links: [
      { name: "Instagram", url: "https://www.instagram.com/brands_by_mirage", icon: FaInstagram },
      { name: "Behance", url: "https://www.behance.net/mirage-studios-", icon: FaBehance },
      { name: "Dribbble", url: "https://dribbble.com/Mirage_Studios_", icon: FaDribbble },
      { name: "Pinterest", url: "https://in.pinterest.com/Mirage_Studios/", icon: FaPinterestP },
      { name: "WhatsApp", url: "https://wa.me/message/T4CETI55YMMMC1", icon: FaWhatsapp },
      { name: "Contra", url: "https://contra.com/pramodh_ramesh_3wpa5azx?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=pramodh_ramesh_3wpa5azx", icon: FaGlobe },
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const App = () => {
  const [copiedUrl, setCopiedUrl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const copyToClipboard = async (url, name) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(name);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const filteredCategories = LINK_CATEGORIES.map((category) => ({
    ...category,
    links: category.links.filter(
      (link) =>
        link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.url.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.links.length > 0);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc] text-[#1f2937] font-mirage">
      {/* Subtle gradient orbs — matching frontend Links.tsx */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-gray-400/80 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/3 h-96 w-96 rounded-full bg-zinc-400/80 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 3xl:px-12">
        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="sticky top-0 z-50 border-b border-[#1f2937]/10 bg-white/60 backdrop-blur-xl"
        >
          <div className="flex h-16 items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <img
                src="/logo-black.svg"
                alt="Mirage Studios"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <p className="text-xs text-[#1f2937]/50">
                  Links Hub
                </p>
              </div>
            </motion.div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative py-12 sm:py-20 3xl:py-32 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl text-center">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl 3xl:text-8xl font-bold mb-4 sm:mb-6 3xl:mb-8 text-[#0f172a]"
              style={{ fontFamily: "var(--font-mirage)", lineHeight: 1.1 }}
            >
              All Links,
              <br />
              <span className="text-[#f8fafc] bg-black px-4 3xl:px-6 py-1 rounded-lg">
                One Place
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg 3xl:text-xl max-w-2xl mx-auto mb-8 3xl:mb-12 text-[#1f2937]/60"
            >
              Mirage Studios — a single, unified dashboard for social, frontend, APIs, and Sheets.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-xl mx-auto relative"
            >
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1f2937]/30" />
              <input
                type="text"
                placeholder="Search links, platforms, repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[#1f2937]/20 bg-white/80 pl-12 pr-4 py-4 text-sm sm:text-base 3xl:text-lg text-[#1f2937] placeholder-[#1f2937]/30 outline-none backdrop-blur-sm transition-all focus:border-blue-500/50 focus:bg-white"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Categories — Separate Grids with Inner Grids */}
        <main className="pb-20 3xl:pb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-y-12 sm:gap-y-16 3xl:gap-y-20"
          >
            {filteredCategories.map((category, idx) => (
              <motion.section
                key={category.id}
                custom={idx}
                variants={fadeInUp}
                className="space-y-6 3xl:space-y-8"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 3xl:gap-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="flex h-12 w-12 3xl:h-14 3xl:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1f2937]/10 to-[#1f2937]/20 text-[#0f172a]"
                  >
                    <category.icon className="text-xl 3xl:text-2xl" />
                  </motion.div>
                  <div>
                    <h2
                      className="text-2xl sm:text-3xl 3xl:text-4xl font-bold text-[#0f172a]"
                      style={{ fontFamily: "var(--font-mirage)" }}
                    >
                      {category.title}
                    </h2>
                    <p className="text-xs sm:text-sm 3xl:text-base text-[#1f2937]/60 mt-0.5">
                      {category.description} • {category.links.length} links
                    </p>
                  </div>
                </div>

                {/* Inner Grid — links arranged per category */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 3xl:gap-5"
                >
                  {category.links.map((link, linkIdx) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + linkIdx * 0.05 }}
                      whileHover={{ y: -2, backgroundColor: "rgba(31, 41, 59, 0.06)" }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center gap-3 3xl:gap-4 rounded-xl bg-[#1f2937]/5 px-4 3xl:px-6 py-3 3xl:py-4 text-sm sm:text-base 3xl:text-lg font-bold text-[#1f2937] transition-all hover:bg-[#1f2937]/10 border border-[#1f2937]/20"
                    >
                      <div className="flex h-10 w-10 3xl:h-12 3xl:w-12 shrink-0 items-center justify-center rounded-lg bg-[#1f2937]/10">
                        <link.icon className="text-lg 3xl:text-2xl" />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="truncate">{link.name}</span>
                        <span className="text-xs 3xl:text-sm font-normal text-[#1f2937]/50 truncate">
                          {link.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </span>
                      </div>

                      <motion.button
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: idx * 0.1 + linkIdx * 0.1 + 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          copyToClipboard(link.url, link.name);
                        }}
                        className="ml-auto shrink-0 flex h-8 w-8 3xl:h-10 3xl:w-10 items-center justify-center rounded-lg text-[#1f2937]/40 hover:bg-[#1f2937]/10 hover:text-[#1f2937] transition-all"
                        title="Copy link"
                      >
                        <AnimatePresence mode="wait">
                          {copiedUrl === link.name ? (
                            <motion.div
                              key="check"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              className="text-green-500"
                            >
                              <FaCheck className="text-sm 3xl:text-base" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="copy"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                            >
                              <FaCopy className="text-sm 3xl:text-base" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.section>
            ))}
          </motion.div>

          {filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-xl text-[#1f2937]/60">
                No links found matching "{searchQuery}"
              </p>
            </motion.div>
          )}
        </main>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-t border-[#1f2937]/10 bg-white/50 py-12 3xl:py-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 3xl:gap-16">
            {/* GenzeeDev Contact */}
            <div className="text-center sm:text-left">
              <h3
                className="text-lg sm:text-xl 3xl:text-2xl font-bold text-[#0f172a] mb-3 3xl:mb-4"
                style={{ fontFamily: "var(--font-mirage)" }}
              >
                GenzeeDev
              </h3>
              <p className="text-xs sm:text-sm 3xl:text-base text-[#1f2937]/60 mb-4 3xl:mb-6">
                We craft digital experiences for brands worldwide.
              </p>
              <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm 3xl:text-base text-[#1f2937]/70">
                <p>
                  <span className="font-semibold text-[#0f172a]">Email: </span>
                  genzeedev.contact@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-[#0f172a]">Phone: </span>
                  +91 9842852121, +91 8248627519
                </p>
                <p>
                  <span className="font-semibold text-[#0f172a]">Website: </span>
                  genzeedev.vercel.app
                </p>
              </div>
            </div>

            {/* Mirage Studios Contact */}
            <div className="text-center sm:text-left">
              <h3
                className="text-lg sm:text-xl 3xl:text-2xl font-bold text-[#0f172a] mb-3 3xl:mb-4"
                style={{ fontFamily: "var(--font-mirage)" }}
              >
                Mirage Studios
              </h3>
              <p className="text-xs sm:text-sm 3xl:text-base text-[#1f2937]/60 mb-4 3xl:mb-6">
                Creative agency building immersive digital products.
              </p>
              <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm 3xl:text-base text-[#1f2937]/70">
                <p>
                  <span className="font-semibold text-[#0f172a]">Email: </span>
                  hello@mirage-studios.com
                </p>
                <p>
                  <span className="font-semibold text-[#0f172a]">Phone: </span>
                  +91 99400 37175
                </p>
                <p>
                  <span className="font-semibold text-[#0f172a]">Website: </span>
                  mirage-studios.com
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="border-t border-[#1f2937]/10 bg-white/50 py-8 sm:py-12 3xl:py-16 text-[#1f2937]/60"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo-black.svg"
                  alt="Mirage Studios"
                  className="h-8 w-auto opacity-60"
                />
              </div>
              <p className="text-xs sm:text-sm 3xl:text-base text-center sm:text-right">
                Dedicated Links Dashboard. Built with care for our client.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {copiedUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-[#0f172a] px-6 3xl:px-8 py-3 3xl:py-4 text-xs 3xl:text-sm font-bold text-white shadow-lg"
          >
            Link copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
