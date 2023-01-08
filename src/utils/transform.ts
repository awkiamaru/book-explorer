export function formatValuesToQueryParams(value: String) {
  const words = value.split(" ");

  return words.join("+");
}
