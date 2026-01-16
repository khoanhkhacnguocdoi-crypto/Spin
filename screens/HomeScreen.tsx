
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
import { Target, CircleDollarSign, ShieldCheck } from 'lucide-react';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      <AppBar title="Spin Vũ • Coin Master" />
      
      <div className="flex-1 px-5 py-8 overflow-y-auto no-scrollbar">
        <div className="bg-white p-6 rounded-[32px] shadow-sm mb-10 text-center">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl mx-auto flex items-center justify-center mb-4">
                <ShieldCheck size={40} className="text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Chào mừng trở lại!</h2>
            <p className="text-gray-500 mt-2">Cập nhật link nhận thưởng Coin Master mới nhất mỗi ngày</p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <button 
            onClick={() => navigate('/spins')}
            className="relative overflow-hidden group bg-white p-6 rounded-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center gap-6 border border-gray-50 active:scale-[0.97] transition-all"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                <Target size={32} />
            </div>
            <div className="text-left">
                <span className="text-xl font-bold block text-gray-900">🎯 Nhận Spin</span>
                <span className="text-sm text-gray-500">Hàng trăm lượt quay miễn phí</span>
            </div>
            <div className="absolute right-0 top-0 h-full w-2 bg-blue-500 opacity-0 group-active:opacity-100 transition-opacity"></div>
          </button>

          <button 
            onClick={() => navigate('/coins')}
            className="relative overflow-hidden group bg-white p-6 rounded-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center gap-6 border border-gray-50 active:scale-[0.97] transition-all"
          >
            <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-yellow-200">
                <CircleDollarSign size={32} />
            </div>
            <div className="text-left">
                <span className="text-xl font-bold block text-gray-900">💰 Nhận Coin</span>
                <span className="text-sm text-gray-500">Hàng triệu vàng đang chờ bạn</span>
            </div>
            <div className="absolute right-0 top-0 h-full w-2 bg-yellow-500 opacity-0 group-active:opacity-100 transition-opacity"></div>
          </button>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
            <p>© 2024 Spin Vũ. Luôn cập nhật link sạch.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
