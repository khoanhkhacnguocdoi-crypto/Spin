
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
import RewardCard from '../components/RewardCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { rewardService } from '../services/rewardService';
import { RewardItem, RewardType, ClaimedStatus } from '../types';

interface RewardListScreenProps {
  type: RewardType;
  title: string;
}

const RewardListScreen: React.FC<RewardListScreenProps> = ({ type, title }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [rewards, setRewards] = useState<RewardItem[]>([]);
  const [claimed, setClaimed] = useState<ClaimedStatus>(rewardService.getClaimedStatus());

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await rewardService.fetchRewards();
      // Filter by type and sort newest first (assuming ID order or date logic)
      const filtered = data
        .filter(item => item.type === type)
        .sort((a, b) => {
           // Basic string date sort for the mock format DD/MM/YYYY
           const dateA = a.date.split('/').reverse().join('');
           const dateB = b.date.split('/').reverse().join('');
           return dateB.localeCompare(dateA);
        });
      setRewards(filtered);
      setLoading(false);
    };
    loadData();
  }, [type]);

  const handleClaim = (item: RewardItem) => {
    // Open in external browser/intent
    window.open(item.link, '_blank');
    
    // Mark as claimed locally
    rewardService.markAsClaimed(item.id);
    setClaimed(prev => ({ ...prev, [item.id]: true }));
  };

  const handleShare = (item: RewardItem) => {
    rewardService.shareLink(item);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col max-w-lg mx-auto shadow-xl">
      <AppBar title={title} showBack onBack={() => navigate(-1)} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 no-scrollbar">
        {loading ? (
          <LoadingSkeleton />
        ) : rewards.length > 0 ? (
          <div className="pb-8">
            <div className="mb-4 px-2 flex justify-between items-center">
                <span className="text-gray-500 font-medium">Tìm thấy {rewards.length} link thưởng</span>
            </div>
            {rewards.map(item => (
              <RewardCard 
                key={item.id} 
                item={item} 
                isClaimed={!!claimed[item.id]} 
                onClaim={handleClaim}
                onShare={handleShare}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-20 text-gray-400">
            <p className="text-lg">Hiện chưa có link mới.</p>
            <p className="text-sm">Vui lòng quay lại sau!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardListScreen;
