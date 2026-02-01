const Security = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Subtle gradient background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(34, 211, 238, 0.05) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Shield Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-electric-purple/20 border border-gray-200 dark:border-white/10 mb-8">
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

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    <span className="bg-gradient-to-r from-neon-cyan to-electric-purple bg-clip-text text-transparent">
                        Bank-Grade
                    </span>{' '}
                    Security
                </h2>

                {/* Description */}
                <p className="text-xl sm:text-2xl text-gray-500 dark:text-white/50 leading-relaxed max-w-2xl mx-auto mb-10">
                    Non-Custodial Design. Your funds never leave your brokerage account. We trade via API with strict{' '}
                    <span className="text-neon-cyan font-semibold">trade-only permissions</span>.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                    <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-gray-600 dark:text-white/70 text-sm font-medium">No Withdrawal Access</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-gray-600 dark:text-white/70 text-sm font-medium">Read-Only + Trade</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-gray-600 dark:text-white/70 text-sm font-medium">256-bit Encryption</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;
