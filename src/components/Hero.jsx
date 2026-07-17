import { useState } from 'react';
import { supabase } from '../lib/supabase';
import Toast from './Toast';

const WAITLIST_TABLE = 'Landing Page - Waitlist';

const Hero = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const getUtmParams = () => {
        const params = new URLSearchParams(window.location.search);
        return {
            utm_source: params.get('utm_source') || null,
            utm_medium: params.get('utm_medium') || null,
            utm_campaign: params.get('utm_campaign') || null,
        };
    };

    const getDeviceType = () => {
        const width = window.innerWidth || 0;
        if (width < 768) return 'mobile';
        if (width < 1024) return 'tablet';
        return 'desktop';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLoading) {
            return;
        }

        const normalizedEmail = email.trim().toLowerCase();

        if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
            setMessage({ type: 'error', text: 'Please enter a valid email.' });
            return;
        }

        setIsLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const utmParams = getUtmParams();
            const payload = {
                email: normalizedEmail,
                Source: 'landing_page',
                utm_source: utmParams.utm_source,
                utm_medium: utmParams.utm_medium,
                utm_campaign: utmParams.utm_campaign,
                referrer: document.referrer || null,
                user_agent: navigator.userAgent || null,
                browser_language: navigator.language || null,
                screen_width: window.innerWidth || 0,
                screen_height: window.innerHeight || 0,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
                device_type: getDeviceType(),
                marketing_consent: true,
            };

            const { error, status } = await supabase
                .from(WAITLIST_TABLE)
                .insert([payload]);

            if (import.meta.env.DEV) {
                console.log('Supabase waitlist table:', WAITLIST_TABLE);
                console.log('Supabase waitlist response:', { status, errorCode: error?.code || null });
            }

            if (!error) {
                setMessage({ type: 'success', text: 'Welcome to the club! 🚀' });
                setEmail('');
            } else if (error.code === '23505') {
                // TODO: This duplicate path depends on a unique constraint for email in Supabase.
                setMessage({ type: 'success', text: 'This email is already on the waitlist!' });
                setEmail('');
            } else {
                setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
            }
        } catch {
            setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    // Handle dashboard button clicks
    const handleDashboardClick = (action) => {
        setToastMessage(`Demo Mode: ${action}`);
        setShowToast(true);
    };

    return (
        <section className="relative min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Toast Notification */}
            <Toast
                message={toastMessage}
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />

            {/* Massive Aurora Glow Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Main purple glow */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] animate-aurora"
                    style={{
                        background: 'radial-gradient(ellipse 50% 40% at 50% 20%, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                {/* Secondary cyan glow */}
                <div
                    className="absolute top-40 left-1/4 w-[600px] h-[600px] animate-aurora opacity-50"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 60%)',
                        filter: 'blur(80px)',
                        animationDelay: '-5s',
                    }}
                />
                {/* Accent glow right */}
                <div
                    className="absolute top-60 right-1/4 w-[500px] h-[500px] animate-aurora opacity-40"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 60%)',
                        filter: 'blur(80px)',
                        animationDelay: '-10s',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Center-Aligned Text Content */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm text-sm text-gray-600 dark:text-white/60 mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span>Now in Private Beta</span>
                        <span className="text-gray-400 dark:text-white/30">•</span>
                        <span>Limited Access</span>
                    </div>

                    {/* Massive Headline with Fluid Typography */}
                    <h1
                        className="font-bold leading-[1.1] tracking-tight mb-6 sm:mb-8"
                        style={{ fontSize: 'var(--text-hero)' }}
                    >
                        <span className="text-gray-900 dark:text-white">The </span>
                        <span className="bg-gradient-to-r from-neon-cyan via-electric-purple to-neon-cyan bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
                            Operating System
                        </span>
                        <br />
                        <span className="text-gray-900 dark:text-white">for Algorithmic Trading.</span>
                    </h1>

                    {/* Subheadline with Fluid Typography */}
                    <p
                        className="text-gray-500 dark:text-white/50 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
                        style={{ fontSize: 'var(--text-lg)' }}
                    >
                        Build, Backtest, and Automate strategies without writing a single line of code.
                    </p>

                    {/* CTA Form */}
                    <form
                        id="waitlist-form"
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-4"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            className="w-full sm:flex-1 px-5 py-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 text-base focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all disabled:opacity-50 backdrop-blur-sm"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-black text-base bg-gradient-to-r from-neon-cyan to-electric-purple shadow-xl shadow-electric-purple/30 hover:shadow-electric-purple/50 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap disabled:opacity-50"
                        >
                            {isLoading ? 'Joining...' : 'Join Waitlist →'}
                        </button>
                    </form>

                    {/* Secondary CTA */}
                    <button
                        onClick={() => handleDashboardClick('Watch Demo Coming Soon')}
                        className="text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white text-sm underline underline-offset-4 transition-colors"
                    >
                        Watch Demo →
                    </button>

                    {/* Feedback */}
                    {message.text && (
                        <p className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                            {message.text}
                        </p>
                    )}
                </div>

                {/* 3D Tilted Dashboard Mockup with Mobile Scaling */}
                <div className="relative max-w-5xl mx-auto mockup-scale-wrapper">
                    {/* Glow behind dashboard */}
                    <div
                        className="absolute inset-0 -bottom-20"
                        style={{
                            background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139, 92, 246, 0.3) 0%, transparent 60%)',
                            filter: 'blur(40px)',
                        }}
                    />

                    {/* Dashboard Container with 3D Tilt */}
                    <div
                        className="relative animate-float"
                        style={{
                            perspective: '1500px',
                        }}
                    >
                        <div
                            className="bg-gray-100/90 dark:bg-[#0a0a0a] backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                            style={{
                                transform: 'rotateX(10deg) rotateY(0deg)',
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {/* Window Chrome */}
                            <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-200/50 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="px-4 py-1 rounded-md bg-gray-200/50 dark:bg-white/5 text-gray-500 dark:text-white/40 text-xs">
                                        app.4quant.co/dashboard
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="p-6">
                                {/* Top Stats Bar */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                                    {[
                                        { label: 'Portfolio Value', value: '$847,294', change: '+12.4%', positive: true },
                                        { label: "Today's P&L", value: '+$12,847', change: '+2.1%', positive: true },
                                        { label: 'Active Strategies', value: '7', change: '3 running', neutral: true },
                                        { label: 'Win Rate', value: '68.4%', change: 'Last 30d', neutral: true },
                                    ].map((stat, i) => (
                                        <div
                                            key={i}
                                            onClick={() => handleDashboardClick(`Viewing ${stat.label}`)}
                                            className="bg-gray-200/50 dark:bg-white/[0.03] rounded-xl p-4 border border-gray-200/50 dark:border-white/5 dashboard-btn"
                                        >
                                            <div className="text-gray-500 dark:text-white/40 text-xs mb-1">{stat.label}</div>
                                            <div className="text-gray-900 dark:text-white font-bold text-base sm:text-xl mb-1">{stat.value}</div>
                                            <div className={`text-xs ${stat.positive ? 'text-green-500' : stat.neutral ? 'text-gray-400 dark:text-white/30' : 'text-red-400'}`}>
                                                {stat.change}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Main Chart Area */}
                                <div
                                    onClick={() => handleDashboardClick('Opening Performance Analytics')}
                                    className="bg-gray-200/50 dark:bg-white/[0.03] rounded-xl p-5 border border-gray-200/50 dark:border-white/5 mb-6 dashboard-btn"
                                >
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                                        <span className="text-gray-700 dark:text-white/80 font-medium">Portfolio Performance</span>
                                        {/* Timeframe buttons - wrap on mobile, scroll if needed */}
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 overflow-x-auto max-w-full">
                                            {['1D', '1W', '1M', '3M', 'YTD', 'ALL'].map((period) => (
                                                <button
                                                    key={period}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDashboardClick(`Switching to ${period} view`);
                                                    }}
                                                    className={`px-2 sm:px-2.5 py-1 rounded text-xs whitespace-nowrap transition-colors ${period === '1M' ? 'bg-neon-cyan/20 text-neon-cyan' : 'text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white hover:bg-white/10'}`}
                                                >
                                                    {period}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-40 flex items-end gap-1.5">
                                        {[30, 45, 35, 55, 48, 65, 58, 72, 68, 78, 70, 85, 80, 90, 75, 88, 82, 95, 88, 92, 85, 98, 90, 95].map((h, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 rounded-sm bg-gradient-to-t from-neon-cyan/30 to-electric-purple/50 hover:from-neon-cyan/50 hover:to-electric-purple/70 transition-colors"
                                                style={{ height: `${h}%` }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Active Strategies */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                    {[
                                        { name: 'RSI Momentum', status: 'running', return: '+18.4%', trades: 42 },
                                        { name: 'MACD Crossover', status: 'running', return: '+12.7%', trades: 31 },
                                        { name: 'Mean Reversion', status: 'paused', return: '+8.2%', trades: 28 },
                                    ].map((strategy, i) => (
                                        <div
                                            key={i}
                                            onClick={() => handleDashboardClick(`Opening ${strategy.name} Strategy`)}
                                            className="bg-gray-200/50 dark:bg-white/[0.03] rounded-xl p-4 border border-gray-200/50 dark:border-white/5 dashboard-btn"
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className={`w-2 h-2 rounded-full ${strategy.status === 'running' ? 'bg-green-400 animate-pulse' : 'bg-gray-400 dark:bg-white/30'}`}></div>
                                                <span className="text-gray-700 dark:text-white/80 text-sm font-medium">{strategy.name}</span>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <div className="text-green-500 font-bold text-lg">{strategy.return}</div>
                                                    <div className="text-gray-400 dark:text-white/30 text-xs">{strategy.trades} trades</div>
                                                </div>
                                                <div className="w-16 h-8 flex items-end gap-0.5">
                                                    {[40, 55, 45, 60, 50, 70, 65, 75].map((h, j) => (
                                                        <div key={j} className="flex-1 rounded-sm bg-green-500/40 hover:bg-green-500/60 transition-colors" style={{ height: `${h}%` }} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
