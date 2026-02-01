import { useState } from 'react';
import { supabase } from '../lib/supabase';

const Hero = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const getUtmParams = () => {
        const params = new URLSearchParams(window.location.search);
        return {
            utm_source: params.get('utm_source') || null,
            utm_medium: params.get('utm_medium') || null,
            utm_campaign: params.get('utm_campaign') || null,
        };
    };

    const getDeviceType = () => {
        const width = window.screen?.width || 0;
        return width < 768 ? 'mobile' : 'desktop';
    };

    const getIpAddress = async () => {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);
            const response = await fetch('https://api.ipify.org?format=json', {
                signal: controller.signal,
            });
            clearTimeout(timeoutId);
            if (!response.ok) return null;
            const data = await response.json();
            return data.ip || null;
        } catch {
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage({ type: 'error', text: 'Please enter your email.' });
            return;
        }

        setIsLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const utmParams = getUtmParams();
            const ipAddress = await getIpAddress();
            const screenWidth = parseInt(window.screen?.width, 10) || 0;
            const screenHeight = parseInt(window.screen?.height, 10) || 0;

            const payload = {
                email: String(email).trim(),
                utm_source: utmParams.utm_source,
                utm_medium: utmParams.utm_medium,
                utm_campaign: utmParams.utm_campaign,
                referrer: document.referrer ? String(document.referrer) : null,
                Source: utmParams.utm_source || 'direct',
                user_agent: navigator.userAgent ? String(navigator.userAgent) : null,
                browser_language: navigator.language ? String(navigator.language) : null,
                screen_width: screenWidth,
                screen_height: screenHeight,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
                device_type: getDeviceType(),
                ip_address: ipAddress,
                marketing_consent: true,
            };

            const { error } = await supabase
                .from('waitlist')
                .insert([payload]);

            if (error) {
                console.error('Supabase Insert Error:', {
                    message: error.message,
                    details: error.details,
                    hint: error.hint,
                    code: error.code,
                });

                if (error.code === '23505') {
                    setMessage({ type: 'error', text: 'This email is already on the waitlist!' });
                } else {
                    setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
                }
            } else {
                setMessage({ type: 'success', text: 'Welcome to the club! 🎉' });
                setEmail('');
            }
        } catch (err) {
            console.error('Unexpected error:', err);
            setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
            {/* Aurora Gradient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full animate-aurora opacity-40"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full animate-aurora opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        animationDelay: '-5s',
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Centered Vertical Stack */}
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-sm text-gray-600 dark:text-white/60 mb-8">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                        Now in Private Beta
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                        <span className="bg-gradient-to-r from-neon-cyan to-electric-purple bg-clip-text text-transparent">The Operating System</span>
                        <br />
                        <span className="text-gray-900 dark:text-white">for Algorithmic Trading.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl text-gray-500 dark:text-white/50 max-w-2xl mx-auto mb-10">
                        Build, Backtest, and Automate strategies without writing a single line of code.
                    </p>

                    {/* CTA: Email + Button */}
                    <form
                        id="hero-cta"
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-6"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            className="w-full sm:flex-1 px-6 py-4 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 text-base focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/30 transition-all disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white text-base bg-gradient-to-r from-neon-cyan to-electric-purple shadow-lg shadow-electric-purple/30 hover:scale-105 active:scale-95 transition-all whitespace-nowrap disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Joining...' : 'Join Waitlist →'}
                        </button>
                    </form>

                    {/* Feedback Message */}
                    {message.text && (
                        <p className={`text-sm mb-8 ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                            {message.text}
                        </p>
                    )}
                </div>

                {/* Dashboard Visual - Below Text */}
                <div className="mt-16 perspective-1000">
                    {/* Glow effect behind dashboard */}
                    <div
                        className="absolute inset-x-0 top-1/2 h-96 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                        }}
                    />

                    {/* 3D Tilted Dashboard */}
                    <div
                        className="relative mx-auto max-w-4xl animate-float"
                        style={{
                            transform: 'perspective(1000px) rotateX(8deg)',
                            transformOrigin: 'center top',
                        }}
                    >
                        <div className="bg-gray-100/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-6 shadow-2xl shadow-electric-purple/20">
                            {/* Window Chrome */}
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                                <span className="ml-3 text-gray-400 dark:text-white/30 text-sm">Trading Dashboard</span>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-4 gap-4 mb-5">
                                <div className="bg-gray-200/50 dark:bg-white/5 rounded-xl p-4 text-center">
                                    <div className="text-gray-500 dark:text-white/40 text-xs mb-1">Portfolio Value</div>
                                    <div className="text-gray-900 dark:text-white font-bold text-xl">$124,847</div>
                                </div>
                                <div className="bg-gray-200/50 dark:bg-white/5 rounded-xl p-4 text-center">
                                    <div className="text-gray-500 dark:text-white/40 text-xs mb-1">Today's P&L</div>
                                    <div className="text-green-500 font-bold text-xl">+$2,431</div>
                                </div>
                                <div className="bg-gray-200/50 dark:bg-white/5 rounded-xl p-4 text-center">
                                    <div className="text-gray-500 dark:text-white/40 text-xs mb-1">Win Rate</div>
                                    <div className="text-neon-cyan font-bold text-xl">68.4%</div>
                                </div>
                                <div className="bg-gray-200/50 dark:bg-white/5 rounded-xl p-4 text-center">
                                    <div className="text-gray-500 dark:text-white/40 text-xs mb-1">Active Bots</div>
                                    <div className="text-electric-purple font-bold text-xl">5</div>
                                </div>
                            </div>

                            {/* Chart Area */}
                            <div className="bg-gray-200/50 dark:bg-white/5 rounded-xl p-5 h-40 flex items-end gap-1">
                                {[35, 45, 40, 60, 55, 70, 65, 80, 75, 85, 70, 90, 85, 95, 80, 88, 92, 85, 90, 95].map((height, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-sm bg-gradient-to-t from-neon-cyan/40 to-electric-purple/60"
                                        style={{ height: `${height}%` }}
                                    />
                                ))}
                            </div>

                            {/* Active Strategies */}
                            <div className="mt-5 grid grid-cols-3 gap-4">
                                <div className="bg-gray-200/50 dark:bg-white/5 rounded-xl px-4 py-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                            <span className="text-sm text-gray-700 dark:text-white/80">RSI Reversal</span>
                                        </div>
                                        <span className="text-green-400 text-sm font-semibold">+12.4%</span>
                                    </div>
                                </div>
                                <div className="bg-gray-200/50 dark:bg-white/5 rounded-xl px-4 py-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                            <span className="text-sm text-gray-700 dark:text-white/80">MACD Cross</span>
                                        </div>
                                        <span className="text-green-400 text-sm font-semibold">+8.7%</span>
                                    </div>
                                </div>
                                <div className="bg-gray-200/50 dark:bg-white/5 rounded-xl px-4 py-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                            <span className="text-sm text-gray-700 dark:text-white/80">Mean Revert</span>
                                        </div>
                                        <span className="text-red-400 text-sm font-semibold">-2.1%</span>
                                    </div>
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
