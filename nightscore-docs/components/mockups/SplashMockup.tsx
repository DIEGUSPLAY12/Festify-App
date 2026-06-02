import React from 'react';

export function SplashMockup() {
  return (
    <div className="bg-surface-container-lowest text-on-surface h-full w-full relative overflow-hidden flex flex-col items-center justify-center antialiased rounded-[2.5rem]">
      <style dangerouslySetInnerHTML={{ __html: `
        .gradient-text {
            background: linear-gradient(135deg, #d2bbff 0%, #4cd7f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
        }
        
        @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        .animate-loading {
            animation: loading-bar 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}} />
      
      {/* Ambient Light Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-container rounded-full mix-blend-screen blur-[120px] animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary-container rounded-full mix-blend-screen blur-[120px] animate-pulse-slow" style={{ animationDelay: '-4s' }}></div>
      
      {/* Main Content Canvas */}
      <div className="z-10 flex flex-col items-center justify-center w-full px-container-padding-h">
        {/* Stylized Logo Symbol */}
        <div className="relative flex items-center justify-center w-32 h-32 mb-8">
          {/* Glow behind icon */}
          <div className="absolute inset-0 bg-primary-container/40 rounded-full blur-2xl"></div>
          {/* Glassmorphism Container for Icon */}
          <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-surface/40 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(124,58,237,0.2)]">
            <span className="material-symbols-outlined text-display-hero gradient-text" style={{ fontVariationSettings: "'FILL' 1" }}>local_bar</span>
          </div>
        </div>
        
        {/* Typography Cluster */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="font-display-hero text-display-hero gradient-text tracking-tighter">NightScore</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[280px]">
            Tu noche. Tu historia. Tu score.
          </p>
        </div>
      </div>
      
      {/* Subtle Loading Bar */}
      <div className="absolute bottom-24 w-48 h-1 bg-surface-container-highest rounded-full overflow-hidden shadow-[0_0_15px_rgba(76,215,246,0.3)]">
        <div className="h-full w-full bg-gradient-to-r from-primary to-secondary rounded-full animate-loading"></div>
      </div>
    </div>
  );
}
