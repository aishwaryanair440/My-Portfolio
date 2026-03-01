import React from 'react';
import { ExternalLink, Github, ArrowLeft, MousePointer, Activity, Shield, BarChart3, Zap, Brain, AlertTriangle, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CursorAnxietyProjectProps {
    onBack: () => void;
}

const features = [
    {
        icon: MousePointer,
        title: 'Behavioral Tracking',
        description: 'We monitor cursor velocity, hesitation patterns, and rage-clicks to build a real-time stress profile while you navigate hostile UI.',
        color: 'bg-violet-100',
        iconColor: 'text-violet-600',
    },
    {
        icon: Activity,
        title: 'Biological Stress',
        description: 'Experience the physical toll of poor interface design — racing thoughts, decision fatigue, and the urge to close the tab.',
        color: 'bg-pink-100',
        iconColor: 'text-pink-600',
    },
    {
        icon: Shield,
        title: 'Hostile Patterns',
        description: '13 curated sections of intentional digital obstruction — each crafted to demonstrate a real dark pattern used on the modern web.',
        color: 'bg-red-100',
        iconColor: 'text-red-600',
    },
    {
        icon: BarChart3,
        title: 'Final Exposure',
        description: 'Receive a full cognitive analysis of your session — stress score, hesitation heat-map, and rage-click count at the end.',
        color: 'bg-cyan-100',
        iconColor: 'text-cyan-600',
    },
];

const techStack = ['React', 'TypeScript', 'Framer Motion', 'CSS Modules', 'Vercel'];

const darkPatterns = [
    'Roach Motel Subscriptions',
    'Confirmshaming CTAs',
    'Disguised Ads',
    'Forced Continuity',
    'Misdirection',
    'Hidden Costs',
    'Trick Questions',
    'Bait & Switch',
    'Privacy Zuckering',
    'Artificial Scarcity',
    'Activity Notification Spam',
    'Friend Spam',
    'Disguised Newsletter Opt-ins',
];

export function CursorAnxietyProject({ onBack }: CursorAnxietyProjectProps) {
    return (
        <div className="min-h-screen bg-[#FDF6E3] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Back Button */}
                <motion.button
                    onClick={onBack}
                    className="mb-8 px-5 py-2.5 bg-black text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 text-sm cursor-pointer"
                    whileHover={{
                        x: -2,
                        y: 2,
                        boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowLeft className="w-4 h-4" />
                    BACK TO PORTFOLIO
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Hero Card */}
                    <div className="bg-black text-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 mb-8">
                        <div className="flex items-start gap-4 mb-4">
                            <motion.span
                                className="text-5xl font-black text-violet-400"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                            >
                                04
                            </motion.span>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black mb-1 leading-tight">
                                    Cursor Anxiety Simulator
                                </h1>
                                <p className="text-lg font-medium text-gray-300">
                                    Interactive Dark Patterns Experience · React · TypeScript
                                </p>
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl">
                            An interactive deep-dive into the Dark Patterns that define the modern web. Navigate
                            13 hostile UI sections while your cursor behaviour is silently profiled — rage-clicks,
                            hesitation, velocity — and receive a full cognitive stress analysis at the end.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="https://cursor-anxiety-simulator.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-violet-500 text-white font-bold border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] inline-flex items-center gap-2 text-sm"
                                whileHover={{
                                    x: 2,
                                    y: 2,
                                    boxShadow: '2px 2px 0px 0px rgba(255,255,255,0.4)',
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink className="w-4 h-4" />
                                INITIALIZE PROTOCOL →
                            </motion.a>

                            <motion.a
                                href="https://github.com/aishwaryanair440/Cursor-anxiety-simulator-webapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-transparent text-white font-bold border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] inline-flex items-center gap-2 text-sm"
                                whileHover={{
                                    x: 2,
                                    y: 2,
                                    boxShadow: '2px 2px 0px 0px rgba(255,255,255,0.4)',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github className="w-4 h-4" />
                                VIEW ON GITHUB
                            </motion.a>
                        </div>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {features.map((feat, i) => (
                            <motion.div
                                key={feat.title}
                                className={`${feat.color} border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 * i + 0.3 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <feat.icon className={`w-7 h-7 ${feat.iconColor}`} />
                                    <h3 className="text-lg font-black">{feat.title}</h3>
                                </div>
                                <p className="text-sm font-medium text-gray-700 leading-relaxed">{feat.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Dark Patterns List */}
                    <motion.div
                        className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-7 h-7 text-red-600" />
                            <h2 className="text-2xl font-black">13 DARK PATTERNS EXPOSED</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {darkPatterns.map((pattern, i) => (
                                <motion.div
                                    key={pattern}
                                    className="bg-gray-900 text-white px-4 py-2.5 border-2 border-black font-bold text-sm flex items-center gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i + 0.6 }}
                                    whileHover={{ backgroundColor: '#7c3aed', borderColor: '#7c3aed' }}
                                >
                                    <span className="text-violet-400 font-black text-xs">{String(i + 1).padStart(2, '0')}</span>
                                    {pattern}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Project Details Row */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <motion.div
                            className="bg-violet-100 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Brain className="w-5 h-5 text-violet-600" />
                                <h4 className="text-base font-black">PURPOSE</h4>
                            </div>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Raise awareness of manipulative UI/UX dark patterns by putting users through them
                                live — so they recognise and resist them in the wild.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-pink-100 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Code2 className="w-5 h-5 text-pink-600" />
                                <h4 className="text-base font-black">TECH STACK</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((t) => (
                                    <span key={t} className="bg-white border-2 border-black px-2 py-1 text-xs font-bold">{t}</span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-red-100 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Zap className="w-5 h-5 text-red-600" />
                                <h4 className="text-base font-black">MY ROLE</h4>
                            </div>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Solo build — concept, design, dark-pattern research, full-stack implementation,
                                behavioural tracking logic, and deployment.
                            </p>
                        </motion.div>
                    </div>

                    {/* Final CTA Strip */}
                    <motion.div
                        className="bg-violet-600 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <div>
                            <p className="text-white font-black text-xl mb-1">Ready to be manipulated?</p>
                            <p className="text-violet-200 text-sm font-medium">Scientific Analysis in Progress…</p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <motion.a
                                href="https://cursor-anxiety-simulator.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white text-violet-700 font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 text-sm"
                                whileHover={{
                                    x: 2,
                                    y: 2,
                                    boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)',
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink className="w-4 h-4" />
                                INITIALIZE PROTOCOL
                            </motion.a>
                            <motion.a
                                href="https://github.com/aishwaryanair440/Cursor-anxiety-simulator-webapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-transparent text-white font-black border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] inline-flex items-center gap-2 text-sm"
                                whileHover={{
                                    x: 2,
                                    y: 2,
                                    boxShadow: '2px 2px 0px 0px rgba(255,255,255,0.4)',
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github className="w-4 h-4" />
                                GITHUB
                            </motion.a>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}
