"use client";

import { useAccount } from "wagmi";
import { XLogo } from "@/components/logos/XLogo";

import { signIn, useSession, signOut } from "next-auth/react";

export const XConnect = () => {
  const { isConnected } = useAccount();
  const session = useSession();

  console.log(session);

  return (
    <div>
      {session.data ? (
        <div onClick={() => signOut()}>DIsconnect account</div>
      ) : (
        <div
          className={`flex flex-row p-4 border ${isConnected ? "border-blue-600 text-blue-600" : "border-gray-600 text-gray-600"} rounded-md justify-center gap-2 items-center`}
          onClick={() => signIn("twitter")}
        >
          <XLogo
            className="w-4 h-8"
            fill={isConnected ? "#00FFFF" : "#CCCCCC"}
          />
          {"Connect your account"}
        </div>
      )}
    </div>
  );
};
