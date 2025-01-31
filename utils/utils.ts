/**
 * Check if a string is in scientific notation
 * @param input
 */
export function isScientificNotation(input: string) {
  const scientificNotationRegex = /^[+-]?\d+(\.\d+)?[eE][+-]?\d+$/;
  return scientificNotationRegex.test(input);
}

/**
 * Convert a string in scientific notation to precision BigInt
 * @param input
 */
export function scientificNotationToPrecision(input: string) {
  if (isScientificNotation(input)) {
    const parts = input.split("e");
    const base = parts[0].replace(".", "");
    const exponent = parseInt(parts[1], 10) - (base.length - 1);
    return BigInt(base) * BigInt(10) ** BigInt(exponent);
  } else {
    return BigInt(input);
  }
}

export function formatNumber(
  amount: string | bigint,
  decimals: number,
  maximumSignificantDigits = 4,
) {
  let bigIntAmount: bigint;

  if (typeof amount === "string") {
    // Handle potential scientific notation
    if (amount.includes("e")) {
      bigIntAmount = scientificNotationToPrecision(amount);
    } else {
      bigIntAmount = BigInt(amount);
    }
  } else {
    bigIntAmount = amount;
  }

  // Convert to standard unit
  const divisor = BigInt(10) ** BigInt(decimals);
  const wholePart = bigIntAmount / divisor;
  const fractionalPart = bigIntAmount % divisor;

  // Convert to number for formatting
  const standardUnitAmount =
    Number(wholePart) + Number(fractionalPart) / Number(divisor);

  const numberFormat = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: maximumSignificantDigits,
  });

  return numberFormat.format(standardUnitAmount);
}
