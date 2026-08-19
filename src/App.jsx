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
    id: "social",
    title: "Social Media",
    description: "Connect with us across platforms",
    icon: FaShareAlt,
    color: "from-blue-500 to-cyan-400",
    links: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/brands_by_mirage",
        icon: FaInstagram,
      },
      {
        name: "Behance",
        url: "https://www.behance.net/mirage-studios-",
        icon: FaBehance,
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com/Mirage_Studios_",
        icon: FaDribbble,
      },
      {
        name: "Pinterest",
        url: "https://in.pinterest.com/Mirage_Studios/",
        icon: FaPinterestP,
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/message/T4CETI55YMMMC1",
        icon: FaWhatsapp,
      },
      {
        name: "Contra",
        url: "https://contra.com/pramodh_ramesh_3wpa5azx?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=pramodh_ramesh_3wpa5azx",
        icon: FaGlobe,
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Website",
    description: "Live pages and deployments",
    icon: FaGlobe,
    color: "from-violet-500 to-purple-400",
    links: [
      { name: "Main Website", url: "https://mirage-studios.com", icon: FaGlobe },
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
    color: "from-emerald-500 to-teal-400",
    links: [
      { name: "Main Backend API", url: "https://p1-mirage-studios-backend.vercel.app", icon: SiVercel },
      {
        name: "Health Check",
        url: "https://p1-mirage-studios-backend.vercel.app/health",
        icon: FaChartBar,
      },
      {
        name: "Projects API",
        url: "https://p1-mirage-studios-backend.vercel.app/projects",
        icon: FaTable,
      },
    ],
  },
  {
    id: "sheets",
    title: "Google Sheets",
    description: "Form collection and data storage",
    icon: FaTable,
    color: "from-green-500 to-emerald-400",
    links: [
      {
        name: "Spreadsheet",
        url: "https://docs.google.com/spreadsheets/d/1dehxVYrjGk9ibSZizfFJ_dNc6ZvgT2e_S8ZeyQNNaII",
        icon: FaTable,
      },
    ],
  }
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
    <div className="min-h-screen bg-[#E6E6E6] text-[#1f2937]">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-blue-100/50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 3xl:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20 3xl:h-24">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <img
                src="/logo-black.svg"
                alt="Mirage Studios"
                className="h-8 sm:h-10 w-auto"
              />
              <div className="hidden sm:block">
                <p className="text-xs text-gray-500">
                  Links Hub
                </p>
              </div>
            </motion.div>
          </div>
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
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl 3xl:text-8xl font-bold mb-4 sm:mb-6 3xl:mb-8 text-navy"
            style={{ fontFamily: "var(--font-mirage)", lineHeight: 1.1 }}
          >
            All Links,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              One Place
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg 3xl:text-xl max-w-2xl mx-auto mb-8 3xl:mb-12 text-gray-600"
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
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search links, platforms, repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-sm sm:text-base 3xl:text-lg outline-none transition-all bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-primary/50 focus:bg-white shadow-sm"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 3xl:px-12 pb-20 3xl:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 3xl:gap-10 items-start"
        >
          {filteredCategories.map((category, idx) => {
            const linkCount = category.links.length;
            const colSpan = linkCount >= 5 ? "xl:col-span-3" : "col-span-1";

            return (
              <motion.div
                key={category.id}
                custom={idx}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-300 bg-white border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md hover:shadow-blue-100/50 ${colSpan}`}
              >
              {/* Card header with gradient accent */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${category.color}`} />

              <div className="p-6 sm:p-8 3xl:p-10">
                {/* Category header */}
                <div className="flex items-start justify-between mb-6 3xl:mb-8">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                    >
                      <category.icon className="text-xl 3xl:text-2xl" />
                    </motion.div>
                    <div>
                      <h3
                        className="text-lg sm:text-xl 3xl:text-2xl font-bold text-navy"
                        style={{ fontFamily: "var(--font-mirage)" }}
                      >
                        {category.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm 3xl:text-base text-gray-500"
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Links list */}
                <div className="space-y-2.5">
                  {category.links.map((link, linkIdx) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + linkIdx * 0.05 }}
                      whileHover={{ y: -2, backgroundColor: "rgba(28,116,248,0.04)" }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-3 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer bg-gray-50/50 hover:bg-blue-50/50 border border-transparent hover:border-blue-100"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary"
                        >
                          <link.icon className="text-base sm:text-lg 3xl:text-xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-sm sm:text-base 3xl:text-lg font-semibold truncate text-gray-900"
                          >
                            {link.name}
                          </p>
                          <p
                            className="text-xs 3xl:text-sm truncate hidden sm:block text-gray-400"
                          >
                            {link.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            copyToClipboard(link.url, link.name);
                          }}
                          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-gray-200 text-gray-400 hover:text-gray-700"
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
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500">
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
          className="bg-white/60 border-y border-gray-200/60"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 3xl:px-12 py-12 sm:py-16 3xl:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 3xl:gap-16">
              {/* GenzeeDev Contact */}
              <div className="text-center sm:text-left">
                <h3
                  className="text-lg sm:text-xl 3xl:text-2xl font-bold text-navy mb-3 3xl:mb-4"
                  style={{ fontFamily: "var(--font-mirage)" }}
                >
                  GenzeeDev
                </h3>
                <p className="text-xs sm:text-sm 3xl:text-base text-gray-500 mb-4 3xl:mb-6">
                  We craft digital experiences for brands worldwide.
                </p>
                <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm 3xl:text-base text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-800">Email: </span>
                    genzeedev.contact@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Phone: </span>
                    +91 9842852121, +91 8248627519
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Website: </span>
                    genzeedev.vercel.app
                  </p>
                </div>
              </div>

              {/* Mirage Studios Contact */}
              <div className="text-center sm:text-left">
                <h3
                  className="text-lg sm:text-xl 3xl:text-2xl font-bold text-navy mb-3 3xl:mb-4"
                  style={{ fontFamily: "var(--font-mirage)" }}
                >
                  Mirage Studios
                </h3>
                <p className="text-xs sm:text-sm 3xl:text-base text-gray-500 mb-4 3xl:mb-6">
                  Creative agency building immersive digital products.
                </p>
                <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm 3xl:text-base text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-800">Email: </span>
                    hello@mirage-studios.com
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Phone: </span>
                    +91 99400 37175
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Website: </span>
                    mirage-studios.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="border-t py-8 sm:py-12 3xl:py-16 bg-white/80 border-gray-200 text-gray-600"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 3xl:px-12">
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
  );
};

export default App;
