"use client";

import { useState } from "react";
import * as PhosphorIcons from "@phosphor-icons/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconItemProps {
  name: string;
  icon: any;
  colorClass?: string;
  bgClass?: string;
}

function IconItem({ name, icon: Icon, colorClass = "text-ns-violet", bgClass = "bg-ns-violet/10" }: IconItemProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`<${name} />`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex flex-col items-center justify-center p-4 h-24 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[#13131A] transition-all group relative",
        "hover:border-[rgba(255,255,255,0.1)] active:scale-95"
      )}
      title={`Copiar <${name} />`}
    >
      <div className={cn("absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100", bgClass)} />
      
      <div className="relative z-10 flex flex-col items-center gap-3">
        {copied ? (
          <Check className="w-6 h-6 text-ns-success" />
        ) : (
          <Icon className={cn("w-6 h-6 text-gray-400 transition-colors group-hover:text-current", colorClass)} weight="regular" />
        )}
        <span className="font-mono text-[10px] text-ns-muted group-hover:text-gray-300 transition-colors">
          {copied ? "Copiado!" : name}
        </span>
      </div>
    </button>
  );
}

export function IconGrid() {
  const navIcons = [
    { name: "House", icon: PhosphorIcons.House },
    { name: "UsersThree", icon: PhosphorIcons.UsersThree },
    { name: "PlusCircle", icon: PhosphorIcons.PlusCircle },
    { name: "Trophy", icon: PhosphorIcons.Trophy },
    { name: "User", icon: PhosphorIcons.User },
  ];

  const actionIcons = [
    { name: "Camera", icon: PhosphorIcons.Camera },
    { name: "Heart", icon: PhosphorIcons.Heart },
    { name: "ChatCircle", icon: PhosphorIcons.ChatCircle },
    { name: "ShareNetwork", icon: PhosphorIcons.ShareNetwork }, // Phosphor usa ShareNetwork en lugar de Share
    { name: "Bell", icon: PhosphorIcons.Bell },
    { name: "MagnifyingGlass", icon: PhosphorIcons.MagnifyingGlass },
    { name: "Plus", icon: PhosphorIcons.Plus },
    { name: "Trash", icon: PhosphorIcons.Trash },
  ];

  const stateIcons = [
    { name: "CheckCircle", icon: PhosphorIcons.CheckCircle, colorClass: "text-ns-success", bgClass: "bg-ns-success/10" },
    { name: "XCircle", icon: PhosphorIcons.XCircle, colorClass: "text-ns-error", bgClass: "bg-ns-error/10" },
    { name: "Warning", icon: PhosphorIcons.Warning, colorClass: "text-ns-warning", bgClass: "bg-ns-warning/10" },
    { name: "Info", icon: PhosphorIcons.Info, colorClass: "text-ns-info", bgClass: "bg-ns-info/10" },
    { name: "Star", icon: PhosphorIcons.Star, colorClass: "text-ns-warning", bgClass: "bg-ns-warning/10" },
    { name: "Crown", icon: PhosphorIcons.Crown, colorClass: "text-ns-warning", bgClass: "bg-ns-warning/10" },
  ];

  const contentIcons = [
    { name: "MapPin", icon: PhosphorIcons.MapPin },
    { name: "Calendar", icon: PhosphorIcons.Calendar },
    { name: "Clock", icon: PhosphorIcons.Clock },
    { name: "Lock", icon: PhosphorIcons.Lock },
    { name: "Globe", icon: PhosphorIcons.Globe },
    { name: "Eye", icon: PhosphorIcons.Eye },
  ];

  return (
    <div className="flex flex-col gap-12">
      
      <div>
        <h4 className="text-lg font-bold text-white mb-4">Navegación principal</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {navIcons.map(icon => <IconItem key={icon.name} {...icon} colorClass="text-white" bgClass="bg-white/10" />)}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-4">Acciones</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {actionIcons.map(icon => <IconItem key={icon.name} {...icon} colorClass="text-ns-violet" bgClass="bg-ns-violet/10" />)}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-4">Estados y feedback</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {stateIcons.map(icon => <IconItem key={icon.name} {...icon} />)}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-4">Contenido</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {contentIcons.map(icon => <IconItem key={icon.name} {...icon} colorClass="text-ns-cyan" bgClass="bg-ns-cyan/10" />)}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-4">Bebidas (Ilustraciones personalizadas)</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {["Cubata", "Cerveza", "Copa de vino", "Chupito", "Cóctel", "Shot"].map(bebida => (
            <div key={bebida} className="flex flex-col items-center justify-center p-4 h-24 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[#1A1A2E] border-dashed">
              <span className="text-2xl opacity-50 mb-2">🍹</span>
              <span className="text-[10px] text-ns-muted font-mono">{bebida}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-ns-muted mt-4">
          Estos iconos son ilustraciones personalizadas, no parte de Phosphor. Se cargarán como SVG inline.
        </p>
      </div>

    </div>
  );
}
