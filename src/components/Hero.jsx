import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import baluImg from '../assets/balu1.jpg';
import resume from '../assets/Updated CV.pdf';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-[#030303] transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>


            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
                {/* Profile Image with Glowing Border */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                    className="relative w-40 h-40 md:w-52 md:h-52 mb-8 group"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
                    <div className="absolute inset-1 bg-white dark:bg-[#050505] rounded-full z-10 p-1">
                        <img
                            src={baluImg}
                            alt="Parasa Balu Lakshman Pavan"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </motion.div>

                {/* Name and Title */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 transition-colors">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Balu Lakshman Pavan</span>
                    </h1>

                    <div className="h-10 md:h-12 flex justify-center items-center">
                        <h2 className="text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 transition-colors">
                            <Typewriter
                                words={['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h2>
                    </div>

                    <p className="max-w-xl mx-auto mt-6 text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed transition-colors">
                        I craft modern, scalable, and highly interactive web applications with beautifully designed user experiences.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 mt-10 justify-center w-full max-w-md md:max-w-none"
                >
                    <a href="#contact" className="group relative px-8 py-3.5 bg-blue-600 text-white font-medium rounded-full overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        Contact Me
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a href={resume} download="Balu_Lakshman_Pavan_Resume.pdf" target="_blank" rel="noreferrer" className="group px-8 py-3.5 bg-white dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 font-medium rounded-full shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        Download Resume
                        <Download size={18} className="group-hover:text-blue-500 transition-colors" />
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex gap-6 mt-12 mb-16"
                >
                    {[
                        { name: "LinkedIn", icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/balu-parasa", hoverClass: "hover:text-blue-600 dark:hover:text-blue-400", shadowClass: "hover:shadow-blue-500/20" },
                        { name: "GitHub", icon: <Github size={22} />, href: "https://github.com/Balu-parasa", hoverClass: "hover:text-gray-900 dark:hover:text-white", shadowClass: "hover:shadow-gray-500/20" },
                        { 
                            name: "LeetCode",
                            icon: (
                                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] text-[#FFA116]" fill="currentColor">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.953l-4.7-4.606 3.873-4.148.033-.035c.208-.226.321-.403.356-.51a.152.152 0 0 0 .022-.057c.01-.132-.019-.244-.067-.346-.026-.056-.065-.113-.117-.16l-3.23-3.146a.502.502 0 0 1-.013-.715.518.518 0 0 1 .728-.013l3.23 3.146c.553.539.866 1.13.916 1.761a2.164 2.164 0 0 1-.106.877c-.07.218-.184.453-.338.71l-4.659 4.969 4.673 4.58c.848.831.848 2.18 0 3.011l-2.396 2.392c-3.082 3.085-8.113 3.128-11.246.095l-.04-.039-4.277-4.192a8.04 8.04 0 0 1-1.72-2.457 7.625 7.625 0 0 1-.418-1.252A7.375 7.375 0 0 1 .1 13.945c-.015-.224-.022-.45-.022-.676a7.195 7.195 0 0 1 .184-.668 7.072 7.072 0 0 1 1.636-2.844l3.854-4.127a1.373 1.373 0 1 0-2.023-1.879L.085 7.878A9.098 9.098 0 0 0 13.269a9.54 9.54 0 0 0 .167 1.782 10.323 10.323 0 0 0 .564 1.751c.365.86 1.146 1.757 2.062 2.651l4.277 4.193c4.17 3.998 10.835 3.97 14.967-.162l2.396-2.393c1.614-1.613 1.614-4.249 0-5.862L19.782 10.6l2.316-2.47c.54-.576.516-1.503-.054-2.049-.57-.546-1.493-.522-2.033.054L17.65 8.761 14.444 5.636a1.374 1.374 0 0 0-1.931-.013z" />
                                </svg>
                            ), 
                            href: "https://leetcode.com/u/Balu-parasa/",
                            hoverClass: "hover:text-[#FFA116] dark:hover:text-[#FFA116]",
                            shadowClass: "hover:shadow-[#FFA116]/40"
                        }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`group relative text-gray-500 dark:text-gray-400 ${social.hoverClass} hover:-translate-y-2 hover:scale-110 transition-all duration-300 p-3 bg-white/80 dark:bg-[#0a0a0acc] backdrop-blur-sm rounded-full shadow-sm border border-gray-100 dark:border-white/10 ${social.shadowClass} shadow-lg`}
                        >
                            {social.icon}
                            {/* Interactive Label Tooltip */}
                            <motion.span 
                                transition={{ duration: 0.2 }}
                                initial={{ opacity: 0, scale: 0.5, y: 10, x: "-50%" }}
                                whileHover={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                                className="absolute -top-12 left-1/2 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-bold uppercase tracking-wider rounded-lg opacity-0 pointer-events-none whitespace-nowrap shadow-xl border border-white/10 dark:border-gray-200 z-30"
                            >
                                {social.name}
                                {/* Tooltip Arrow */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-gray-900 dark:border-t-white" />
                            </motion.span>
                        </a>
                    ))}
                </motion.div>

                {/* Interactive Modern Scroll Indicator */}
                <motion.a
                    href="#projects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="flex flex-col items-center group cursor-pointer z-20 mb-8"
                >
                    <div className="w-8 h-14 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1.5 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors duration-300 bg-white/50 dark:bg-black/20 backdrop-blur-sm shadow-sm group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <motion.div
                            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                            className="w-1.5 h-3.5 bg-blue-600 dark:bg-blue-400 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)] dark:shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                        />
                    </div>
                    {/* Reveal Text on Hover */}
                    <div className="mt-2 text-center h-8 flex flex-col items-center justify-start opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 -translate-y-2">
                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] relative ml-1">
                            Explore
                        </span>
                        <motion.div animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                            <ArrowRight size={12} className="rotate-90 mt-0.5 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                    </div>
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
