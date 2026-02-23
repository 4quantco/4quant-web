import { useState, useEffect, useRef } from 'react';
import Toast from './Toast';

const Features = () => {
    const [visibleSteps, setVisibleSteps] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Intersection Observer for scroll-based animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSteps((prev) => ({
                            ...prev,
                            [entry.target.dataset.step]: true,
                        }));
                    }
                });
            },
            { threshold: 0.2 }
        );

        const steps = document.querySelectorAll('[data-step]');
        steps.forEach((step) => observer.observe(step));

        return () => observer.disconnect();
    }, []);

    // Handle interactive clicks
    const handleClick = (message) => {
        setToastMessage(`Demo Mode: ${message}`);
        setShowToast(true);
    };

    // Mouse tracking for 3D tilt effect
    const handleMouseMove = (e, cardRef) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (cardRef) => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    // Step 1: Strategy Builder Visual
    const StrategyBuilderVisual = () => {
        const cardRef = useRef(null);
        return (
            <div className="feature-visual-scale w-full max-w-md">
                <div
                    ref={cardRef}
                    onClick={() => handleClick('Opening Strategy Builder')}
                    onMouseMove={(e) => handleMouseMove(e, cardRef)}
                    onMouseLeave={() => handleMouseLeave(cardRef)}
                    className="aspect-[4/3] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-transform duration-200 cursor-pointer hover:border-neon-cyan/30 flex flex-col justify-center"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className="space-y-3">
                        {/* Logic Block 1 */}
                        <div className="animate-float-slow bg-gradient-to-r from-neon-cyan/20 to-transparent border border-neon-cyan/40 rounded-lg px-4 py-3 shadow-lg shadow-neon-cyan/10">
                            <div className="flex items-center gap-2">
                                <span className="text-neon-cyan font-mono text-sm">IF</span>
                                <span className="text-white/80 font-mono text-sm">RSI &lt; 30</span>
                            </div>
                        </div>
                        {/* Connector */}
                        <div className="flex justify-center">
                            <div className="w-0.5 h-4 bg-gradient-to-b from-neon-cyan/40 to-electric-purple/40"></div>
                        </div>
                        {/* Logic Block 2 */}
                        <div className="animate-float-slow bg-gradient-to-r from-electric-purple/20 to-transparent border border-electric-purple/40 rounded-lg px-4 py-3 shadow-lg shadow-electric-purple/10" style={{ animationDelay: '0.5s' }}>
                            <div className="flex items-center gap-2">
                                <span className="text-electric-purple font-mono text-sm">THEN</span>
                                <span className="text-white/80 font-mono text-sm">BUY 1% Portfolio</span>
                            </div>
                        </div>
                        {/* Connector */}
                        <div className="flex justify-center">
                            <div className="w-0.5 h-4 bg-gradient-to-b from-electric-purple/40 to-green-500/40"></div>
                        </div>
                        {/* Logic Block 3 */}
                        <div className="animate-float-slow bg-gradient-to-r from-green-500/20 to-transparent border border-green-500/40 rounded-lg px-4 py-3 shadow-lg shadow-green-500/10" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400 font-mono text-sm">SET</span>
                                <span className="text-white/80 font-mono text-sm">Stop Loss -5%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Step 2: Backtesting Visual with animated chart
    const BacktestingVisual = () => {
        const cardRef = useRef(null);
        return (
            <div className="feature-visual-scale w-full max-w-md">
                <div
                    ref={cardRef}
                    onClick={() => handleClick('Running Backtest')}
                    onMouseMove={(e) => handleMouseMove(e, cardRef)}
                    onMouseLeave={() => handleMouseLeave(cardRef)}
                    className="aspect-[4/3] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-transform duration-200 cursor-pointer hover:border-electric-purple/30 flex flex-col justify-center"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-white/50 text-xs">Backtest Running...</span>
                    </div>
                    <svg viewBox="0 0 200 80" className="w-full h-24">
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                        <line x1="0" y1="40" x2="200" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                        <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                        {/* Animated line chart */}
                        <path
                            d="M0,60 L20,55 L40,50 L60,45 L80,40 L100,35 L120,30 L140,25 L160,20 L180,15 L200,10"
                            fill="none"
                            stroke="url(#backtestGradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="animate-draw-line"
                        />
                        <defs>
                            <linearGradient id="backtestGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="flex justify-between mt-4 text-xs">
                        <span className="text-white/40">Jan 2024</span>
                        <span className="text-green-400 font-semibold">+47.2% Returns</span>
                        <span className="text-white/40">Now</span>
                    </div>
                </div>
            </div>
        );
    };

    // Step 3: Deploy & Execute Visual
    const DeployExecuteVisual = () => {
        const cardRef = useRef(null);
        return (
            <div className="feature-visual-scale w-full max-w-md">
                <div
                    ref={cardRef}
                    onClick={() => handleClick('Connecting to Broker')}
                    onMouseMove={(e) => handleMouseMove(e, cardRef)}
                    onMouseLeave={() => handleMouseLeave(cardRef)}
                    className="aspect-[4/3] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-transform duration-200 cursor-pointer hover:border-amber-500/30 flex flex-col justify-center"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Connection Toggle */}
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-white/70 text-sm font-medium">Broker Connection</span>
                        <div className="flex items-center gap-2">
                            <span className="text-green-400 text-xs">Active</span>
                            <div className="w-10 h-5 bg-green-500/30 rounded-full relative">
                                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-500/50"></div>
                            </div>
                        </div>
                    </div>

                    {/* Broker Cards */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="bg-white/5 border border-green-500/30 rounded-lg p-3 text-center">
                            <svg viewBox="0 0 126 126" className="w-6 h-6 mx-auto mb-2 text-green-400">
                                <path fill="currentColor" d="M38.171 53.203L62.759 28.616l24.602 24.601 14.318-14.318L62.759 0 23.854 38.886l14.317 14.317z" />
                            </svg>
                            <span className="text-white/60 text-xs">Binance</span>
                            <div className="text-green-400 text-xs mt-1">● Live</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center opacity-50">
                            <svg viewBox="0 0 100 100" className="w-6 h-6 mx-auto mb-2 text-white/40">
                                <rect x="10" y="20" width="20" height="60" rx="2" fill="currentColor" />
                                <rect x="40" y="30" width="20" height="50" rx="2" fill="currentColor" />
                                <rect x="70" y="15" width="20" height="65" rx="2" fill="currentColor" />
                            </svg>
                            <span className="text-white/40 text-xs">IBKR</span>
                            <div className="text-white/30 text-xs mt-1">○ Ready</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center opacity-50">
                            <svg viewBox="0 0 100 100" className="w-6 h-6 mx-auto mb-2 text-white/40">
                                <circle cx="50" cy="35" r="20" fill="currentColor" />
                                <ellipse cx="50" cy="70" rx="30" ry="20" fill="currentColor" />
                            </svg>
                            <span className="text-white/40 text-xs">Alpaca</span>
                            <div className="text-white/30 text-xs mt-1">○ Ready</div>
                        </div>
                    </div>

                    {/* Signal Pulse */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-electric-purple flex items-center justify-center shadow-lg shadow-electric-purple/30">
                            <span className="font-bold text-black text-xs">4Q</span>
                        </div>
                        <div className="flex-1 relative h-1">
                            <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-neon-cyan to-green-400 rounded-full animate-signal-pulse"></div>
                        </div>
                        <div className="text-green-400 text-xs font-medium">Executing →</div>
                    </div>
                </div>
            </div>
        );
    };

    // Step 4: Command Center Visual
    const CommandCenterVisual = () => {
        const cardRef = useRef(null);
        return (
            <div className="feature-visual-scale w-full max-w-md">
                <div
                    ref={cardRef}
                    onClick={() => handleClick('Opening Command Center')}
                    onMouseMove={(e) => handleMouseMove(e, cardRef)}
                    onMouseLeave={() => handleMouseLeave(cardRef)}
                    className="aspect-[4/3] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-transform duration-200 cursor-pointer hover:border-neon-cyan/30 flex flex-col justify-center"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Live Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-white/70 text-sm font-medium">Live Analysis</span>
                        </div>
                        <span className="text-white/30 text-xs">Last update: 2s ago</span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-white/40 text-xs mb-1">Portfolio Value</div>
                            <div className="text-white font-bold text-lg">$847,294</div>
                            <div className="text-green-400 text-xs">+12.4%</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-white/40 text-xs mb-1">Today's P&L</div>
                            <div className="text-green-400 font-bold text-lg">+$12,847</div>
                            <div className="text-green-400 text-xs">+2.1%</div>
                        </div>
                    </div>

                    {/* Mini Chart */}
                    <div className="h-16 flex items-end gap-1 mb-4">
                        {[40, 55, 45, 65, 50, 75, 60, 85, 70, 90, 75, 95].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 rounded-sm bg-gradient-to-t from-neon-cyan/30 to-electric-purple/50"
                                style={{ height: `${h}%` }}
                            />
                        ))}
                    </div>

                    {/* Active Strategies */}
                    <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                            <span className="text-white/40">Active Strategies:</span>
                            <span className="text-green-400 font-medium">3 Running</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const steps = [
        {
            num: '01',
            title: 'Build Your Strategy',
            desc: 'Use our visual builder to create trading logic without code. Drag-and-drop indicators, conditions, and actions.',
            visual: <StrategyBuilderVisual />,
        },
        {
            num: '02',
            title: 'Backtest with Real Data',
            desc: 'Test your strategy against years of historical market data. See detailed performance metrics and optimize your approach.',
            visual: <BacktestingVisual />,
        },
        {
            num: '03',
            title: 'Deploy & Execute',
            desc: 'Connect to your favorite exchange or broker and deploy your strategy live. Automated execution runs 24/7.',
            visual: <DeployExecuteVisual />,
        },
        {
            num: '04',
            title: 'Command Center',
            desc: 'Real-time monitoring dashboard with P&L tracking, strategy performance, and live market analysis. Full control at your fingertips.',
            visual: <CommandCenterVisual />,
        },
    ];

    return (
        <section id="journey" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            {/* Toast Notification */}
            <Toast
                message={toastMessage}
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <h2
                        className="font-bold text-gray-900 dark:text-white mb-4"
                        style={{ fontSize: 'var(--text-3xl)' }}
                    >
                        How 4Quant Works
                    </h2>
                    <p
                        className="text-gray-500 dark:text-white/50 max-w-xl mx-auto"
                        style={{ fontSize: 'var(--text-base)' }}
                    >
                        From idea to execution in four simple steps
                    </p>
                </div>

                {/* Steps - Zig-Zag Layout */}
                <div className="space-y-20 sm:space-y-32">
                    {steps.map((step, index) => (
                        <div
                            key={step.num}
                            data-step={index + 1}
                            className={`
                                grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center
                                ${visibleSteps[index + 1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                transition-all duration-700
                            `}
                        >
                            {/* Text Content - Mobile: Always First, Desktop: Alternates */}
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-sm font-mono text-neon-cyan">{step.num}</span>
                                    <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/50 to-transparent"></div>
                                </div>
                                <h3
                                    className="font-bold text-gray-900 dark:text-white mb-4"
                                    style={{ fontSize: 'var(--text-2xl)' }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    className="text-gray-500 dark:text-white/50 leading-relaxed"
                                    style={{ fontSize: 'var(--text-base)' }}
                                >
                                    {step.desc}
                                </p>
                            </div>
                            {/* Visual - Mobile: Always Second, Desktop: Alternates */}
                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex justify-center`}>
                                {step.visual}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
