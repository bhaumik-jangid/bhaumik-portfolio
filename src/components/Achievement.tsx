import { motion } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Award, Trophy, Star, Sparkles, Code, Cloud, Users } from "lucide-react";

interface AchievementItem {
    year: string;
    title: string;
    organization: string;
    description: string;
    icon?: "code" | "cloud" | "users";
}

const achievements: AchievementItem[] = [
    {
        year: "2025",
        title: "Algorithmic Problem Solving",
        organization: "LeetCode, Codeforces, GeeksforGeeks",
        description: "Solved 300+ algorithmic problems across multiple competitive programming platforms, strengthening data structures and problem-solving skills.",
        icon: "code",
    },
    {
        year: "2025",
        title: "Google Cloud Arcade Achievement",
        organization: "Google Cloud Arcade",
        description: "Secured Premium Milestone recognition by completing advanced cloud challenges and hands-on labs.",
        icon: "cloud",
    },
    {
        year: "2025",
        title: "Social Media Manager",
        organization: "The Talk Tribe Club, LPU",
        description: "Managed and grew the club's social media presence through content strategy, engagement, and campaign execution.",
        icon: "users",
    },
];

const getIcon = (type?: string) => {
    switch (type) {
        case "code":
            return <Code size={24} />;
        case "cloud":
            return <Cloud size={24} />;
        case "users":
            return <Users size={24} />;
        case "trophy":
            return <Trophy size={24} />;
        case "award":
            return <Award size={24} />;
        case "star":
            return <Star size={24} />;
        default:
            return <Award size={24} />;
    }
};

export default function Achievement() {
    return (
        <section className="w-full py-20 px-6 md:px-16 bg-white dark:bg-black relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header - Matching "My Skills" Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        My{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Achievements
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2"
                    >
                        <Sparkles size={20} className="text-blue-400" />
                        Recognition and milestones that showcase my journey.
                    </motion.p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-8"
                >
                    <Timeline position="alternate">
                        {achievements.map((achievement, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: index * 0.15, duration: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <TimelineDot
                                            sx={{
                                                background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
                                                boxShadow: "0 0 30px rgba(96, 165, 250, 0.6), 0 0 60px rgba(167, 139, 250, 0.3)",
                                                width: 60,
                                                height: 60,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "white",
                                                fontSize: 24,
                                            }}
                                        >
                                            {getIcon(achievement.icon)}
                                        </TimelineDot>
                                    </motion.div>
                                    {index < achievements.length - 1 && (
                                        <TimelineConnector
                                            sx={{
                                                background: "linear-gradient(180deg, #60a5fa 0%, #a78bfa 100%)",
                                                width: 4,
                                                boxShadow: "0 0 15px rgba(96, 165, 250, 0.4)",
                                            }}
                                        />
                                    )}
                                </TimelineSeparator>

                                <TimelineContent>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.15, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="p-6 rounded-xl backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30 
                                   bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                                   dark:from-blue-950/20 dark:to-purple-950/20
                                   hover:shadow-lg hover:border-blue-300/50 dark:hover:border-purple-500/50
                                   transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-4 py-1.5 text-white text-sm font-semibold rounded-full">
                                                {achievement.year}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {achievement.title}
                                        </h3>

                                        <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
                                            {achievement.organization}
                                        </p>

                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                                            {achievement.description}
                                        </p>
                                    </motion.div>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </motion.div>
            </div>
        </section>
    );
}