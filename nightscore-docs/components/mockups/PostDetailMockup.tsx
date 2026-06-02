import React from 'react';
import Image from 'next/image';

export function PostDetailMockup() {
  return (
    <div className="font-body-md antialiased h-full w-full relative flex flex-col bg-surface overflow-y-auto hide-scrollbar rounded-[2.5rem] text-on-surface">
      <style dangerouslySetInnerHTML={{ __html: `
        .glass-card {
            background: rgba(19, 19, 24, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .neon-glow-primary {
            box-shadow: 0 0 24px rgba(124, 58, 237, 0.3);
        }

        .neon-glow-secondary {
            box-shadow: 0 0 24px rgba(76, 215, 246, 0.2);
        }

        .hero-gradient {
            background: linear-gradient(to bottom, rgba(19,19,24,0) 0%, rgba(19,19,24,0.4) 50%, #131318 100%);
        }

        .hide-scrollbar::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
      `}} />
      
      {/* Top Navigation */}
      <header className="absolute top-0 w-full z-50 flex justify-between items-center px-container-padding-h h-16 bg-background/40 backdrop-blur-md border-b border-white/5 rounded-t-[2.5rem]">
        <button aria-label="Volver" className="w-10 h-10 flex items-center justify-center rounded-full glass-card text-on-surface hover:text-secondary transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 300" }}>arrow_back</span>
        </button>
        <button aria-label="Opciones" className="w-10 h-10 flex items-center justify-center rounded-full glass-card text-on-surface hover:text-secondary transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 300" }}>more_horiz</span>
        </button>
      </header>

      {/* Hero Image Section */}
      <section className="relative w-full h-[400px] shrink-0">
        <img alt="Nightclub scene" className="absolute inset-0 w-full h-full object-cover rounded-t-[2.5rem]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_fmZpJkvdizdgLq9yQxs21_WUeEysrY5zKMHbdbOu_QHShGFt2iMptJBcAxrzlQepVW3t2NWf_BF7fIqnflJZWVJEdlykpMJUROMpwBuEECBItFeyAJ6BNxJ6S_fWp9wIJUKrXH0K_7VL5ya-_b8yj_YXQTFyPUAkoNZOeAr2TGp-1F03KDyW-YRFeuQwkf-lmtXxBr5UC6tZsLQ1-W12gaKFLg41_UfZXuNn3ZEsSliAQ71MRgMhv7Vwfk-DkwXQIsaRXh6kcCI"/>
        <div className="absolute inset-0 hero-gradient"></div>
        
        {/* Banner MVP Votación */}
        <div className="absolute bottom-6 left-container-padding-h right-container-padding-h">
          <div className="glass-card rounded-xl p-inline-md flex flex-col md:flex-row items-center justify-between border border-secondary/30 neon-glow-secondary gap-3 md:gap-0">
            <div className="flex items-center gap-inline-sm w-full">
              <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <div className="flex-1">
                <p className="font-body-md text-body-md text-on-surface leading-tight">Vota al MVP de la noche</p>
                <p className="font-caption-caps text-[10px] text-on-surface-variant">Termina en 2h</p>
              </div>
              <button className="bg-secondary/20 text-secondary border border-secondary/50 rounded-full px-3 py-1 font-caption-caps text-[10px] hover:bg-secondary/30 transition-colors whitespace-nowrap">
                  VOTAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="px-container-padding-h -mt-4 relative z-10 space-y-section-margin shrink-0 pb-32">
        {/* Header Info */}
        <header className="flex items-start gap-4">
          <div className="relative shrink-0">
            <img alt="User Avatar" className="w-14 h-14 rounded-full object-cover border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQltJDax-d8eJpgwdWzZsUlTJn8pES1t5nyY6i578bajLE5UHR98Egfy2iHY90zyPAnOSMvUELwujqyUmIv37g55VnhkekLFBaic3Y_1DOVPWDBtZ-KcGMp0XYzxFiKl1BvJi54LY8LZj5V6RdNoM_AlmvvUA17z7eBJy1OJfai-aEqJpPlb2RMECZv1DAF1KoF1d-_u--Xf8S2U2wQn-QJj2ccrik55RENFFp01zbxfc-q67f789PJoZX9UqgBhaEueE_dyFvRjE"/>
            <div className="absolute -bottom-2 -right-2 bg-surface rounded-full p-0.5">
              <div className="bg-primary-container text-on-primary-container rounded-full w-5 h-5 flex items-center justify-center font-caption-caps text-[8px]">
                Lvl4
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <div className="truncate pr-2">
                <h1 className="font-headline-md text-[18px] font-bold text-on-surface truncate">Alex Mercer</h1>
                <p className="font-body-md text-[12px] text-secondary truncate">Los Noctámbulos</p>
              </div>
              <p className="font-data-mono text-[10px] text-on-surface-variant whitespace-nowrap pt-1">03:45 AM</p>
            </div>
            <p className="font-body-lg text-[14px] leading-snug text-on-surface-variant">
              Noche increíble en la capital. El set del DJ estuvo espectacular.
            </p>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-card-gap">
          {/* Vibra Card */}
          <div className="glass-card rounded-xl p-3 flex flex-col justify-between aspect-square">
            <div>
              <h2 className="font-caption-caps text-[10px] text-on-surface-variant mb-1">SCORE GENERAL</h2>
              <div className="flex items-end gap-1">
                <span className="font-display-hero text-[32px] font-bold leading-none text-primary bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">8.5</span>
                <span className="font-data-mono text-[12px] text-on-surface-variant mb-1">/10</span>
              </div>
            </div>
            <div>
              <h3 className="font-caption-caps text-[10px] text-on-surface-variant mb-1">VIBRA</h3>
              <div className="inline-flex items-center gap-1 bg-tertiary-container/30 text-tertiary-fixed border border-tertiary-container rounded-full px-2 py-0.5">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                <span className="font-body-md text-[12px]">Épica</span>
              </div>
            </div>
          </div>

          {/* Drinks Card */}
          <div className="glass-card rounded-xl p-3 flex flex-col aspect-square">
            <h2 className="font-caption-caps text-[10px] text-on-surface-variant mb-2">LA NOCHE</h2>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                    <span className="material-symbols-outlined text-[16px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>liquor</span>
                  </div>
                  <span className="font-body-md text-[13px] text-on-surface">Copas</span>
                </div>
                <span className="font-data-mono text-[12px] text-primary font-bold">x3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-white/5">
                    <span className="material-symbols-outlined text-[16px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>sports_bar</span>
                  </div>
                  <span className="font-body-md text-[13px] text-on-surface">Cervez..</span>
                </div>
                <span className="font-data-mono text-[12px] text-tertiary font-bold">x2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <section className="space-y-4">
          <h3 className="font-caption-caps text-[10px] text-on-surface-variant ml-2 border-b border-white/5 pb-2">COMENTARIOS (12)</h3>
          
          <div className="flex gap-3">
            <img alt="Commenter Avatar" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB8ogOF-lewbauNYX3oxqZOCbLFU7O9jYE-nGtMhts3S5f6x7mV9g76kIKTBjf58xbt4H6yAGwAX-ev65b2hqEmq0vQmanIDSdn3Jbvl2Ps5T2aRPmcWB0rL_MQISsVFzYofNBAqgQG8K-w1lCHFni_2vt3yt6HdCRPYdWPzJadVsTSwm_zjoKokrpNqqv0h4GmO4kOrA4AC9cTskQUkn3wqDes5ToXrPeGMA-TOMNhcecOEgqOl4DGm7d8ND2OAFxSDedhZg9PpY"/>
            <div className="flex-1 glass-card rounded-2xl rounded-tl-none p-3">
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-body-md text-[13px] text-on-surface font-semibold">David K.</span>
                <span className="font-data-mono text-[9px] text-on-surface-variant">Hace 2h</span>
              </div>
              <p className="font-body-md text-[13px] text-on-surface-variant">La próxima no me la pierdo. Qué locura de noche! 🔥</p>
            </div>
          </div>
          
          <button className="w-full text-center font-caption-caps text-[10px] text-secondary pt-2">
            VER MÁS COMENTARIOS
          </button>
        </section>
      </main>

      {/* Floating Comment Input */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-surface/80 backdrop-blur-xl border-t border-white/5 z-50 rounded-b-[2.5rem]">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input className="w-full bg-surface-container-low border border-white/10 rounded-full py-2 px-3 pl-4 pr-10 font-body-md text-[13px] text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors placeholder:text-on-surface-variant" placeholder="Comentar..." type="text"/>
          </div>
          <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-container to-tertiary-container flex items-center justify-center text-white neon-glow-primary hover:opacity-90 transition-opacity shrink-0">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
