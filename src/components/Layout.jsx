import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Grid background */}
            <div
                className="fixed inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
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
