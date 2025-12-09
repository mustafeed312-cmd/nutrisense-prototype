import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const getIconClass = (path: string) => 
    isActive(path) 
      ? "text-primary" 
      : "text-muted-gray dark:text-gray-400";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 mx-auto max-w-md border-t border-white/20 glassmorphism">
      <div className="flex h-20 items-center justify-around px-2 pb-4">
        <div onClick={() => navigate('/home')} className={`flex flex-col items-center gap-1 cursor-pointer ${getIconClass('/home')}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/home') ? "'FILL' 1" : "'FILL' 0" }}>home</span>
          <span className="text-xs font-bold">Home</span>
        </div>
        <div onClick={() => navigate('/goals')} className={`flex flex-col items-center gap-1 cursor-pointer ${getIconClass('/goals')}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/goals') ? "'FILL' 1" : "'FILL' 0" }}>menu_book</span>
          <span className="text-xs font-medium">Diary</span>
        </div>
        <div onClick={() => navigate('/stats')} className={`flex flex-col items-center gap-1 cursor-pointer ${getIconClass('/stats')}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/stats') ? "'FILL' 1" : "'FILL' 0" }}>pie_chart</span>
          <span className="text-xs font-medium">Reports</span>
        </div>
        <div onClick={() => navigate('/')} className={`flex flex-col items-center gap-1 cursor-pointer ${getIconClass('/')}`}>
          <span className="material-symbols-outlined">person</span>
          <span className="text-xs font-medium">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;