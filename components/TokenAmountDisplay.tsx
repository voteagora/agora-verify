import React, { useMemo } from "react";
import { formatNumber } from "@/utils/utils";

export default function TokenAmountDisplay({
  amount,
  decimals = 18,
  currency = "ETH",
  maximumSignificantDigits = 2,
}: {
  amount: string | bigint;
  decimals?: number;
  currency?: string;
  maximumSignificantDigits?: number;
}) {
  const formattedNumber = useMemo(() => {
    return formatNumber(amount, decimals, maximumSignificantDigits);
  }, [amount, decimals, maximumSignificantDigits]);

  return <span>{`${formattedNumber} ${currency}`}</span>;
}
