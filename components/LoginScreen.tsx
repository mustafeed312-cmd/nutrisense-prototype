import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4 group/design-root overflow-x-hidden font-display">
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30"></div>
      
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-4">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '36px' }}>nutrition</span>
          </div>
          <h1 className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold leading-tight">Welcome Back</h1>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-2">Log in to continue your health journey.</p>
        </div>

        <form onSubmit={handleLogin} className="flex w-full flex-col gap-4">
          <label className="flex flex-col w-full">
            <div className="relative flex w-full flex-1 items-stretch">
              <div className="text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="material-symbols-outlined">person</span>
              </div>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white/50 dark:bg-white/10 h-14 placeholder:text-[#617589] dark:placeholder:text-slate-500 pl-14 pr-4 text-base font-normal leading-normal shadow-sm border border-white/80 dark:border-white/10" 
                placeholder="Email or Username" 
                type="text" 
                defaultValue=""
              />
            </div>
          </label>
          <label className="flex flex-col w-full">
            <div className="relative flex w-full flex-1 items-stretch">
              <div className="text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white/50 dark:bg-white/10 h-14 placeholder:text-[#617589] dark:placeholder:text-slate-500 pl-14 pr-14 text-base font-normal leading-normal shadow-sm border border-white/80 dark:border-white/10" 
                placeholder="Password" 
                type="password" 
                defaultValue=""
              />
              <div className="text-slate-400 dark:text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 flex cursor-pointer items-center justify-center">
                <span className="material-symbols-outlined">visibility_off</span>
              </div>
            </div>
          </label>

          <div className="flex w-full justify-end mt-3">
            <a className="text-primary text-sm font-medium leading-normal underline cursor-pointer">Forgot Password?</a>
          </div>

          <button 
            type="submit"
            className="flex h-14 w-full flex-col items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold leading-normal text-white mt-6 shadow-md shadow-primary/30 hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal pt-8 text-center">
          Don't have an account? <a className="font-semibold text-primary underline cursor-pointer">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;