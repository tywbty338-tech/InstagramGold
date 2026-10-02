import React from 'react';
// تم دمج أكواد الواجهة الأمامية بالكامل هنا
export default function App() {
  return (
    <div className="min-h-screen bg-[#081420] text-white p-4 font-sans pb-24">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#0099FF] bg-clip-text text-transparent">Crypto Tickets</h1>
          <p className="text-gray-400 text-sm">Welcome Back</p>
        </div>
      </div>
      
      <div className="bg-[#0F172A] rounded-2xl p-6 border border-blue-500/20 shadow-[0_0_15px_rgba(0,212,255,0.1)] relative overflow-hidden mb-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <p className="text-gray-400 mb-1">Trading Balance</p>
        <div className="flex items-baseline space-x-2">
          <h2 className="text-4xl font-bold text-white">$ 245.78</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3 font-semibold transition-all">Deposit</button>
          <button className="bg-[#1E293B] text-white rounded-xl py-3 font-semibold transition-all">Withdraw</button>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10">
        <p>WebApp is Successfully Connected & Running! 🚀</p>
      </div>
    </div>
  );
}
