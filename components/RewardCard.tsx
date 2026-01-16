
import React from 'react';
import { Share2, Gift } from 'lucide-react';
import { RewardItem, RewardType } from '../types';

interface RewardCardProps {
  item: RewardItem;
  isClaimed: boolean;
  onClaim: (item: RewardItem) => void;
  onShare: (item: RewardItem) => void;
}

const RewardCard: React.FC<RewardCardProps> = ({ item, isClaimed, onClaim, onShare }) => {
  const iconBg = item.type === RewardType.SPIN ? 'bg-blue-100' : 'bg-yellow-100';
  const iconColor = item.type === RewardType.SPIN ? 'text-blue-600' : 'text-yellow-600';

  return (
    <div className={`bg-white rounded-[24px] p-5 mb-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-gray-50 transition-opacity duration-300 ${isClaimed ? 'opacity-80' : ''}`}>
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center shrink-0`}>
          <Gift className={iconColor} size={24} />
        </div>
        
        <div className="flex-1">
          <h3 className={`font-semibold text-lg leading-tight ${isClaimed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{item.date}</p>
        </div>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={() => onClaim(item)}
          disabled={isClaimed}
          className={`flex-1 py-3.5 rounded-2xl font-semibold text-[15px] transition-all active:scale-[0.98] ${
            isClaimed 
              ? 'bg-gray-100 text-gray-400' 
              : 'bg-[#2D60FF] text-white shadow-[0_4px_12px_rgba(45,96,255,0.25)]'
          }`}
        >
          {isClaimed ? 'Đã Nhận' : 'Nhận Ngay'}
        </button>
        
        <button
          onClick={() => onShare(item)}
          className="px-5 bg-[#F0F2F5] text-gray-700 rounded-2xl font-semibold transition-all active:scale-[0.98] flex items-center justify-center"
        >
          <Share2 size={20} />
          <span className="ml-2 hidden sm:inline">Chia sẻ</span>
        </button>
      </div>
    </div>
  );
};

export default RewardCard;
