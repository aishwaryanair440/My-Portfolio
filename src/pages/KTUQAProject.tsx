import React from 'react';
import { ExternalLink, ArrowLeft, AlertTriangle, CheckCircle, Gauge, Eye, Shield, Search, FileText, Zap, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

interface KTUQAProjectProps {
    onBack: () => void;
}

const auditCategories = [
    {
        icon: Gauge,
        label: 'Performance',
        color: 'bg-red-100',
        iconColor: 'text-red-600',
        issues: ['High LCP (Largest Contentful Paint)', 'Render-blocking resources', 'Unoptimized images', 'Excessive layout shifts (CLS)'],
    },
    {
        icon: Eye,
        label: 'Accessibility',
        color: 'bg-orange-100',
        iconColor: 'text-orange-600',
        issues: ['Missing alt attributes on images', 'Low contrast text elements', 'Missing ARIA labels', 'Keyboard navigation gaps'],
    },
    {
        icon: Shield,
        label: 'Best Practices',
        color: 'bg-yellow-100',
        iconColor: 'text-yellow-500',
        issues: ['Outdated JS libraries', 'Mixed content warnings', 'Missing Content-Security-Policy', 'Deprecated APIs usage'],
    },
    {
        icon: Search,
        label: 'SEO',
        color: 'bg-blue-100',
        iconColor: 'text-blue-600',
        issues: ['Missing meta descriptions', 'Small tap targets on mobile', 'Non-descriptive link text', 'Missing structured data'],
    },
];

const recommendations = [
    { title: 'Compress & Lazy-load Images', detail: 'Convert to WebP format, add width/height attributes to eliminate CLS.' },
    { title: 'Eliminate Render-Blocking Resources', detail: 'Defer non-critical JS, inline critical CSS above the fold.' },
    { title: 'Improve Colour Contrast', detail: 'Ensure all text meets WCAG AA 4.5:1 contrast ratio minimum.' },
    { title: 'Add Descriptive Alt Text', detail: 'Every informational image needs meaningful alt attributes.' },
    { title: 'Update Dependencies', detail: 'Upgrade deprecated JS libraries to remove known security vulnerabilities.' },
    { title: 'Implement Meta Descriptions', detail: 'Every page should have a unique, relevant meta description tag.' },
];

const tools = ['Google Lighthouse', 'Chrome DevTools', 'WAVE Accessibility', 'PageSpeed Insights'];

export function KTUQAProject({ onBack }: KTUQAProjectProps) {
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
                    <div className="bg-slate-900 text-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 mb-8">
                        <div className="flex items-start gap-4 mb-4">
                            <motion.span
                                className="text-5xl font-black text-blue-400"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                            >
                                06
                            </motion.span>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <Monitor className="w-7 h-7 text-blue-400" />
                                    <h1 className="text-3xl md:text-4xl font-black leading-tight">
                                        KTU Website QA Audit
                                    </h1>
                                </div>
                                <p className="text-lg font-medium text-slate-300">
                                    Quality Assurance · Lighthouse · Accessibility · Performance
                                </p>
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
                            A comprehensive non-functional quality assurance audit of the official KTU
                            (Kerala Technological University) website using Lighthouse. Testing covered
                            performance, accessibility, best practices, and SEO — with detailed findings
                            and actionable recommendations.
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="https://www.pdffiller.com/s/gWTEv-8C"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-500 text-white font-black border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] inline-flex items-center gap-2 text-sm"
                                whileHover={{ x: 2, y: 2, boxShadow: '2px 2px 0px 0px rgba(255,255,255,0.3)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FileText className="w-4 h-4" />
                                VIEW FULL REPORT →
                            </motion.a>
                        </div>
                    </div>

                    {/* What Was Tested */}
                    <motion.div
                        className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-7 h-7 text-slate-700" />
                            <h2 className="text-2xl font-black">WHAT WAS AUDITED</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                            <div className="bg-slate-50 border-2 border-black p-4">
                                <h4 className="font-black text-sm mb-2">TARGET</h4>
                                <p className="text-sm font-medium text-gray-700">Official KTU (Kerala Technological University) website</p>
                            </div>
                            <div className="bg-slate-50 border-2 border-black p-4">
                                <h4 className="font-black text-sm mb-2">METHOD</h4>
                                <p className="text-sm font-medium text-gray-700">Non-functional QA audit using Google Lighthouse + manual accessibility checks</p>
                            </div>
                            <div className="bg-slate-50 border-2 border-black p-4">
                                <h4 className="font-black text-sm mb-2">SCOPE</h4>
                                <p className="text-sm font-medium text-gray-700">Performance, Accessibility, Best Practices, and SEO across key pages</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Audit Categories */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {auditCategories.map((cat, i) => (
                            <motion.div
                                key={cat.label}
                                className={`${cat.color} border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 * i + 0.4 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
                                    <h3 className="text-lg font-black">{cat.label}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {cat.issues.map((issue) => (
                                        <li key={issue} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                            {issue}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Recommendations */}
                    <motion.div
                        className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.65 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-7 h-7 text-green-600" />
                            <h2 className="text-2xl font-black">RECOMMENDATIONS</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {recommendations.map((r, i) => (
                                <motion.div
                                    key={r.title}
                                    className="bg-green-50 border-2 border-black p-4"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.07 * i + 0.7 }}
                                    whileHover={{ backgroundColor: '#d1fae5' }}
                                >
                                    <div className="flex items-start gap-2 mb-1">
                                        <span className="bg-black text-white px-1.5 py-0.5 text-xs font-black flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                        <h5 className="font-black text-sm">{r.title}</h5>
                                    </div>
                                    <p className="text-xs text-gray-600 font-medium ml-8">{r.detail}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tools + Role */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <motion.div
                            className="bg-blue-100 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.85 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Zap className="w-5 h-5 text-blue-600" />
                                <h4 className="text-base font-black">TOOLS USED</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((t) => (
                                    <span key={t} className="bg-white border-2 border-black px-3 py-1.5 text-sm font-bold">{t}</span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-slate-100 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Monitor className="w-5 h-5 text-slate-700" />
                                <h4 className="text-base font-black">MY ROLE</h4>
                            </div>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed">
                                Solo QA analyst — ran Lighthouse audits across multiple pages, manually
                                verified accessibility findings, documented all issues with evidence
                                screenshots, and compiled a structured PDF report with prioritised
                                recommendations for the development team.
                            </p>
                        </motion.div>
                    </div>

                    {/* Final CTA Strip */}
                    <motion.div
                        className="bg-slate-800 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                    >
                        <div>
                            <p className="text-white font-black text-xl mb-1">Read the Full Audit Report</p>
                            <p className="text-slate-400 text-sm font-medium">Detailed findings, scores, and actionable improvements</p>
                        </div>
                        <motion.a
                            href="https://www.pdffiller.com/s/gWTEv-8C"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-500 text-white font-black border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] inline-flex items-center gap-2 text-sm flex-shrink-0"
                            whileHover={{ x: 2, y: 2, boxShadow: '2px 2px 0px 0px rgba(255,255,255,0.3)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FileText className="w-4 h-4" />
                            VIEW REPORT PDF
                        </motion.a>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}
