import React from "react";
import TokenAmountDisplay from "@/components/server/TokenAmountDisplay";

export const AirdropStats = () => {
  return (
    <div className="flex justify-evenly rounded-xl border border-line w-auto h-100 mb-4">
      <div className="flex flex-col text-center p-5">
        <div className="text-xs text-secondary">Total supply</div>
        <div className="font-medium">
          <TokenAmountDisplay amount={BigInt(0)} />
        </div>
      </div>

      <div className="border-r border-line"></div>

      <div className="flex flex-col text-center p-5">
        <div className="text-xs text-secondary">Eligible addresses</div>
        <div className="font-medium">
          <TokenAmountDisplay amount={BigInt(0)} />
        </div>
      </div>

      <div className="border-r border-line"></div>

      <div className="flex flex-col text-center p-5">
        <div className="text-xs text-secondary">Average allocation</div>
        <div className="font-medium">
          <TokenAmountDisplay amount={BigInt(0)} currency={"ETH"} />
        </div>
      </div>
    </div>
  );
};
