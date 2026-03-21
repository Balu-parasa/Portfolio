import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Award, BookOpen } from 'lucide-react';

const Achievements = () => {
    // Generate dummy commit data for heatmap
    const generateHeatmapData = () => {
        const days = [];
        for (let i = 0; i < 7; i++) { // 7 days/rows
            const week = [];
            for (let j = 0; j < 30; j++) { // approx 30 cols
                // Randomly assign a commit density class
                const density = Math.random();
                let bgClass = "bg-gray-100 dark:bg-white/5";
                if (density > 0.8) bgClass = "bg-blue-600 dark:bg-blue-500";
                else if (density > 0.5) bgClass = "bg-blue-400 dark:bg-blue-600";
                else if (density > 0.2) bgClass = "bg-blue-200 dark:bg-blue-900";

                week.push(<div key={`${i}-${j}`} className={`w-3 h-3 rounded-[2px] ${bgClass} transition-all duration-300 hover:scale-125 hover:ring-2 ring-blue-300 dark:ring-blue-500/50`}></div>);
            }
            days.push(week);
        }
        return days;
    };

    return (
        <section id="achievements" className="py-24 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">Developer Metrics</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors">Performance dashboard and consistent activity tracking.</p>
                </motion.div>

                {/* Top Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { label: "Problems Solved", value: 320, suffix: "+", icon: <Code2 size={20} />, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
                        { label: "Highest Rank", value: 10, prefix: "Top ", icon: <Trophy size={20} />, color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
                        { label: "Major Projects", value: 2, suffix: "+", icon: <BookOpen size={20} />, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/20" },
                        { label: "Patents", value: 1, icon: <Award size={20} />, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 border border-gray-100 dark:border-white/10 shadow-sm flex flex-col items-center justify-center relative overflow-hidden group transition-colors duration-300"
                        >
                            <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full ${stat.bg} opacity-50 dark:opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                            <div className={`p-3 rounded-full ${stat.bg} ${stat.color} mb-3 relative z-10 transition-colors`}>
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 relative z-10 flex items-baseline transition-colors">
                                {stat.prefix}
                                {stat.value}
                                {stat.suffix}
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide relative z-10 text-center transition-colors">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LeetCode Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-100 dark:border-white/10 shadow-sm transition-colors duration-300"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors">LeetCode Progress</h3>
                            <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full transition-colors">Top 15%</span>
                        </div>

                        <div className="mb-8 flex justify-center">
                            <div className="relative w-40 h-40">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="80" cy="80" r="70" className="stroke-[#f3f4f6] dark:stroke-white/10 transition-colors duration-300" strokeWidth="12" fill="none" />
                                    <motion.circle
                                        cx="80" cy="80" r="70"
                                        stroke="#2563eb"
                                        strokeWidth="12"
                                        fill="none"
                                        strokeDasharray="440"
                                        initial={{ strokeDashoffset: 440 }}
                                        whileInView={{ strokeDashoffset: 440 - (440 * 0.6) }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                        strokeLinecap="round"
                                        className="dark:stroke-blue-500"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">320</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1 transition-colors">Solved</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { label: "Easy", solved: 150, total: 800, color: "bg-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
                                { label: "Medium", solved: 140, total: 1600, color: "bg-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
                                { label: "Hard", solved: 30, total: 700, color: "bg-red-500", bg: "bg-red-50 dark:bg-red-900/20" }
                            ].map((level, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors">{level.label}</span>
                                        <span className="text-gray-500 dark:text-gray-400 font-medium transition-colors"><span className="text-gray-900 dark:text-white">{level.solved}</span> / {level.total}</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden transition-colors duration-300">
                                        <motion.div
                                            className={`h-full ${level.color} rounded-full`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(level.solved / level.total) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: i * 0.2 }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Activity Heatmap & Highlight Cards */}
                    <div className="lg:col-span-2 flex flex-col gap-8">

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-100 dark:border-white/10 shadow-sm overflow-x-auto transition-colors duration-300"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors">Coding Activity</h3>
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">Last 7 months</span>
                            </div>
                            <div className="flex gap-1.5 min-w-max">
                                {generateHeatmapData().map((row, i) => (
                                    <div key={i} className="flex flex-col gap-1.5">
                                        {row}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex justify-end items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium transition-colors">
                                Less
                                <div className="w-3 h-3 bg-gray-100 dark:bg-white/5 rounded-sm transition-colors"></div>
                                <div className="w-3 h-3 bg-blue-200 dark:bg-blue-900 rounded-sm transition-colors"></div>
                                <div className="w-3 h-3 bg-blue-400 dark:bg-blue-600 rounded-sm transition-colors"></div>
                                <div className="w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-sm transition-colors"></div>
                                More
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 border border-gray-100 dark:border-white/10 shadow-sm hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all flex flex-col justify-center duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-colors">
                                        <Award size={20} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded transition-colors">2023</span>
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Top 5 - NLP Workshop</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Recognized for outstanding implementation of NLP models during the intensive workshop.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 border border-gray-100 dark:border-white/10 shadow-sm hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all flex flex-col justify-center duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center transition-colors">
                                        <Trophy size={20} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded transition-colors">2024</span>
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors">Top 10 - HackWithVertos</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Secured a top 10 position in the university-wide hackathon among 500+ participants.</p>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
