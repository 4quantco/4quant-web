import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { label: 'Features', href: '#journey' },
        { label: 'Strategies', href: '#strategies' },
        { label: 'Results', href: '#results' },
        { label: 'Pricing', href: '#' },
    ];

    const scrollToWaitlist = (e) => {
        e.preventDefault();
        const waitlistForm = document.getElementById('waitlist-form');
        if (waitlistForm) {
            waitlistForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
                {/* Logo + Brand */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-neon-cyan to-electric-purple flex items-center justify-center shadow-lg shadow-electric-purple/25">
                        <span className="font-bold text-black text-sm">4Q</span>
                    </div>
                    <span className="font-semibold text-xl text-gray-900 dark:text-white tracking-tight">4Quant</span>
                </Link>

                {/* Center: Nav Links */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right: CTA Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={scrollToWaitlist}
                        className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        Book a Demo
                    </button>
                    <button
                        onClick={scrollToWaitlist}
                        className="px-6 py-2.5 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-neon-cyan to-electric-purple shadow-lg shadow-electric-purple/25 hover:shadow-electric-purple/40 hover:scale-105 active:scale-95 transition-all"
                    >
                        Join Waitlist
                    </button>
                </div>

                {/* Mobile Menu */}
                <button className="lg:hidden ml-4 p-2 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
