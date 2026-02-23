import { useEffect } from 'react';

const Toast = ({ message, isVisible, onClose, duration = 3000 }) => {
    useEffect(() => {
        if (isVisible && onClose) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose, duration]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 z-50 px-6 py-3 bg-gradient-to-r from-neon-cyan to-electric-purple text-black font-semibold rounded-xl shadow-xl shadow-electric-purple/40 animate-slide-up">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {message}
            </div>
        </div>
    );
};

export default Toast;
