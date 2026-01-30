const Features = () => {
    return (
        <section id="journey" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        How <span className="bg-gradient-to-r from-neon-cyan to-electric-purple bg-clip-text text-transparent">4Quant</span> Works
                    </h2>
                    <p className="text-white/40 text-lg max-w-xl mx-auto">
                        Your complete journey from idea to passive income, in four simple steps.
                    </p>
                </div>

                <div className="space-y-24 lg:space-y-32">

                    {/* STEP 1: Strategy Builder (Left Text / Right Image) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-electric-purple text-black text-xl font-bold mb-6 shadow-lg shadow-neon-cyan/30">
                                1
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">No-Code Strategy Architect</h3>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Drag & drop blocks to create complex algos. RSI &lt; 30? Buy. MACD Cross? Sell. It's that simple.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 to-electric-purple/20 rounded-3xl blur-xl"></div>
                                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 min-h-[300px] hover:border-electric-purple/40 transition-all duration-300">
                                    {/* Window chrome */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                        <span className="ml-3 text-white/30 text-sm">Strategy Builder</span>
                                    </div>
                                    {/* Block-based editor */}
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg px-5 py-3 text-base">
                                                <span className="text-neon-cyan font-semibold">IF</span> RSI &lt; 30
                                            </div>
                                        </div>
                                        <div className="flex gap-3 ml-10">
                                            <div className="bg-electric-purple/10 border border-electric-purple/30 rounded-lg px-5 py-3 text-base">
                                                <span className="text-electric-purple font-semibold">AND</span> MACD Cross ↑
                                            </div>
                                        </div>
                                        <div className="flex gap-3 ml-5">
                                            <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-5 py-3 text-base">
                                                <span className="text-green-400 font-semibold">THEN</span> Execute BUY
                                            </div>
                                        </div>
                                        <div className="mt-6 flex gap-3">
                                            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/40 hover:bg-white/10 cursor-pointer transition">
                                                + Add Block
                                            </div>
                                            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/40 hover:bg-white/10 cursor-pointer transition">
                                                + Add Condition
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 2: Model Arena (Right Text / Left Image) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-1">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-electric-purple/20 to-neon-cyan/20 rounded-3xl blur-xl"></div>
                                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 min-h-[300px] hover:border-neon-cyan/40 transition-all duration-300">
                                    {/* Window chrome */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                        <span className="ml-3 text-white/30 text-sm">Model Arena</span>
                                    </div>
                                    {/* Metrics */}
                                    <div className="flex gap-8 mb-6">
                                        <div>
                                            <div className="text-white/40 text-sm mb-1">Win Rate</div>
                                            <div className="text-green-400 font-bold text-2xl">68.4%</div>
                                        </div>
                                        <div>
                                            <div className="text-white/40 text-sm mb-1">Sharpe Ratio</div>
                                            <div className="text-neon-cyan font-bold text-2xl">2.14</div>
                                        </div>
                                        <div>
                                            <div className="text-white/40 text-sm mb-1">Max DD</div>
                                            <div className="text-electric-purple font-bold text-2xl">-8.2%</div>
                                        </div>
                                    </div>
                                    {/* Mini chart */}
                                    <div className="bg-white/5 rounded-xl p-4 h-32 flex items-end gap-2">
                                        <div className="w-full h-10 bg-gradient-to-t from-green-500/30 to-green-500/70 rounded"></div>
                                        <div className="w-full h-16 bg-gradient-to-t from-green-500/30 to-green-500/70 rounded"></div>
                                        <div className="w-full h-8 bg-gradient-to-t from-red-500/30 to-red-500/70 rounded"></div>
                                        <div className="w-full h-20 bg-gradient-to-t from-green-500/30 to-green-500/70 rounded"></div>
                                        <div className="w-full h-24 bg-gradient-to-t from-green-500/30 to-green-500/70 rounded"></div>
                                        <div className="w-full h-18 bg-gradient-to-t from-green-500/30 to-green-500/70 rounded"></div>
                                        <div className="w-full h-20 bg-gradient-to-t from-neon-cyan/30 to-neon-cyan/70 rounded"></div>
                                        <div className="w-full h-28 bg-gradient-to-t from-green-500/30 to-green-500/70 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-2">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-electric-purple text-black text-xl font-bold mb-6 shadow-lg shadow-electric-purple/30">
                                2
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Military-Grade Backtesting</h3>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Don't guess. Test. Simulate your strategy against 5 years of historical data including slippage and commissions.
                            </p>
                        </div>
                    </div>

                    {/* STEP 3: Trading Terminal (Left Text / Right Image) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-electric-purple text-black text-xl font-bold mb-6 shadow-lg shadow-neon-cyan/30">
                                3
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">One-Click Deployment</h3>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Ready? Set your risk, choose your leverage, and deploy your agent to the live market via API.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 to-electric-purple/20 rounded-3xl blur-xl"></div>
                                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 min-h-[300px] hover:border-electric-purple/40 transition-all duration-300">
                                    {/* Window chrome */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                        <span className="ml-3 text-white/30 text-sm">Trading Terminal</span>
                                    </div>
                                    {/* Trading buttons */}
                                    <div className="space-y-5">
                                        <div className="flex gap-4">
                                            <button className="flex-1 bg-green-500/20 border border-green-500/40 text-green-400 font-semibold py-4 rounded-xl hover:bg-green-500/30 hover:scale-105 active:scale-95 transition-all">
                                                BUY LONG
                                            </button>
                                            <button className="flex-1 bg-red-500/20 border border-red-500/40 text-red-400 font-semibold py-4 rounded-xl hover:bg-red-500/30 hover:scale-105 active:scale-95 transition-all">
                                                SELL SHORT
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white/5 rounded-xl p-4">
                                                <div className="text-white/40 text-sm mb-1">Risk Tolerance</div>
                                                <div className="text-white font-semibold text-lg">Medium (5%)</div>
                                            </div>
                                            <div className="bg-white/5 rounded-xl p-4">
                                                <div className="text-white/40 text-sm mb-1">Leverage</div>
                                                <div className="text-white font-semibold text-lg">3x</div>
                                            </div>
                                        </div>
                                        <button className="w-full bg-gradient-to-r from-neon-cyan to-electric-purple text-white font-semibold py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-electric-purple/30">
                                            🚀 Deploy to Live Market
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 4: Command Center (Right Text / Left Image) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-1">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-electric-purple/20 to-neon-cyan/20 rounded-3xl blur-xl"></div>
                                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 min-h-[300px] hover:border-neon-cyan/40 transition-all duration-300">
                                    {/* Window chrome */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                        <span className="ml-3 text-white/30 text-sm">Command Center</span>
                                    </div>
                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4 mb-5">
                                        <div className="bg-white/5 rounded-xl p-4">
                                            <div className="text-white/40 text-sm mb-1">Total PnL</div>
                                            <div className="text-green-400 font-bold text-xl">+$24,847</div>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-4">
                                            <div className="text-white/40 text-sm mb-1">Active Bots</div>
                                            <div className="text-neon-cyan font-bold text-xl">5 Running</div>
                                        </div>
                                    </div>
                                    {/* Bot list */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                                                <span className="font-medium">RSI Reversal Bot</span>
                                            </div>
                                            <span className="text-green-400 font-semibold">+12.4%</span>
                                        </div>
                                        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                                                <span className="font-medium">MACD Crossover</span>
                                            </div>
                                            <span className="text-green-400 font-semibold">+8.7%</span>
                                        </div>
                                        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                                                <span className="font-medium">Mean Reversion</span>
                                            </div>
                                            <span className="text-red-400 font-semibold">-2.1%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-2">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-electric-purple text-black text-xl font-bold mb-6 shadow-lg shadow-electric-purple/30">
                                4
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Passive Income Dashboard</h3>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Monitor all your active agents in real-time. Track PnL while you sleep.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
