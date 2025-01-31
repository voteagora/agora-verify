"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { AirdropStats } from "@/components/AirdropStats";
import { Avatar, useModal } from "connectkit";
import { useAccount, useEnsName } from "wagmi";

import { ButtonPrimary } from "@/components/ButtonPrimary";
import { ButtonSecondary } from "@/components/ButtonSecondary";

export const Splash = () => {
  const { isConnected, address } = useAccount();
  const { open, setOpen, openProfile } = useModal();
  const { data: name } = useEnsName({ address });

  const session = useSession();
  const hasSession = session.status === "authenticated";

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
          {/*Step 1 - Connect wallet */}
          {isConnected ? (
            <ButtonSecondary
              onClick={() => {
                openProfile();
              }}
            >
              <Avatar address={address} size={20} />
              <div className="font-medium">{name}</div>
            </ButtonSecondary>
          ) : (
            <ButtonPrimary
              onClick={() => {
                setOpen(!open);
              }}
            >
              {"Connect Your Wallet"}
            </ButtonPrimary>
          )}

          {/*Step 2 - Connect X account */}
          {isConnected && (
            <>
              {hasSession ? (
                <ButtonSecondary onClick={() => signOut()}>
                  <div className="font-medium">{`@${session.data.user.username} has been verified`}</div>
                </ButtonSecondary>
              ) : (
                <ButtonPrimary
                  onClick={() => {
                    signIn("twitter");
                  }}
                >
                  {"Verify your account on X"}
                </ButtonPrimary>
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
