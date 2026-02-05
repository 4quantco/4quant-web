const Security = () => {
    const badges = [
        { icon: 'shield', text: 'Non-Custodial Design' },
        { icon: 'lock', text: 'No Withdrawal Access' },
        { icon: 'key', text: 'Read-Only + Trade' },
        { icon: 'check', text: '256-bit Encryption' },
    ];

    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(6, 182, 212, 0.06) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Shield Icon with glow */}
                <div className="relative inline-flex items-center justify-center mb-10">
                    <div
                        className="absolute w-32 h-32 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                            filter: 'blur(20px)',
                        }}
                    />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-electric-purple/10 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                        <svg
                            className="w-10 h-10 text-neon-cyan"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
                    <span className="bg-gradient-to-r from-neon-cyan to-electric-purple bg-clip-text text-transparent">
                        Bank-Grade
                    </span>{' '}
                    Security
                </h2>

                {/* Description */}
                <p className="text-xl sm:text-2xl text-gray-500 dark:text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
                    Your funds never leave your brokerage account. We connect via API with strict{' '}
                    <span className="text-neon-cyan font-medium">trade-only permissions</span>.
                </p>

                {/* Trust badges grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {badges.map((badge, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-gray-100/50 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/5 backdrop-blur-sm hover:border-neon-cyan/30 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <span className="text-gray-700 dark:text-white/70 text-sm font-medium text-center">
                                {badge.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Security;
