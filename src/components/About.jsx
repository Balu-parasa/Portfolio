import React from 'react';
import { motion } from 'framer-motion';
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
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg transition-colors">A brief introduction to my journey and passion.</p>
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
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
