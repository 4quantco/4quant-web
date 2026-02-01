import { useState, useEffect, useRef } from 'react';

const Features = () => {
    const [visibleSteps, setVisibleSteps] = useState({});
    const sectionRef = useRef(null);

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
            { threshold: 0.3 }
        );

        const steps = document.querySelectorAll('[data-step]');
        steps.forEach((step) => observer.observe(step));

        return () => observer.disconnect();
    }, []);

    // Mouse tracking for 3D tilt effect
    const handleMouseMove = (e, cardRef) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
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
            <div
                ref={cardRef}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-transform duration-200 h-full"
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
        );
    };

    // Step 2: Backtesting Visual with animated chart
    const BacktestingVisual = () => {
        const cardRef = useRef(null);
        return (
            <div
                ref={cardRef}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-transform duration-200 h-full"
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
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="animate-draw-line"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
        );
    };

    // Step 3: Execution Visual with pulse animation
    const ExecutionVisual = () => {
        const cardRef = useRef(null);
        return (
            <div
                ref={cardRef}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-transform duration-200 h-full"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="flex items-center justify-between gap-6">
                    {/* 4Quant Logo */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan to-electric-purple flex items-center justify-center shadow-lg shadow-electric-purple/30">
                        <span className="font-bold text-black text-lg">4Q</span>
                    </div>
                    {/* Animated Signal */}
                    <div className="flex-1 relative h-1">
                        <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-neon-cyan to-electric-purple rounded-full animate-signal-pulse"></div>
                    </div>
                    {/* Broker Logos */}
                    <div className="flex gap-2">
                        <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                            <svg viewBox="0 0 126 126" className="w-6 h-6 text-white/60">
                                <path fill="currentColor" d="M38.171 53.203L62.759 28.616l24.602 24.601 14.318-14.318L62.759 0 23.854 38.886l14.317 14.317z" />
                            </svg>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="w-6 h-6 text-white/60">
                                <rect x="10" y="20" width="20" height="60" rx="2" fill="currentColor" />
                                <rect x="40" y="30" width="20" height="50" rx="2" fill="currentColor" />
                                <rect x="70" y="15" width="20" height="65" rx="2" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-green-400 text-xs font-medium">Order Executed</span>
                    </div>
                </div>
            </div>
        );
    };

    // Step 4: Monitor Visual with counting numbers
    const MonitorVisual = ({ isVisible }) => {
        const cardRef = useRef(null);
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (isVisible && count < 24) {
                const timer = setTimeout(() => {
                    setCount((prev) => Math.min(prev + 1, 24));
                }, 80);
                return () => clearTimeout(timer);
            }
        }, [isVisible, count]);

        return (
            <div
                ref={cardRef}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-transform duration-200 h-full"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="text-center mb-5">
                    <div className="text-white/40 text-xs mb-2">Total Returns</div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-neon-cyan bg-clip-text text-transparent">
                        +{count}%
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                        <div className="text-white/40 text-xs">Win Rate</div>
                        <div className="text-white font-semibold">68.4%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                        <div className="text-white/40 text-xs">Trades</div>
                        <div className="text-white font-semibold">142</div>
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
            desc: 'Test your strategy against historical market data. See detailed performance metrics and optimize your approach.',
            visual: <BacktestingVisual />,
        },
        {
            num: '03',
            title: 'Deploy & Execute',
            desc: 'Connect to your favorite broker and let your strategy trade automatically. We handle the execution.',
            visual: <ExecutionVisual />,
        },
        {
            num: '04',
            title: 'Monitor & Optimize',
            desc: 'Track performance in real-time. Get alerts, analyze results, and continuously improve your strategies.',
            visual: <MonitorVisual isVisible={visibleSteps['4']} />,
        },
    ];

    return (
        <section id="journey" ref={sectionRef} className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        How 4Quant Works
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl mx-auto">
                        From idea to execution in four simple steps
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div
                            key={step.num}
                            data-step={index + 1}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Text Content */}
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-sm font-mono text-neon-cyan">{step.num}</span>
                                    <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/50 to-transparent"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-white/50 text-lg">{step.desc}</p>
                            </div>
                            {/* Visual */}
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
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
