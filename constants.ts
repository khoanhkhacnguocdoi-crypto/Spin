
import { RewardItem, RewardType } from './types';

export const COLORS = {
  primary: '#2D60FF',
  secondary: '#E8F0FF',
  background: '#F8F9FA',
  text: '#1A1C1E',
  textSecondary: '#6C757D',
  white: '#FFFFFF',
  claimed: '#ADB5BD'
};

// Function to generate 100+ items if API fails or for initial demo
export const generateMockData = (): RewardItem[] => {
  const data: RewardItem[] = [];
  const now = new Date();
  
  for (let i = 0; i < 110; i++) {
    const date = new Date(now);
    date.setHours(date.getHours() - i * 6); // Spread across days/weeks
    
    const type = i % 2 === 0 ? RewardType.SPIN : RewardType.COIN;
    const amount = type === RewardType.SPIN 
      ? (Math.random() > 0.5 ? '25 Spins' : '10 Spins & Coins')
      : (Math.random() > 0.5 ? '2.000.000 Coins' : '1.500.000 Coins');

    data.push({
      id: `reward-${i}`,
      title: `${amount} - ${type === RewardType.SPIN ? 'Vòng Quay' : 'Vàng'} Miễn Phí`,
      date: date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      link: 'https://static.moonactive.net/static/coinmaster/reward-link.html?c=test_link',
      type: type,
      amount: amount
    });
  }
  return data;
};
