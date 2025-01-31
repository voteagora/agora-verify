import { AgoraLogo } from "@/components/logos/AgoraLogo";
import { Splash } from "@/components/client/Splash";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/app/auth";

export default async function Home() {
  const session = await auth();

  if (session) {
    console.log(JSON.stringify(session.user));
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-16 row-start-2 items-center sm:items-start">
        <SessionProvider>
          <Splash />
        </SessionProvider>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        Governance powered by Agora{" "}
        <AgoraLogo className="w-4 h-4" fill="#0C2F2F" />
      </footer>
    </div>
  );
}
