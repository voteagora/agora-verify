"use client";

import { useAccount } from "wagmi";
import { XLogo } from "@/components/logos/XLogo";

export const XConnect = () => {
  const { isConnected } = useAccount();

  return (
    <div
      className={`flex flex-row p-4 border ${isConnected ? "border-blue-600 text-blue-600" : "border-gray-600 text-gray-600"} rounded-md justify-center gap-2 items-center`}
    >
      <XLogo className="w-4 h-8" fill={isConnected ? "#00FFFF" : "#CCCCCC"} />
      Verify X Account
    </div>
  );
};
