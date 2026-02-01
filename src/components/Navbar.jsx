import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { label: 'Features', href: '#journey' },
        { label: 'Strategies', href: '#strategies' },
        { label: 'Results', href: '#results' },
        { label: 'Pricing', href: '#' },
        { label: 'Contact', href: '#' },
    ];

    const handleBookDemo = (e) => {
        e.preventDefault();
        const ctaElement = document.getElementById('hero-cta');
        if (ctaElement) {
            ctaElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Left: Logo + Brand */}
                <Link to="/" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-electric-purple flex items-center justify-center">
                        <span className="font-bold text-black text-sm">4Q</span>
                    </div>
                    <span className="font-semibold text-lg text-gray-900 dark:text-white">4Quant</span>
                </Link>

                {/* Center: Navigation Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right: Book a Demo Button */}
                <div className="flex items-center gap-5">
                    <button
                        onClick={handleBookDemo}
                        className="px-5 py-2 rounded-full text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-white/90 transition-all"
                    >
                        Book a Demo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden ml-4 p-2 text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
