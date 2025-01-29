"use client";

import React from "react";
import TokenAmountDisplay from "@/components/server/TokenAmountDisplay";

export const AirdropStats = () => {
  return (
    <div className="flex justify-evenly rounded-xl border border-gray-700 w-auto h-100 mb-4 bg-wash">
      <div className="flex flex-col text-center p-5">
        <div className="text-xs text-gray-400">Total supply</div>
        <div className="font-medium">
          <TokenAmountDisplay amount={BigInt(0)} />
        </div>
      </div>

      <div className="border-r border-gray-700"></div>

      <div className="flex flex-col text-center p-5">
        <div className="text-xs text-gray-400">Eligible addresses</div>
        <div className="font-medium">
          <TokenAmountDisplay amount={BigInt(0)} />
        </div>
      </div>

      <div className="border-r border-gray-700"></div>

      <div className="flex flex-col text-center p-5">
        <div className="text-xs text-gray-400">Average allocation</div>
        <div className="font-medium">
          <TokenAmountDisplay amount={BigInt(0)} currency={"ETH"} />
        </div>
      </div>
    </div>
  );
};
