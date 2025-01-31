import { Agora } from "@/components/logos/Agora";
import { Splash } from "@/components/Splash";
import { SessionProvider } from "next-auth/react";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-16 row-start-2 items-center sm:items-start">
        <SessionProvider>
          <Splash />
        </SessionProvider>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        Governance powered by Agora <Agora className="w-4 h-4" fill="#0C2F2F" />
      </footer>
    </div>
  );
}
