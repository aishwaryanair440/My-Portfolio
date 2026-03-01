import { ExternalLink, Github, ArrowLeft, Flame, Database, ShieldCheck, Clock, Users, BarChart2, Leaf, Zap, Code2, Layout, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectCarousel } from '../components/ProjectCarousel';
import freshRushDashboard from 'figma:asset/freshrush_dashboard.png';
import freshRushProfile from 'figma:asset/freshrush_profile.png';

interface FreshRushProjectProps {
    onBack: () => void;
}

const features = [
    {
        icon: Flame,
        title: 'Fully Functional Backend',
        description: 'Firebase Auth (Email + Google), Firestore real-time DB, secure user profiles, auto-seeding of sample buyers. Every button works — zero dummy data.',
        color: 'bg-orange-100',
        iconColor: 'text-orange-600',
    },
    {
        icon: Clock,
        title: 'Live Decay Countdown',
        description: 'Real-time HH:MM:SS timers for every produce item. Priority Pulse Stack auto-sorts by urgency: Cancelled → Expiring → Fresh.',
        color: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
    },
    {
        icon: Users,
        title: 'Smart Buyer Discovery',
        description: 'Distance-based buyer matching with instant pickup badges. Intervention alerts with auto-dismiss for critical stock.',
        color: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        icon: Layout,
        title: 'Material Design 3 UI',
        description: '5-level elevation depth hierarchy, state layers, semantic color tokens, and premium glassmorphism with smooth Framer Motion animations.',
        color: 'bg-purple-100',
        iconColor: 'text-purple-600',
    },
];

const frontendStack = ['React 19', 'Vite', 'Framer Motion', 'Lucide React', 'date-fns'];
const backendStack = ['Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Firebase Analytics'];
const designStack = ['Material Design 3', 'Glassmorphism', 'CSS Variables', 'Custom Animations'];

const functionalFeatures = [
    { name: 'Sign Up', desc: 'Email/password registration' },
    { name: 'Sign In', desc: 'Email + Google OAuth' },
    { name: 'Add Produce', desc: 'Saves to Firestore, live sync' },
    { name: 'Cancel Order', desc: 'Updates status in database' },
    { name: 'Accept Offer', desc: 'Buyer offer acceptance' },
    { name: 'Real-time Updates', desc: 'Live data synchronization' },
    { name: 'Priority Sorting', desc: 'Cancelled items float to top' },
    { name: 'Buyer Matching', desc: 'Auto-loaded from Firestore' },
];

export function FreshRushProject({ onBack }: FreshRushProjectProps) {
    const carouselImages = [freshRushDashboard, freshRushProfile];

    return (
        <div className="min-h-screen bg-[#FDF6E3] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Back Button */}
                <motion.button
                    onClick={onBack}
                    className="mb-8 px-5 py-2.5 bg-black text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 text-sm cursor-pointer"
                    whileHover={{ x: -2, y: 2, boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)' }}
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
                    <div className="bg-emerald-50 text-black border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 mb-8">
                        <div className="flex items-start gap-4 mb-4">
                            <motion.span
                                className="text-5xl font-black text-emerald-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                            >
                                05
                            </motion.span>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <Leaf className="w-7 h-7 text-emerald-600" />
                                    <h1 className="text-3xl md:text-4xl font-black leading-tight text-black">
                                        FreshRush
                                    </h1>
                                </div>
                                <p className="text-lg font-medium text-gray-800">
                                    Agritech Supply-Chain Urgency System · React · Firebase
                                </p>
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6 max-w-3xl">
                            Real-time produce decay monitoring and buyer matching platform built for farmers to
                            mitigate losses from buyer cancellations. Fully functional with Firebase backend,
                            live countdowns, and Material Design 3 glassmorphism UI.
                        </p>

                        {/* Project Screenshots Carousel */}
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <ProjectCarousel images={carouselImages} />
                        </motion.div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="https://fresh-rush.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-emerald-600 text-white font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 text-sm"
                                whileHover={{ x: 2, y: 2, boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink className="w-4 h-4" />
                                LIVE DEMO →
                            </motion.a>
                            <motion.a
                                href="https://github.com/aishwaryanair440/fresh-rush"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white text-black font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 text-sm"
                                whileHover={{ x: 2, y: 2, boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)', backgroundColor: '#f9fafb' }}
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
                                    <h3 className="text-lg font-black text-black">{feat.title}</h3>
                                </div>
                                <p className="text-sm font-medium text-gray-800 leading-relaxed">{feat.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Functional Features Grid */}
                    <motion.div
                        className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Star className="w-7 h-7 text-emerald-600" />
                            <h2 className="text-2xl font-black text-black">100% FUNCTIONAL FEATURES</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                            {functionalFeatures.map((f, i) => (
                                <motion.div
                                    key={f.name}
                                    className="border-2 border-black p-3 bg-emerald-50"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * i + 0.6 }}
                                    whileHover={{ backgroundColor: '#d1fae5' }}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-emerald-600 font-black text-xs">✅</span>
                                        <span className="font-black text-sm text-black">{f.name}</span>
                                    </div>
                                    <p className="text-xs text-gray-700 font-medium">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Frontend */}
                        <motion.div
                            className="bg-blue-100 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Code2 className="w-5 h-5 text-blue-600" />
                                <h4 className="text-base font-black text-black">FRONTEND</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {frontendStack.map((t) => (
                                    <span key={t} className="bg-white border-2 border-black px-2 py-1 text-xs font-bold">{t}</span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Backend */}
                        <motion.div
                            className="bg-orange-100 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Database className="w-5 h-5 text-orange-600" />
                                <h4 className="text-base font-black text-black">BACKEND</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {backendStack.map((t) => (
                                    <span key={t} className="bg-white border-2 border-black px-2 py-1 text-xs font-bold">{t}</span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Design */}
                        <motion.div
                            className="bg-purple-100 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <BarChart2 className="w-5 h-5 text-purple-600" />
                                <h4 className="text-base font-black text-black">DESIGN</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {designStack.map((t) => (
                                    <span key={t} className="bg-white border-2 border-black px-2 py-1 text-xs font-bold">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Security + My Role */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <motion.div
                            className="bg-emerald-100 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.85 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                                <h4 className="text-base font-black text-black">SECURITY</h4>
                            </div>
                            <ul className="space-y-2 text-sm font-medium text-gray-800">
                                <li className="flex items-center gap-2"><span className="text-emerald-700 font-bold">→</span> User-specific data queries</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-700 font-bold">→</span> Firebase Authentication</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-700 font-bold">→</span> Firestore security rules</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-700 font-bold">→</span> No exposed credentials</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-700 font-bold">→</span> Secure password hashing</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="bg-emerald-50 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Zap className="w-5 h-5 text-emerald-600" />
                                <h4 className="text-base font-black">MY ROLE</h4>
                            </div>
                            <p className="text-sm font-medium text-gray-800 leading-relaxed">
                                Solo full-stack build — concept, Firebase architecture, real-time Firestore
                                integration, Material Design 3 UI system, glassmorphism, Framer Motion
                                animations, buyer matching algorithm, and production deployment on Vercel.
                            </p>
                        </motion.div>
                    </div>


                </motion.div>
            </div>
        </div>
    );
}
