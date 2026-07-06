import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { FaAws, FaChartLine } from 'react-icons/fa';
import {
    SiExpo,
    SiExpress,
    SiFirebase,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiRedux,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs,
} from 'react-icons/si';
import { projects } from '../data/projects';

const techIcons: Record<string, IconType> = {
    'Amazon S3': FaAws,
    'AWS S3': FaAws,
    'D3.js': FaChartLine,
    Expo: SiExpo,
    Express: SiExpress,
    Firebase: SiFirebase,
    'Next.js': SiNextdotjs,
    'Node.js': SiNodedotjs,
    PostgreSQL: SiPostgresql,
    React: SiReact,
    'React Native': SiReact,
    Redis: SiRedis,
    Redux: SiRedux,
    Stripe: SiStripe,
    'Tailwind CSS': SiTailwindcss,
    TypeScript: SiTypescript,
    Vue: SiVuedotjs,
};

const techIconColors: Record<string, string> = {
    'Amazon S3': 'text-[#FF9900]',
    'AWS S3': 'text-[#FF9900]',
    'D3.js': 'text-[#F97316]',
    Expo: 'text-stone-100',
    Express: 'text-stone-200',
    Firebase: 'text-[#F59E0B]',
    'Next.js': 'text-stone-100',
    'Node.js': 'text-[#3C873A]',
    PostgreSQL: 'text-[#336791]',
    React: 'text-[#61DAFB]',
    'React Native': 'text-[#61DAFB]',
    Redis: 'text-[#DC382D]',
    Redux: 'text-[#764ABC]',
    Stripe: 'text-[#635BFF]',
    'Tailwind CSS': 'text-[#06B6D4]',
    TypeScript: 'text-[#3178C6]',
    Vue: 'text-[#42B883]',
};

const getProjectInitials = (name: string) => {
    const words = name
        .split(/\s|-/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? '');

    return words.join('') || 'PR';
};

export default function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="projects" className="bg-neutral-950 py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-12 text-4xl font-bold text-stone-100 md:text-5xl">Personal Projects</h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="rounded-xl border border-zinc-700 bg-zinc-800 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-zinc-700 to-blue-700 text-sm font-bold tracking-wide text-stone-100">
                                        {getProjectInitials(project.name)}
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold text-stone-100">{project.name}</h3>
                                        <p className="line-clamp-3 text-stone-300">{project.description}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    {project.techStack.map((tech) => {
                                        const TechIcon = techIcons[tech];
                                        const iconColorClass = techIconColors[tech] ?? 'text-stone-300';

                                        return (
                                            <div
                                                key={tech}
                                                title={tech}
                                                aria-label={tech}
                                                className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-600 bg-zinc-700"
                                            >
                                                {TechIcon ? (
                                                    <TechIcon className={`w-5 h-5 ${iconColorClass}`} />
                                                ) : (
                                                    <span className={`text-[10px] font-semibold ${iconColorClass}`}>
                                                        {tech.slice(0, 2).toUpperCase()}
                                                    </span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {(project.githubUrl || project.liveUrl) && (
                                    <div className="flex justify-end gap-5 pt-1">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center font-medium text-blue-300 hover:text-blue-200"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center font-medium text-blue-300 hover:text-blue-200"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
