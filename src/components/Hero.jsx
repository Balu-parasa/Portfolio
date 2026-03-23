import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Download, Sparkles } from 'lucide-react';
import balu_professional from '../assets/balu_professional.png';
import resume from '../assets/Updated CV.pdf';

const Hero = () => {
    // Tilt effect state
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="home" className="min-h-screen relative overflow-hidden bg-white dark:bg-[#030303] flex items-center justify-center pt-20 transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                {/* Left Side: Content */}
                <div className="flex flex-col gap-8 lg:order-1">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 transition-colors">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Balu Lakshman Pavan</span>
                        </h1>

                        <div className="h-10 md:h-12 flex justify-center lg:justify-start items-center">
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

                        <p className="max-w-xl lg:mx-0 mx-auto mt-6 text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed transition-colors">
                            I craft modern, scalable, and highly interactive web applications with beautifully designed user experiences.
                        </p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0 md:max-w-none"
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
                    </motion.div>
                </div>

                {/* Right Side: Photo with interactive container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center lg:justify-end lg:order-2"
                >
                    {/* Main Photo Container with Tilt */}
                    <div 
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] group perspective-1000"
                    >
                        {/* Glow and Decorative Borders */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 animate-[spin_20s_linear_infinite] pointer-events-none"></div>
                        
                        {/* Interactive Main Frame */}
                        <motion.div 
                            style={{ 
                                rotateX, 
                                rotateY,
                                transformStyle: "preserve-3d" 
                            }}
                            className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-blue-500/20 to-transparent backdrop-blur-sm border border-white/20 dark:border-white/10 overflow-hidden shadow-2xl"
                        >
                            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0a] border-4 border-white/50 dark:border-white/5">
                                <img
                                    src={balu_professional}
                                    alt="Balu Lakshman Pavan"
                                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Tech Stacks Orbs (Simplified & Interactive) */}
                    <div className="absolute -z-10 w-full h-full top-0 left-0 pointer-events-none">
                        {[0, 1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    x: [0, i % 2 === 0 ? 10 : -10, 0]
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className={`absolute w-3 h-3 rounded-full bg-blue-500 opacity-20 blur-sm`}
                                style={{
                                    top: `${20 + i * 20}%`,
                                    left: i % 2 === 0 ? '-10%' : '110%'
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Interactive Modern Scroll Indicator */}
                <div className="absolute top-115 bottom-0 left-0 right-0 hidden lg:flex flex-col items-center justify-center w-full pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="pointer-events-auto"
                    >
                        <a
                            href="#about"
                            className="flex flex-col items-center group cursor-pointer"
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
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
