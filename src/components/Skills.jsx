import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "CORE LANGUAGES",
        gradient: "from-blue-500/10 to-transparent",
        skills: [
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
            
        ]
    },
    {
        category: "ARCHITECTURE & FRAMEWORKS",
        gradient: "from-indigo-500/10 to-transparent",
        skills: [
            { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
        ]
    },
    {
        category: "TOOLS & ECOSYSTEM",
        gradient: "from-purple-500/10 to-transparent",
        skills: [
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
            { name: "Visual Studio Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
            // { name: "Vercel", icon: "https://decodes.io/icons/vercel.svg" },
            // { name: "Render", icon: "https://www.vectorlogo.zone/logos/render/render-icon.svg" }
        ]
    }
];

// All skills for the horizontal scroll strip
const allScrollSkills = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
];

// Duplicated list for seamless loop
const duplicatedScrollSkills = [...allScrollSkills, ...allScrollSkills];

// Single skill card for the horizontal strip
const ScrollSkillCard = ({ skill }) => (
    <div className="group flex flex-col items-center justify-center w-[140px] h-[100px] mx-[10px] rounded-2xl flex-shrink-0
        bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm
        border border-gray-100 dark:border-white/10
        shadow-md
        transform transition-all duration-300 hover:scale-105 hover:border-blue-500/40 hover:shadow-blue-500/20
        cursor-default">
        <div className="w-11 h-11 flex items-center justify-center bg-gray-50 dark:bg-[#151515] rounded-xl mb-2
            group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30 transition-colors duration-300">
            <img
                src={skill.icon}
                alt={skill.name}
                className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
                }}
            />
        </div>
        <p className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-center px-2 leading-tight">
            {skill.name}
        </p>
    </div>
);

// Horizontal infinite scroll marquee
const HorizontalScrollStrip = () => (
    <div className="relative w-full overflow-hidden py-2">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none
            bg-gradient-to-r from-white dark:from-[#030303] to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none
            bg-gradient-to-l from-white dark:from-[#030303] to-transparent" />

        <div className="flex w-fit" style={{ animation: 'scrollLeft 30s linear infinite' }}>
            {duplicatedScrollSkills.map((skill, idx) => (
                <ScrollSkillCard key={idx} skill={skill} />
            ))}
        </div>
    </div>
);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const TiltCard = ({ group }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        const x = e.clientX - box.left;
        const y = e.clientY - box.top;
        const centerX = box.width / 2;
        const centerY = box.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            style={{ perspective: 1000 }}
            variants={itemVariants}
            className="h-full"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ rotateX, rotateY, scale: rotateX !== 0 ? 1.01 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative h-full p-6 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/10 shadow-xl dark:shadow-2xl transition-all duration-300 group overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Subtle gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                <div className="relative z-10 flex flex-col h-full">
                    {/* Aligned Category Title (Blue theme) */}
                    <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-8 tracking-[0.2em] transition-colors uppercase border-b border-gray-100 dark:border-white/5 pb-3">
                        {group.category}
                    </h3>

                    <div className="grid grid-cols-4 gap-y-10 gap-x-4">
                        {group.skills.map((skill, sIndex) => (
                            <div
                                key={sIndex}
                                className="flex flex-col items-center group/skill"
                            >
                                {/* Glowing Box for Icon */}
                                <div className="w-14 h-14 flex items-center justify-center bg-gray-50 dark:bg-[#151515] border border-gray-100 dark:border-white/5 rounded-2xl mb-3 group-hover/skill:border-blue-500/50 group-hover/skill:bg-white dark:group-hover/skill:bg-[#1a1a1a] transition-all duration-300 shadow-sm group-hover/skill:shadow-blue-500/20 group-hover/skill:-translate-y-1">
                                    <img 
                                        src={skill.icon} 
                                        alt={skill.name} 
                                        className="w-7 h-7 object-contain group-hover/skill:scale-110 transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
                                        }}
                                    />
                                </div>
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors text-center truncate w-full px-1">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-white dark:bg-[#030303] transition-colors duration-300">
            {/* Background Decorative Elements - Aligned with Hero */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Keyframe animations */}
            <style>{`
                @keyframes scrollLeft {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">Technical Skills</h2>
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
                        <div className="w-4 h-4 border-[3px] border-blue-600 rounded-full"></div>
                        <div className="w-24 h-1.5 bg-gradient-to-l from-blue-600 to-transparent rounded-full"></div>
                    </div>

                    {/* <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg transition-colors">Proficiency in libraries and tools.</p> */}
                </motion.div>

                {/* ── Main Skills Grid ── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillsData.map((group, index) => (
                        <TiltCard key={index} group={group} />
                    ))}
                </motion.div>

                {/* ── Infinite Horizontal Scroll Strip ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-20"
                >
                    {/* Section label */}
                    <div className="flex items-center gap-4 mb-8 justify-center">
                        <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-blue-600/40"></div>
                        <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400">
                            All Technologies
                        </span>
                        <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-blue-600/40"></div>
                    </div>

                    <HorizontalScrollStrip />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

