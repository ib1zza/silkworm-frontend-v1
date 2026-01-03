/**
 * Formats a number into Russian price format with space as thousand separator
 * @param price - The price in numeric format (e.g., 3848)
 * @returns Formatted price string with thousand separators and ₽ symbol (e.g., "3 848 ₽")
 */
export function formatPriceToRUB(price: number | string): string {
  // Convert to number if string is provided
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  if (isNaN(numericPrice)) {
    throw new Error("Invalid price value");
  }

  // Format the number with thousand separators (space)
  const formatted = Math.floor(numericPrice)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .replace(/\.\d+/, ""); // Remove decimal part if any

  // Add ruble symbol
  return `${formatted} ₽`;
}
