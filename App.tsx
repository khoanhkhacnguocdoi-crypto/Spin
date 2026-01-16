
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RewardListScreen from './screens/RewardListScreen';
import { RewardType } from './types';

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 shadow-2xl relative">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route 
            path="/spins" 
            element={<RewardListScreen type={RewardType.SPIN} title="🎯 Nhận Spin" />} 
          />
          <Route 
            path="/coins" 
            element={<RewardListScreen type={RewardType.COIN} title="💰 Nhận Coin" />} 
          />
        </Routes>
      </Router>
      
      {/* Simulation of Android Bottom Gesture Bar Area */}
      <div className="h-6 bg-[#F8F9FA] w-full flex items-center justify-center pointer-events-none">
          <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
