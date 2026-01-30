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
            // Gather UTM params
            const utmParams = getUtmParams();

            // Safe IP fetch (non-blocking on failure)
            const ipAddress = await getIpAddress();

            // Strict type conversion for all fields
            const screenWidth = parseInt(window.screen?.width, 10) || 0;
            const screenHeight = parseInt(window.screen?.height, 10) || 0;

            const payload = {
                // Core
                email: String(email).trim(),

                // Marketing data (lowercase column names)
                utm_source: utmParams.utm_source,
                utm_medium: utmParams.utm_medium,
                utm_campaign: utmParams.utm_campaign,
                referrer: document.referrer ? String(document.referrer) : null,
                Source: utmParams.utm_source || 'direct', // Capitalized column

                // Technical data (strict types)
                user_agent: navigator.userAgent ? String(navigator.userAgent) : null,
                browser_language: navigator.language ? String(navigator.language) : null,
                screen_width: screenWidth,   // Integer
                screen_height: screenHeight, // Integer
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
                device_type: getDeviceType(),

                // Network data
                ip_address: ipAddress, // null if fetch failed

                // Consent
                marketing_consent: true, // Boolean
            };

            const { error } = await supabase
                .from('waitlist')
                .insert([payload]);

            if (error) {
                // Detailed error logging
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
        <section className="pt-32 pb-24 px-6 text-center relative overflow-hidden">
            {/* Subtle spotlight effect */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)' }}
            />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    Now in Private Beta
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">
                    <span className="bg-gradient-to-r from-neon-cyan to-electric-purple bg-clip-text text-transparent">The Operating System</span>
                    <br />
                    <span className="text-white">for Algorithmic Trading.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto mb-14">
                    Build, Backtest, and Automate strategies without writing a single line of code.
                </p>

                {/* CTA: Email + Button */}
                <form
                    id="hero-cta"
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        className="w-full sm:flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 text-base focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/30 transition-all disabled:opacity-50"
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
                    <p className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {message.text}
                    </p>
                )}
            </div>
        </section>
    );
};

export default Hero;

