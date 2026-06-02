import React from 'react';

export function MainFeedMockup() {
  return (
    <div className="bg-background text-on-background h-full w-full relative flex flex-col overflow-y-auto hide-scrollbar font-body-md antialiased rounded-[2.5rem]">
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
      
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/5 flex justify-between items-center px-4 h-14 shrink-0 rounded-t-[2.5rem]">
        <div className="flex items-center gap-2 text-primary">
          <div className="font-headline-lg text-[20px] font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">Festify</div>
        </div>
        <div className="relative text-on-surface cursor-pointer">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-tertiary rounded-full border border-background"></span>
        </div>
      </header>

      <main className="w-full flex-1 pb-8">
        {/* Story Bar */}
        <section className="w-full overflow-x-auto hide-scrollbar pt-4 pb-2 px-4 mb-2">
          <div className="flex gap-3 items-start w-max">
            {/* Tu noche + */}
            <div className="flex flex-col items-center gap-1 cursor-pointer group">
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-primary to-tertiary shadow-[0_0_12px_rgba(210,187,255,0.3)]">
                <div className="w-full h-full bg-surface-container rounded-full flex items-center justify-center border-[2px] border-background relative overflow-hidden">
                  <img alt="Tu perfil" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlx8I7eUJ7wmJbToMg_WaWgXeTBoyBj7zpEaK4AJn2MSWIt0PvYUGz7enoNAvKa1PeapaTNCR8OBAgB7IXly-AQ6uAJspzN2BVmriv2JFjJgLad6IKhoDM-M7yqjGMQTXc5SK8rthKEzGFgqwytOVKe8sQBcTxSO4RMzuQGe8ZnNghS38up0eQLNYqb6aguuq0xSgQNX2tExchMP_F90A1tjof3MiRDeXbDhVSdWYQSvp8sa2osLDTwmVUofCwi4gZHRsa6ysQtTY"/>
                  <span className="material-symbols-outlined absolute text-on-background shadow-lg">add</span>
                </div>
              </div>
              <span className="text-caption-caps text-[9px] text-on-surface">Tu noche</span>
            </div>

            {/* Story 1 */}
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <div className="w-14 h-14 rounded-full p-[2px] bg-secondary shadow-[0_0_8px_rgba(76,215,246,0.3)]">
                <img alt="User 1" className="w-full h-full rounded-full object-cover border-[2px] border-background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcOXRN5rqrsAmgpNvaQ-U-Gyh2EYZOqiqG8OMdvuR5kxHOvNBabZrdFWCXI7Dy7XjGTwT8r2J1ZzCymqY5C2zU-CeSLrh8Gj0JvnIsIHFHplxMoUuHdSMImXujBu7g--qoFvHW2grTFs2cAoGECkko1fGTnyJ3eNSrH_-BDzHdciRLD3aBwVtZJ8FI06QkVRCrs8RFdXjNa8vZgoAdWnNpeQ0ofDWt7OlDNW22yKNGjubpCk-9yCUuQimY0RJLs4PVcgKx01HZ85I"/>
              </div>
              <span className="text-caption-caps text-[9px] text-on-surface-variant">Alex R.</span>
            </div>

            {/* Story 2 */}
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <div className="w-14 h-14 rounded-full p-[2px] bg-surface-variant">
                <img alt="User 2" className="w-full h-full rounded-full object-cover border-[2px] border-background opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN11HiTFGI0EMDi9-8dp3ZRqWj_YoB3PWowEvW9_1K990cxl88_loH7V4UGB3u1FD6Q_exeXHCgC6zExTlvH0Jza9o584IJeiaR_bL21eMfeJfnlSw7mzK0KjpPKfXafUCRQF-EUMGDxjTIccW7qysbuM7ruiJtIjEo7_UaVdVv1GA4NjdEd8pfNBawRgcupItw6A0qUbjrkt2WVXxjFWML7HpAF3InoJN3cCoA8jBdwdb8kv0Tv8MMpQG9-zzL11wnbSLbrLDP8A"/>
              </div>
              <span className="text-caption-caps text-[9px] text-on-surface-variant">The Crew</span>
            </div>
            
            {/* Story 3 */}
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <div className="w-14 h-14 rounded-full p-[2px] bg-surface-variant">
                <img alt="User 3" className="w-full h-full rounded-full object-cover border-[2px] border-background opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcpGhniby2NNY2oGQGQzj-qx-QXQTLu6gF-ufmqK25lMF-2QkAcvPkrSULuf1nz3dh_3Rxd0fmw0aE_wEYoyQ5Av5vQf7mCCLJ_mlAPw2QulosevPkrSULuf1nz3dh_3Rxd0fmw0aE_wEYoyQ5Av5vQf7mCCLJ_mlAPw2QmytR9tBtsmKBmj2I3X7_xy1i7Bx4NEY0y6DUFJ9eWq6Q7HFhNk0isE9mxNEeclYtgevSGdHskhlRSIgkNmPqM8y8SZuza_Jtss-f5KNnxRUC4JNW7DB6H8RL3-db8ipbzqCk79PfVGOuHiM-1wdBUjozWPy6LZum9H8"/>
              </div>
              <span className="text-caption-caps text-[9px] text-on-surface-variant">DJ Lio</span>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="w-full overflow-x-auto hide-scrollbar px-4 mb-4">
          <div className="flex gap-2 w-max">
            <button className="bg-secondary/10 border border-secondary text-secondary px-3 py-1 rounded-full font-body-md text-[12px] whitespace-nowrap">
                Todos
            </button>
            <button className="bg-surface-container-low border border-white/10 text-on-surface-variant px-3 py-1 rounded-full font-body-md text-[12px] whitespace-nowrap">
                Mis grupos
            </button>
            <button className="bg-surface-container-low border border-white/10 text-on-surface-variant px-3 py-1 rounded-full font-body-md text-[12px] whitespace-nowrap flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">stars</span>
                VIPS
            </button>
          </div>
        </section>

        {/* Feed Vertical */}
        <div className="flex flex-col gap-4 px-4">
          {/* Tarjeta 1 */}
          <article className="bg-surface/60 backdrop-blur-[20px] rounded-xl border border-white/10 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <img alt="Club scene" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK3182Srj6o7C_RAMIIIXJOb8zYtV9WC_m3E-GWCqC-_D1ySrq948P4KWhWxSxnz7ghJuyURTlgl5u5WQaGrX_fdRn7U_HIsvqsN-N70NHUN-uk9ogr9QQruf68oJHuvEIcoLPF17lOjop4IjLFIz429JT9AO_-s30Sc2PuPWBj6qG0cCcEbLE6iJttqtVwaJiEuX_LMmKgPzNhZaFwFK4sny-XefMUYiw7vhmNqN_P7jrjQPJyCyLU_MTnUk6YMOlRDmGLHNEUMQ"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface/20 to-transparent"></div>
              {/* Puntuación */}
              <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-md rounded-lg px-2 py-0.5 border border-white/10 shadow-[0_0_12px_rgba(210,187,255,0.2)]">
                <span className="font-display-hero text-[20px] font-bold text-primary tracking-tighter">9.4</span>
              </div>
            </div>
            
            <div className="p-3 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img alt="Alex avatar" className="w-8 h-8 rounded-full border border-white/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdOGk0LpqhyzCEl77fketN0pCAUKH8SEO3Fj9I3xjC9WT0onHwlEbQrnwGei_HSAUK90G6GCy4TP8ImHSbmPFLjxt72Th7nC7_Z1wJY5oUoxcE0I8zmXoj5HJxncsRZY3jwVW7wrQLQYPYlg_S68xUOi3d35mbTQUc11U4eZ-gRkN2xoTaCGc7GYfFulk_UGsG9bOu6WBtgeUWHDxdAQWVwo2WcL_dfB3AQlYM4PlTsOHj3cPQR7zKJkyYP5In1YdjBMYzJBg3JKQ"/>
                  <div>
                    <h3 className="font-body-lg text-[13px] font-semibold text-on-surface leading-tight">Alex R.</h3>
                    <div className="flex items-center gap-0.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[12px]">location_on</span>
                      <span className="font-body-md text-[11px]">Pacha VIP, Madrid</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-full border border-white/5">
                  <span className="material-symbols-outlined text-secondary text-[14px]">local_bar</span>
                  <span className="font-data-mono text-[11px] text-on-surface">x4</span>
                </div>
              </div>
              
              <p className="font-body-md text-[12px] text-on-surface-variant leading-tight">
                Mesa VIP impecable hoy. La energía de la pista está a otro nivel. 🚀
              </p>
              
              <div className="flex gap-2 mt-1">
                <button className="flex items-center gap-1 bg-surface-container-low hover:bg-surface-variant transition-colors px-2.5 py-1 rounded-full border border-white/5">
                  <span className="material-symbols-outlined text-tertiary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                  <span className="font-data-mono text-[10px] text-on-surface">12</span>
                </button>
                <button className="flex items-center gap-1 bg-surface-container-low hover:bg-surface-variant transition-colors px-2.5 py-1 rounded-full border border-white/5">
                  <span className="material-symbols-outlined text-primary text-[14px]">social_leaderboard</span>
                  <span className="font-data-mono text-[10px] text-on-surface">3</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
