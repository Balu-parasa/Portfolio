import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import balu_professional from '../assets/balu_professional.png';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#030303] transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">About Me</h2>
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-18 h-1.5 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
                        <div className="w-4 h-4 border-[3px] border-blue-600 rounded-full"></div>
                        <div className="w-18 h-1.5 bg-gradient-to-l from-blue-600 to-transparent rounded-full"></div>
                    </div>

                    {/* <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg transition-colors">A brief introduction to my journey and passion.</p> */}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Photo Box */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative flex justify-center items-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative w-full max-w-[300px] group p-4 sm:p-0"
                        >
                            {/* Main image container with subtle glow */}
                            <div className="relative bg-white dark:bg-[#0a0a0a] p-2 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-lg group-hover:shadow-blue-500/10 overflow-hidden aspect-square sm:aspect-[4/5] z-10 transition-all duration-500">
                                <img
                                    src={balu_professional}
                                    alt="Balu Lakshman Pavan"
                                    className="w-full h-full object-cover object-top rounded-[1.8rem] filter hover:brightness-105 transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Bio Section */}
                    <div className="lg:col-span-7 h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6 p-8 bg-blue-50/50 dark:bg-white/5 rounded-2xl border border-blue-100/50 dark:border-white/10 shadow-sm transition-colors duration-300 h-full flex flex-col justify-center"
                        >
                            <p>
                                Passionate <span className="text-gray-900 dark:text-white font-semibold">full-stack developer</span> with strong skills in modern web technologies and problem-solving.
                                Experienced in building scalable applications, dashboards, and API-driven systems.
                            </p>
                            <p>
                                I thrive on challenges and continuously seek opportunities to optimize performance and elevate user experiences.
                                Whether it's designing clean architecture on the backend or developing intuitive user interfaces,
                                I bring a comprehensive approach to software development.
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                {[
                                    { 
                                        name: 'GitHub', 
                                        icon: <Github size={20} />, 
                                        href: 'https://github.com/Balu-parasa',
                                        color: 'hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black'
                                    },
                                    { 
                                        name: 'LinkedIn', 
                                        icon: <Linkedin size={20} />, 
                                        href: 'https://www.linkedin.com/in/balu-parasa',
                                        color: 'hover:bg-[#0077b5] hover:text-white'
                                    },
                                    { 
                                        name: 'LeetCode', 
                                        icon: (
                                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.323 4.32a1.09 1.09 0 0 0 0 1.556 1.09 1.09 0 0 0 1.556 0l4.323-4.32A1.09 1.09 0 0 0 13.483 0zm-6.705 3.39a1.374 1.374 0 0 0-1.374 1.374v11.232c0 .759.615 1.375 1.375 1.375h11.232c.759 0 1.375-.616 1.375-1.375V4.764a1.375 1.375 0 0 0-1.375-1.374H6.778zM9.144 5.638h5.712c.427 0 .774.347.774.774v5.712a.774.774 0 0 1-.774.774H9.144a.774.774 0 0 1-.774-.774V6.412c0-.427.347-.774.774-.774z"/>
                                            </svg>
                                        ), 
                                        href: 'https://leetcode.com/u/balu_parasa/',
                                        color: 'hover:bg-[#FFA116] hover:text-white'
                                    }
                                ].map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        whileHover={{ y: -3 }}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-600 dark:text-gray-400 font-medium transition-all duration-300 shadow-sm ${social.color}`}
                                    >
                                        {social.icon}
                                        <span className="text-sm">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
