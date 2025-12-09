import React from 'react';
import BottomNav from './BottomNav';

const StatsScreen: React.FC = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
      <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col group/design-root overflow-x-hidden pb-24">
        
        {/* Header */}
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

        {/* Action Buttons */}
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] w-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined">photo_camera</span>
              <span className="truncate">Scan with Camera</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-primary/20 dark:bg-primary/30 text-primary dark:text-blue-300 text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-primary/30 transition-colors">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="truncate">Add Meal Manually</span>
            </button>
          </div>
        </div>

        {/* Quick Stats (Expanded View) */}
        <h2 className="text-base-text dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Quick Stats</h2>
        <div className="grid grid-cols-2 gap-4 px-4">
          <div className="col-span-2 flex flex-col gap-1.5 rounded-2xl p-4 glassmorphism">
            <p className="text-muted-gray dark:text-gray-300 text-sm font-medium leading-normal">Today's Calories</p>
            <p className="text-deep-blue dark:text-blue-300 tracking-tighter text-5xl font-black leading-tight">1,250</p>
          </div>
          <div className="flex flex-col gap-1.5 rounded-2xl p-4 glassmorphism">
            <p className="text-muted-gray dark:text-gray-300 text-sm font-medium leading-normal">Meals Logged</p>
            <p className="text-deep-blue dark:text-blue-300 tracking-tighter text-5xl font-black leading-tight">3</p>
          </div>
          <div className="flex flex-col gap-1.5 rounded-2xl p-4 glassmorphism">
            <p className="text-muted-gray dark:text-gray-300 text-sm font-medium leading-normal">AI Confidence</p>
            <p className="text-deep-blue dark:text-blue-300 tracking-tighter text-5xl font-black leading-tight">92<span className="text-3xl">%</span></p>
          </div>
        </div>

        {/* Recent Meals */}
        <h2 className="text-base-text dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">Recent Meals</h2>
        <div className="flex flex-col gap-3 px-4">
          <div className="flex items-center gap-4 rounded-xl p-3 glassmorphism">
            <div className="h-16 w-16 shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxBclBcaI0r0qI7fpJ2hxbZ8sWqu_Raq90QXd6c8EnBLLA4sdGzyARI4VGKgHJEN2ClNSwkjEaUjAHb6rxbXmWnyRYrZrmkcKlZ0mdKX8vID_L4EWDnDf6BH_4T-8rl-daNLhvHgHWD8PtKSCun0ACgx3H3HXZSlyTMTbJzZifRixGkLagvLUitLVDJI0bPOU1fUrC06--8Iu4VtdPZ3RzbwyomxAcD1-q9UO6Djvfd_ghR-nmSXTiDZSufTHVRIVo8YeneT8PNUGQ")' }}></div>
            <div className="flex-1">
              <p className="font-semibold text-base-text dark:text-white">Chicken Caesar Salad</p>
              <p className="text-sm text-muted-gray dark:text-gray-300">450 Cal | 30g P | 22g F</p>
            </div>
            <span className="material-symbols-outlined text-muted-gray dark:text-gray-400">chevron_right</span>
          </div>
          <div className="flex items-center gap-4 rounded-xl p-3 glassmorphism">
            <div className="h-16 w-16 shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD84R0VEKLwuYBlkCpRltwp1pZD2MGrSGvq-qFcD_pGlB4nS7AeEKVN7x-R691VmJ4V6fAnkFMVk8v1WLDh3agU62-sGtmceJoa-A_hJ8k-r7_j7cmiB3EbkgIpSvyVtcMwLSvcDkypIVFhgNucIeCEHUKXWgU0lsBcWGWwZbPMKMKptc-NM5BURgfyY1WJmvV8ZY3j6Ail75PPmqyNEFMxYqW5j7x3KNRvPVDMO0Zfid7MqKOn6OCz9Eo9-9-Hdzs6J8bEWiJ_esWs")' }}></div>
            <div className="flex-1">
              <p className="font-semibold text-base-text dark:text-white">Margherita Pizza</p>
              <p className="text-sm text-muted-gray dark:text-gray-300">680 Cal | 25g P | 30g F</p>
            </div>
            <span className="material-symbols-outlined text-muted-gray dark:text-gray-400">chevron_right</span>
          </div>
          <div className="flex items-center gap-4 rounded-xl p-3 glassmorphism">
            <div className="h-16 w-16 shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqWEE8eccFbrNGvarDmiWCXHqmu9MZQ3gAS4_4bY-O-3ih_F75a4UemgWzea8nE9vgTDTaobHBkigSgwkkM51f8MODLBudDmSwVp8XKM9caewevYSnEF6pg1KpocdPx_8s5IMmxFJpmJu6oojaKJ5yETtODw1Ll0WnzHU0gRyCxnXWp2PU8sHpl2nHZsFWPqlEse5oPCcrwYWqzGwU0kq-HUiyWNkzrVdGgXlBd531fmyCnn5OelO1DY90sBSJGAQlVWL3vTpBP5z3")' }}></div>
            <div className="flex-1">
              <p className="font-semibold text-base-text dark:text-white">Oatmeal Pancakes</p>
              <p className="text-sm text-muted-gray dark:text-gray-300">320 Cal | 12g P | 15g F</p>
            </div>
            <span className="material-symbols-outlined text-muted-gray dark:text-gray-400">chevron_right</span>
          </div>
        </div>

        {/* Weekly Calorie Trend Chart */}
        <h2 className="text-base-text dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">Weekly Calorie Trend</h2>
        <div className="mx-4 mb-24 rounded-xl p-4 glassmorphism">
          <div className="flex h-48 w-full items-end justify-between gap-2">
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-full bg-primary" style={{ height: '60%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">Mon</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-full bg-primary" style={{ height: '75%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">Tue</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-full bg-primary" style={{ height: '50%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">Wed</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-full bg-primary" style={{ height: '80%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">Thu</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-full bg-primary" style={{ height: '65%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">Fri</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-full bg-primary" style={{ height: '90%' }}></div>
              <p className="text-xs font-medium text-muted-gray dark:text-gray-300">Sat</p>
            </div>
            <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="w-full rounded-full bg-primary-dark" style={{ height: '62%' }}></div>
              <p className="text-xs font-bold text-deep-blue dark:text-blue-300">Sun</p>
            </div>
          </div>
        </div>
        
        <BottomNav />
      </div>
    </div>
  );
};

export default StatsScreen;