import React from 'react';
import BottomNav from './BottomNav';
import { useNavigate } from 'react-router-dom';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
      <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col group/design-root overflow-x-hidden pb-24">
        
        {/* Top App Bar */}
        <div className="flex items-center bg-transparent p-4 pb-2 justify-between sticky top-0 z-10 glassmorphism">
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6ngt2uVSGVCS0t9ZIzDJVGh7XwbU7u2KSJ3cwQYfv0S7FgFQyl5Q2NTujLkObYX5iNry2O3jtXlKcPbCTMkAzhkctlyHz_s_U1UBEtQMG-Jw8jOMKENFWmDUzSRJK8XYaopTdlEid3qanZU5xqytRPyJhRjSRMZ6zkhiWadGnhX2XmQ9QSQ9BUmTaRifKH47TzPPugpvtZkLmGB56ALSI4UxHV2f5PIJSFCMspgfGR0vFaGDVLcv157UsGFKhdrHqj_jBjx-cSUUC")' }}></div>
            <h2 className="text-base-text dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Welcome, Alex!</h2>
          </div>
          <div className="flex w-12 items-center justify-end">
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-base-text dark:text-white">
              <span className="material-symbols-outlined text-2xl">notifications</span>
            </button>
          </div>
        </div>

        {/* Action Buttons & Quick Stats */}
        <div className="flex gap-4 p-4">
          <div className="flex flex-col gap-4">
            <button className="flex flex-col items-center justify-center gap-1.5 overflow-hidden rounded-lg h-24 p-2 bg-primary text-white text-sm font-bold leading-normal tracking-[-0.01em] w-24 shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-3xl">photo_camera</span>
              <span className="text-center">Scan with Camera</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-1.5 overflow-hidden rounded-lg h-24 p-2 bg-primary/20 dark:bg-primary/30 text-primary dark:text-blue-300 text-sm font-bold leading-normal tracking-[-0.01em] w-24 hover:bg-primary/30 transition-colors">
              <span className="material-symbols-outlined text-3xl">add_circle</span>
              <span className="text-center">Add Meal Manually</span>
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex min-w-[100px] flex-1 flex-col gap-0.5 rounded-xl p-3 glassmorphism">
              <p className="text-muted-gray dark:text-gray-300 text-xs font-medium leading-normal">Meals Logged</p>
              <p className="text-deep-blue dark:text-blue-300 tracking-tighter text-2xl font-black leading-tight">3</p>
            </div>
            <div className="flex min-w-[100px] flex-1 flex-col gap-0.5 rounded-xl p-3 glassmorphism">
              <p className="text-muted-gray dark:text-gray-300 text-xs font-medium leading-normal">Today's Calories</p>
              <p className="text-deep-blue dark:text-blue-300 tracking-tighter text-2xl font-black leading-tight">1,250</p>
            </div>
            <div className="flex min-w-[100px] flex-1 flex-col gap-0.5 rounded-xl p-3 glassmorphism">
              <p className="text-muted-gray dark:text-gray-300 text-xs font-medium leading-normal">AI Confidence</p>
              <p className="text-deep-blue dark:text-blue-300 tracking-tighter text-2xl font-black leading-tight">92%</p>
            </div>
          </div>
        </div>

        {/* Recent Meals Section */}
        <h2 className="text-base-text dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-4">Recent Meals</h2>
        <div className="flex flex-col gap-3 px-4">
          <div className="flex flex-col gap-3 rounded-xl p-3 glassmorphism">
            <div className="h-32 w-full shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxBclBcaI0r0qI7fpJ2hxbZ8sWqu_Raq90QXd6c8EnBLLA4sdGzyARI4VGKgHJEN2ClNSwkjEaUjAHb6rxbXmWnyRYrZrmkcKlZ0mdKX8vID_L4EWDnDf6BH_4T-8rl-daNLhvHgHWD8PtKSCun0ACgx3H3HXZSlyTMTbJzZifRixGkLagvLUitLVDJI0bPOU1fUrC06--8Iu4VtdPZ3RzbwyomxAcD1-q9UO6Djvfd_ghR-nmSXTiDZSufTHVRIVo8YeneT8PNUGQ")' }}></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-base-text dark:text-white">Chicken Caesar Salad</p>
                <p className="text-sm text-muted-gray dark:text-gray-300">450 Cal | 30g P | 22g F</p>
              </div>
              <span className="material-symbols-outlined text-muted-gray dark:text-gray-400">chevron_right</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-xl p-3 glassmorphism">
            <div className="h-32 w-full shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD84R0VEKLwuYBlkCpRltwp1pZD2MGrSGvq-qFcD_pGlB4nS7AeEKVN7x-R691VmJ4V6fAnkFMVk8v1WLDh3agU62-sGtmceJoa-A_hJ8k-r7_j7cmiB3EbkgIpSvyVtcMwLSvcDkypIVFhgNucIeCEHUKXWgU0lsBcWGWwZbPMKMKptc-NM5BURgfyY1WJmvV8ZY3j6Ail75PPmqyNEFMxYqW5j7x3KNRvPVDMO0Zfid7MqKOn6OCz9Eo9-9-Hdzs6J8bEWiJ_esWs")' }}></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-base-text dark:text-white">Margherita Pizza</p>
                <p className="text-sm text-muted-gray dark:text-gray-300">680 Cal | 25g P | 30g F</p>
              </div>
              <span className="material-symbols-outlined text-muted-gray dark:text-gray-400">chevron_right</span>
            </div>
          </div>
        </div>

        {/* Nutrition Dashboard Chart */}
        <h2 className="text-base-text dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">Nutrition Dashboard</h2>
        <div className="mx-4 rounded-xl p-4 glassmorphism">
          <div className="flex justify-between items-center mb-4">
            <p className="text-base font-semibold text-base-text dark:text-white">7-Day Calorie Trend</p>
            <button onClick={() => navigate('/stats')} className="flex items-center gap-1 text-primary text-sm font-medium cursor-pointer hover:underline">
              <span>Details</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
          <div className="relative flex h-56 w-full items-end justify-between gap-2 border-l border-b border-gray-200 dark:border-gray-700 pl-2 pb-1">
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-t-md bg-primary/30" style={{ height: '60%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">M</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-t-md bg-primary/30" style={{ height: '75%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">T</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-t-md bg-primary/30" style={{ height: '50%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">W</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-t-md bg-primary/30" style={{ height: '80%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">T</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-t-md bg-primary/30" style={{ height: '65%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">F</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-t-md bg-primary/30" style={{ height: '90%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">S</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="relative w-full rounded-t-md bg-primary-dark" style={{ height: '62%' }}>
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-md bg-deep-blue px-2 py-1 text-xs font-bold text-white shadow-lg">1250</div>
                <div className="absolute -top-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-deep-blue"></div>
              </div>
              <p className="text-xs font-bold text-deep-blue dark:text-blue-300">S</p>
            </div>
          </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
};

export default HomeScreen;