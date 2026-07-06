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
        <section id="projects" className="relative overflow-hidden bg-[#f4f8ff] py-24 sm:py-28">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-14 flex flex-col gap-5 border-b border-sky-100 pb-8 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-2xl">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                                Selected work
                            </p>
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                                Personal Projects
                            </h2>
                            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                                A closer look at the products, systems, and interfaces I enjoy building.
                            </p>
                        </div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid gap-6 lg:grid-cols-2"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-[0_18px_50px_rgba(96,165,250,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-[0_24px_70px_rgba(96,165,250,0.16)] sm:p-8"
                            >
                                <div className="mb-10 flex items-start justify-between gap-4">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-100 text-lg font-bold tracking-wide text-sky-700 transition-colors duration-300 group-hover:bg-sky-200/70">
                                        {getProjectInitials(project.name)}
                                    </div>
                                    <span className="font-mono text-sm text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900">
                                        {project.name}
                                    </h3>
                                    <p className="max-w-lg text-base leading-7 text-slate-600">{project.description}</p>
                                </div>

        <div className="mt-auto pt-8">
            <div className="border-t border-sky-100 pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Built with
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => {
                        const TechIcon = techIcons[tech];
                        const iconColorClass = techIconColors[tech] ?? 'text-slate-600';

                        return (
                            <div
                                key={tech}
                                title={tech}
                                aria-label={tech}
                                className="flex items-center gap-2 rounded-md border border-sky-100 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700"
                            >
                                {TechIcon ? (
                                    <TechIcon className={`h-3.5 w-3.5 ${iconColorClass}`} />
                                ) : (
                                    <span className={`text-[9px] font-semibold ${iconColorClass}`}>
                                        {tech.slice(0, 2).toUpperCase()}
                                    </span>
                                )}
                                <span>{tech}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {(project.githubUrl || project.liveUrl) && (
                <div className="mt-7 flex gap-5">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-medium text-sky-700 transition-colors hover:text-sky-600"
                        >
                            GitHub
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-medium text-sky-700 transition-colors hover:text-sky-600"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            )}
        </div>
    </motion.div>
                        ))
}
                    </motion.div >
                </motion.div >
            </div >
        </section >
    );
}
