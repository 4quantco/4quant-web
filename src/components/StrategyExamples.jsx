const StrategyExamples = () => {
    const strategies = [
        {
            title: 'RSI Dip Buy',
            description: 'Buy when RSI drops below 30, sell when it rises above 70.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
            ),
            color: 'neon-cyan',
            bgGradient: 'from-neon-cyan/10 to-neon-cyan/5',
            borderColor: 'border-neon-cyan/30',
            blocks: [
                { type: 'condition', text: 'IF RSI < 30' },
                { type: 'action', text: 'BUY 5%' },
            ],
        },
        {
            title: 'Moving Average Crossover',
            description: 'Enter when fast MA crosses above slow MA.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
            ),
            color: 'electric-purple',
            bgGradient: 'from-electric-purple/10 to-electric-purple/5',
            borderColor: 'border-electric-purple/30',
            blocks: [
                { type: 'condition', text: 'IF EMA9 > EMA21' },
                { type: 'action', text: 'LONG Entry' },
            ],
        },
        {
            title: 'Stop-Loss Protection',
            description: 'Automatically exit if position drops 3%.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                </svg>
            ),
            color: 'green-400',
            bgGradient: 'from-green-500/10 to-green-500/5',
            borderColor: 'border-green-500/30',
            blocks: [
                { type: 'condition', text: 'IF Loss > 3%' },
                { type: 'action', text: 'SELL All' },
            ],
        },
    ];

    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Build in{' '}
                        <span className="bg-gradient-to-r from-neon-cyan to-electric-purple bg-clip-text text-transparent">
                            Seconds
                        </span>
                    </h2>
                    <p className="text-gray-500 dark:text-white/40 text-lg max-w-xl mx-auto">
                        No PhD required. Create powerful strategies with simple drag-and-drop logic.
                    </p>
                </div>

                {/* Strategy Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {strategies.map((strategy, index) => (
                        <div
                            key={index}
                            className={`relative bg-gradient-to-b ${strategy.bgGradient} backdrop-blur-xl border ${strategy.borderColor} rounded-2xl p-6 hover:scale-[1.02] hover:border-opacity-60 transition-all duration-300 group`}
                        >
                            {/* Icon */}
                            <div className={`text-${strategy.color} mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
                                {strategy.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{strategy.title}</h3>

                            {/* Description */}
                            <p className="text-gray-500 dark:text-white/50 text-sm mb-6 leading-relaxed">{strategy.description}</p>

                            {/* Visual Blocks */}
                            <div className="space-y-2">
                                {strategy.blocks.map((block, blockIndex) => (
                                    <div
                                        key={blockIndex}
                                        className={`px-4 py-2.5 rounded-lg text-sm font-medium ${block.type === 'condition'
                                            ? 'bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-600 dark:text-white/70'
                                            : 'bg-gradient-to-r from-neon-cyan/20 to-electric-purple/20 border border-neon-cyan/30 text-neon-cyan'
                                            }`}
                                    >
                                        {block.text}
                                    </div>
                                ))}
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/0 to-electric-purple/0 group-hover:from-neon-cyan/5 group-hover:to-electric-purple/5 transition-all duration-500 -z-10" />
                        </div>
                    ))}
                </div>

                {/* CTA below cards */}
                <div className="text-center mt-12">
                    <a
                        href="#hero-cta"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-neon-cyan to-electric-purple shadow-lg shadow-electric-purple/30 hover:scale-105 active:scale-95 transition-all"
                    >
                        Start Building for Free
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StrategyExamples;
