import { AgoraLogo } from "@/components/logos/AgoraLogo";
import { Splash } from "@/components/client/Splash";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-16 row-start-2 items-center sm:items-start">
        <Splash />
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        Governance powered by Agora{" "}
        <AgoraLogo className="w-4 h-4" fill="#FFFFFF" />
      </footer>
    </div>
  );
}
