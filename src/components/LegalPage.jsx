import { Link } from 'react-router-dom';

const legalContent = {
    terms: {
        title: 'Terms of Use',
        updated: 'Effective July 17, 2026',
        sections: [
            {
                heading: 'Platform Purpose',
                body: '4quant is a strategy research and paper trading platform. It does not provide investment advice, brokerage services, or guaranteed returns. All demo transactions use simulated funds.',
            },
            {
                heading: 'Acceptable Use',
                body: 'You agree to use 4Quant only for lawful research, education, strategy testing, and paper trading purposes. You are responsible for how you interpret platform outputs and for any decisions you make outside the platform.',
            },
            {
                heading: 'No Financial Advice',
                body: 'Information, simulations, backtests, examples, metrics, and platform outputs are provided for research purposes only. They are not recommendations to buy, sell, or hold any asset.',
            },
            {
                heading: 'Accounts and Communications',
                body: 'If you join the waitlist or create an account, you agree to provide accurate information and to receive product-related communications. You may opt out of marketing messages where applicable.',
            },
            {
                heading: 'Changes',
                body: 'We may update these terms as the product evolves. Continued use of the site or platform after changes means you accept the updated terms.',
            },
        ],
    },
    privacy: {
        title: 'Privacy Policy',
        updated: 'Effective July 17, 2026',
        sections: [
            {
                heading: 'Information We Collect',
                body: 'When you join the waitlist, we may collect email, source, UTM parameters, referrer, user agent, browser language, screen dimensions, device type, timezone, marketing consent, and timestamp.',
            },
            {
                heading: 'How We Use Information',
                body: 'We use this information to manage the waitlist, understand acquisition channels, improve the landing page experience, prevent abuse, and send relevant product updates when marketing consent is provided.',
            },
            {
                heading: 'Service Providers',
                body: 'We may use trusted hosting, analytics, database, and email providers to operate the site and waitlist. These providers process information only as needed to support 4Quant services.',
            },
            {
                heading: 'Data Choices',
                body: 'You may request that we update or remove your waitlist information by contacting us through the channels provided by 4Quant. Some records may be retained where required for security, legal, or operational reasons.',
            },
            {
                heading: 'Security',
                body: 'We use reasonable safeguards to protect waitlist data, but no internet service can guarantee absolute security.',
            },
        ],
    },
    risk: {
        title: 'Risk Disclaimer',
        updated: 'Effective July 17, 2026',
        sections: [
            {
                heading: 'No Investment Advice or Brokerage',
                body: '4quant is a strategy research and paper trading platform. It does not provide investment advice, brokerage services, or guaranteed returns. All demo transactions use simulated funds.',
            },
            {
                heading: 'No Guaranteed Returns',
                body: 'Trading and investing involve risk. Platform examples, metrics, signals, simulations, or research outputs do not guarantee future returns or reduce the risk of loss.',
            },
            {
                heading: 'Backtest Limitations',
                body: 'Backtests are based on historical data and assumptions that may not reflect live market behavior, fees, liquidity, slippage, outages, or execution constraints.',
            },
            {
                heading: 'Paper Trading Limitations',
                body: 'Paper trading uses simulated funds and may differ materially from live trading. Simulated execution can overstate performance because it does not fully capture real market conditions.',
            },
            {
                heading: 'Market Data Limitations',
                body: 'Market data may be delayed, incomplete, inaccurate, unavailable, or subject to provider limitations. Strategies and research should be evaluated with these limitations in mind.',
            },
        ],
    },
};

const LegalPage = ({ type }) => {
    const content = legalContent[type];

    return (
        <section className="relative min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] opacity-70"
                    style={{
                        background: 'radial-gradient(ellipse 50% 45% at 50% 20%, rgba(139, 92, 246, 0.18) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center text-sm text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
                >
                    Back to 4Quant
                </Link>

                <div className="mb-10">
                    <p className="text-neon-cyan text-sm font-medium mb-3">Legal</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {content.title}
                    </h1>
                    <p className="text-gray-500 dark:text-white/40 text-sm">{content.updated}</p>
                </div>

                <div className="space-y-8">
                    {content.sections.map((section) => (
                        <section key={section.heading}>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {section.heading}
                            </h2>
                            <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                                {section.body}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LegalPage;
