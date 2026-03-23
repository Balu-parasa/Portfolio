import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            title: "Top 3 — NLP Workshop",
            desc: "Ranked in the Top 3 teams in an NLP Workshop for building an innovative Text-to-Speech system.",
            status: "ONGOING",
            icon: <Award className="w-5 h-5 text-blue-500" />
        },
        {
            title: "Research Incentive",
            desc: "Received research incentive for university approved patent: 'SMART BLIND SHOE WITH INTEGRATED HAND BAND USING ARDUINO'.",
            status: "MARCH 2024",
            icon: <Award className="w-5 h-5 text-blue-500" />
        },
        {
            title: "Top 10 Teams - Hackathon",
            desc: "Secured a position in the Top 10 teams (out of 50+) in HackWithVertos 1.0, a 24-Hour Hackathon.",
            status: "FEBRUARY 2024",
            icon: <Trophy className="w-5 h-5 text-blue-500" />
        }
    ];

    return (
        <section id="achievements" className="py-24 relative overflow-hidden bg-white dark:bg-[#030303] transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Achievements</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">Recognized milestones and technical impact.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white dark:bg-[#0a0a0a] p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 hover:border-blue-100 dark:hover:border-white/10 shadow-sm dark:shadow-none transition-all duration-500 overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-8 flex-grow">
                                    {item.desc}
                                </p>
                                <div className="text-[10px] font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mt-auto">
                                    {item.status}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
