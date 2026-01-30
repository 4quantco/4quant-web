import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-electric-purple flex items-center justify-center font-bold text-black text-lg">
                        4Q
                    </div>
                    <span className="font-semibold text-xl hidden sm:block">4Quant</span>
                </Link>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-10 text-base text-white/60">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <a href="#journey" className="hover:text-white transition-colors">Features</a>
                    <Link to="/docs" className="hover:text-white transition-colors">Docs</Link>
                    <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                </div>

                {/* Right Buttons */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/login"
                        className="px-5 py-2.5 rounded-full text-base font-medium text-white/80 border border-white/20 hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 transition-all hidden sm:block"
                    >
                        Login
                    </Link>
                    <a
                        href="#hero-cta"
                        className="px-6 py-2.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-neon-cyan to-electric-purple shadow-lg shadow-electric-purple/30 hover:scale-105 active:scale-95 transition-all"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
