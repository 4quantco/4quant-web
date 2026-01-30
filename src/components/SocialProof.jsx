const SocialProof = () => {
    const logos = ['BINANCE', 'ALPACA', 'PYTHON', 'TRADINGVIEW', 'NASDAQ'];

    return (
        <section className="py-16 border-y border-white/5 overflow-hidden">
            <p className="text-center text-white/30 text-sm mb-8 uppercase tracking-widest">
                Powered by industry leaders
            </p>
            <div className="relative">
                <div className="flex marquee">
                    <div className="flex items-center gap-20 px-10 min-w-max">
                        {/* First set */}
                        {logos.map((logo, index) => (
                            <span key={`a-${index}`} className="text-white/20 font-bold text-2xl tracking-wide">
                                {logo}
                            </span>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {logos.map((logo, index) => (
                            <span key={`b-${index}`} className="text-white/20 font-bold text-2xl tracking-wide">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
