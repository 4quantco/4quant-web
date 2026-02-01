import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { theme, toggleTheme } = useTheme();

    const footerLinks = {
        product: [
            { label: 'Features', href: '#journey' },
            { label: 'Integrations', href: '#' },
            { label: 'Pricing', href: '#' },
            { label: 'Changelog', href: '#' },
            { label: 'Docs', href: '/docs' },
        ],
        company: [
            { label: 'About', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Customers', href: '#' },
            { label: 'Brand', href: '#' },
        ],
        resources: [
            { label: 'Community', href: '#' },
            { label: 'Help Center', href: '#' },
            { label: 'API', href: '#' },
            { label: 'Status', href: '#' },
        ],
        developers: [
            { label: 'GitHub', href: '#' },
            { label: 'Documentation', href: '/docs' },
        ],
    };

    return (
        <footer className="border-t border-gray-200 dark:border-white/5 py-16 px-6 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
                    {/* Column 1: Brand + Social */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2.5 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-electric-purple flex items-center justify-center">
                                <span className="font-bold text-black text-sm">4Q</span>
                            </div>
                            <span className="font-semibold text-lg text-gray-900 dark:text-white">4Quant</span>
                        </Link>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mb-6">
                            {/* X/Twitter */}
                            <a
                                href="https://x.com/4quantco"
                                className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/111155984"
                                className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            {/* GitHub */}
                            <a
                                href="https://github.com/4quantco"
                                className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-sm"
                        >
                            {theme === 'dark' ? (
                                <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    Light Mode
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                    Dark Mode
                                </>
                            )}
                        </button>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    {link.href.startsWith('/') ? (
                                        <Link
                                            to={link.href}
                                            className="text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Developers */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Developers</h4>
                        <ul className="space-y-3">
                            {footerLinks.developers.map((link) => (
                                <li key={link.label}>
                                    {link.href.startsWith('/') ? (
                                        <Link
                                            to={link.href}
                                            className="text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 dark:text-white/30 text-sm">
                        © 2026 4Quant Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <a href="#" className="text-gray-400 dark:text-white/30 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="text-gray-400 dark:text-white/30 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
