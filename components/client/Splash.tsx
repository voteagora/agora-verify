"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import { AirdropStats } from "@/components/client/AirdropStats";
import { Avatar, useModal } from "connectkit";
import { useAccount, useEnsName } from "wagmi";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export const Splash = () => {
  const { open, setOpen, openProfile } = useModal();
  const { isConnected, address } = useAccount();
  const { data: name } = useEnsName({ address });
  const session = useSession();

  return (
    <div className="border border-line bg-wash p-6 rounded-[24px] max-w-[650px]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-5xl font-bold text-center text-primary">
            {"Welcome to XXX Airdrop claim"}
          </div>
          <div className="text-md text-secondary text-center">
            {
              "Unlock your share of our exclusive airdrop – connect your wallet and verify your X account and get verified to claim your tokens at launch!"
            }
          </div>
        </div>
        <AirdropStats />

        <div className="flex flex-col gap-6">
          {isConnected ? (
            <SecondaryButton
              onClick={() => {
                openProfile();
              }}
            >
              <Avatar address={address} size={20} />
              <div className="font-medium">{name}</div>
            </SecondaryButton>
          ) : (
            <PrimaryButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              {"Connect Your Wallet"}
            </PrimaryButton>
          )}
          {isConnected && (
            <>
              {session.data ? (
                <SecondaryButton onClick={() => signOut()}>
                  <div className="font-medium">{`@${session.data?.user?.username} has been verified`}</div>
                </SecondaryButton>
              ) : (
                <PrimaryButton
                  onClick={() => {
                    signIn("twitter");
                  }}
                >
                  {"Verify your account on X"}
                </PrimaryButton>
              )}
            </>
          )}
        </div>
        <div className="text-center">
          {"View terms of service & privacy policy"}
        </div>
      </div>
    </div>
  );
};
