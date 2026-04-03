import { VaultConfig } from "@/components/VaultConfig";
import { GitHubActions } from "@/components/GitHubActions";
import { TelegramStatus } from "@/components/TelegramStatus";
import { Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] relative overflow-hidden flex flex-col items-center">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0088cc]/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-6xl px-6 py-12 md:py-20 flex flex-col gap-12 z-10">
        
        {/* Header */}
        <header className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center justify-center p-4 glass rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.15)] mb-4">
            <Shield className="w-12 h-12 text-brand" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Authorized to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-[#0088cc]">Act</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Empower your agentic workflows with secure Auth0 Token Vaults, extending automated operations to GitHub and real-time Telegram notifications.
          </p>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
          <VaultConfig />
          <GitHubActions />
          <TelegramStatus />
        </div>
        
      </div>
    </main>
  );
}
