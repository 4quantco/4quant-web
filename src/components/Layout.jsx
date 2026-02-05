import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }) => {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark'
                ? 'bg-[#030303] text-white'
                : 'bg-[#fafafa] text-gray-900'
            }`}>
            {/* Subtle grid background */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage: theme === 'dark'
                        ? 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)'
                        : 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 70%)',
                }}
            />
            {/* Top fade glow */}
            <div
                className="fixed inset-x-0 top-0 h-[500px] pointer-events-none"
                style={{
                    background: theme === 'dark'
                        ? 'radial-gradient(ellipse 60% 50% at 50% -10%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)'
                        : 'radial-gradient(ellipse 60% 50% at 50% -10%, rgba(6, 182, 212, 0.05) 0%, transparent 60%)',
                }}
            />
            <Navbar />
            <main className="relative">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
