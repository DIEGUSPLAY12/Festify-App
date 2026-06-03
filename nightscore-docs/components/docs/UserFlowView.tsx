"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMockupsStore } from "@/lib/store/mockupsStore";
import { MOCKUP_SCREENS, MockupScreen } from "@/lib/docs/mockups-data";
import { PhoneFrame } from "./PhoneFrame";
import { cn } from "@/lib/utils";

const FLOW_PHASES = [
  {
    id: "fase1",
    name: "Primer contacto",
    color: "#7C3AED", // violeta
    screenIds: ["ns-02a-onboarding", "ns-02b-onboarding", "ns-02c-onboarding", "ns-03-age-verification", "ns-04-login-register", "ns-06-profile-setup"]
  },
  {
    id: "fase2",
    name: "Primera noche",
    color: "#EC4899", // fucsia
    screenIds: ["ns-07-bottom-nav", "ns-08-feed", "ns-10-stepper", "ns-11-step-photos", "ns-12-step-drinks", "ns-13-step-details", "ns-14-step-publish"]
  },
  {
    id: "fase3",
    name: "Vida social",
    color: "#06B6D4", // cian
    screenIds: ["ns-15-group-list", "ns-16-group-feed", "ns-17-group-chat", "ns-22-mvp-vote", "ns-23-mvp-result"]
  },
  {
    id: "fase4",
    name: "Mi espacio",
    color: "#F59E0B", // ámbar
    screenIds: ["ns-24-my-profile", "ns-27-achievements", "ns-30a-recap"]
  }
];

export function UserFlowView() {
  const setOpenedScreen = useMockupsStore(state => state.setOpenedScreen);

  return (
    <div className="flex flex-col gap-16 py-8">
      {FLOW_PHASES.map((phase, pIdx) => {
        const screens = phase.screenIds.map(id => MOCKUP_SCREENS.find(s => s.id === id)).filter(Boolean) as MockupScreen[];

        return (
          <motion.div 
            key={phase.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: pIdx * 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Cabecera Fase */}
            <div className="flex items-center gap-4 px-4 sm:px-6">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-white text-xl"
                style={{ backgroundColor: `${phase.color}20`, color: phase.color }}
              >
                {pIdx + 1}
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">{phase.name}</h3>
                <p className="text-ns-muted text-sm">{screens.length} pasos en esta fase</p>
              </div>
            </div>

            {/* Scroll horizontal de pantallas */}
            <div className="flex overflow-x-auto pb-8 pt-4 px-4 sm:px-6 custom-scrollbar snap-x snap-mandatory items-center">
              {screens.map((screen, idx) => (
                <div key={screen.id} className="flex items-center shrink-0 snap-start">
                  
                  {/* Tarjeta clicable */}
                  <div 
                    className="flex flex-col w-[200px] group cursor-pointer"
                    onClick={() => setOpenedScreen(screen.id)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="relative transition-transform duration-300 group-hover:-translate-y-2">
                      <PhoneFrame screen={screen} className="shadow-2xl ring-1 ring-[rgba(255,255,255,0.05)]" />
                      
                      {/* Sombra de hover (color fase) */}
                      <div 
                        className="absolute inset-0 rounded-[38px] opacity-0 group-hover:opacity-40 blur-[24px] transition-opacity duration-300 -z-10"
                        style={{ backgroundColor: phase.color }}
                      />
                    </div>
                    
                    <div className="mt-4 text-center">
                      <span className="text-[10px] font-mono text-ns-muted block mb-1">{screen.code}</span>
                      <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">{screen.name}</span>
                    </div>
                  </div>

                  {/* Flecha conectora (salto) */}
                  {idx < screens.length - 1 && (
                    <div className="mx-6 sm:mx-8 flex items-center justify-center relative">
                      <motion.div 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center"
                      >
                        <ArrowRight 
                          className="w-6 h-6 opacity-60" 
                          style={{ color: phase.color }} 
                          aria-hidden="true" 
                        />
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
