export default function cleanSet(set, startString) {
  if (!startString) return '';
  if (set instanceof Set === false) return '';
  return Array.from(set)
    .filter((each) => each.startsWith(startString))
    .map((each) => each.slice(startString.length))
    .join('-');
}
