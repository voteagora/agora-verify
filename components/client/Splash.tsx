"use client";

import { AirdropStats } from "@/components/client/AirdropStats";
import { ConnectKitButton } from "connectkit";
import { XConnect } from "@/components/client/XConnect";

export const Splash = () => {
  return (
    <div className="border border-gray-600 p-6 rounded-md max-w-lg">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-4xl font-bold text-center">
            Welcome to XXX Airdrop
          </div>
          <div className="text-md text-gray-400 text-center">
            Unlock your share of our exclusive airdrop – connect your wallet and
            verify your X account to claim your tokens!
          </div>
        </div>
        <AirdropStats />
        <ConnectKitButton />
        <XConnect />
      </div>
    </div>
  );
};
