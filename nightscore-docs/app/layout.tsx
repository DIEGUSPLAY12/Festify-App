import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { CommandPalette } from "@/components/ui/CommandPalette";
import "./globals.css";

export const metadata: Metadata = {
  title: "NightScore | Tu noche. Tu historia. Tu score.",
  description: "Documentación oficial de NightScore, la plataforma que gamifica tus noches y salidas con amigos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="antialiased">
      <body className="min-h-full flex flex-col bg-ns-bg text-ns-text font-sans selection:bg-ns-violet/30 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ProgressBar />
          <CommandPalette />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

