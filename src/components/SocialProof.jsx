const SocialProof = () => {
    // All logos for the marquee
    const logos = [
        {
            name: 'Binance',
            icon: (
                <svg viewBox="0 0 126 126" className="w-6 h-6">
                    <path fill="currentColor" d="M38.171 53.203L62.759 28.616l24.602 24.601 14.318-14.318L62.759 0 23.854 38.886l14.317 14.317zM0 63.031l14.318-14.318 14.317 14.318-14.317 14.317L0 63.031zm38.171 9.828l24.588 24.588 24.602-24.602 14.327 14.309-.009.009-38.92 38.92-38.906-38.92-.009-.018 14.327-14.286zM97.365 63.04l14.318-14.318 14.318 14.318-14.318 14.317-14.318-14.317zM77.106 62.995h.009L62.759 48.639 52.62 58.779l-.008.008-1.164 1.163-3.638 3.638-.008.018.008.008 14.949 14.949 14.356-14.356.009-.018-.018-.194z" />
                </svg>
            ),
        },
        {
            name: 'OpenAI',
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="currentColor" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
                </svg>
            ),
        },
        {
            name: 'Alpaca',
            icon: (
                <svg viewBox="0 0 100 100" className="w-6 h-6">
                    <circle cx="50" cy="35" r="20" fill="currentColor" />
                    <ellipse cx="50" cy="70" rx="30" ry="20" fill="currentColor" />
                </svg>
            ),
        },
        {
            name: 'Interactive Brokers',
            icon: (
                <svg viewBox="0 0 100 100" className="w-6 h-6">
                    <rect x="10" y="20" width="20" height="60" rx="2" fill="currentColor" />
                    <rect x="40" y="30" width="20" height="50" rx="2" fill="currentColor" />
                    <rect x="70" y="15" width="20" height="65" rx="2" fill="currentColor" />
                </svg>
            ),
        },
        {
            name: 'Coinbase',
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.304 0-9.6-4.296-9.6-9.6S6.696 2.4 12 2.4s9.6 4.296 9.6 9.6-4.296 9.6-9.6 9.6zm0-15.6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6zm0 9.6c-1.992 0-3.6-1.608-3.6-3.6S10.008 8.4 12 8.4s3.6 1.608 3.6 3.6-1.608 3.6-3.6 3.6z" />
                </svg>
            ),
        },
        {
            name: 'Vercel',
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="currentColor" d="M24 22.525H0l12-21.05 12 21.05z" />
                </svg>
            ),
        },
        {
            name: 'Supabase',
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="currentColor" d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z" />
                </svg>
            ),
        },
        {
            name: 'TradingView',
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="currentColor" d="M4 6h2v12H4V6zm4 4h2v8H8v-8zm4-2h2v10h-2V8zm4 3h2v7h-2v-7zm4-5h2v12h-2V6z" />
                </svg>
            ),
        },
    ];

    // Logo item component for reuse
    const LogoItem = ({ logo }) => (
        <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default px-8">
            <span className="text-gray-400 dark:text-white/50 flex-shrink-0">
                {logo.icon}
            </span>
            <span className="text-gray-500 dark:text-white/60 text-sm font-medium whitespace-nowrap">
                {logo.name}
            </span>
        </div>
    );

    return (
        <section className="py-12 overflow-hidden">
            {/* Section Heading */}
            <p className="text-center text-gray-400 dark:text-white/40 text-sm uppercase tracking-widest mb-8">
                Powering the next generation of quants
            </p>

            {/* Seamless Infinite Marquee */}
            <div className="marquee-container relative">
                {/* 
                    Key to seamless loop:
                    - Render logos TWICE in a single flex container
                    - Animate translateX from 0 to -50% (half the total width)
                    - When animation ends, it snaps back to 0 but second set is in same position as first
                */}
                <div className="flex animate-marquee">
                    {/* First set of logos */}
                    {logos.map((logo, index) => (
                        <LogoItem key={`first-${index}`} logo={logo} />
                    ))}
                    {/* Second set of logos (duplicate for seamless loop) */}
                    {logos.map((logo, index) => (
                        <LogoItem key={`second-${index}`} logo={logo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
