export default function cleanSet(set, startString) {
  if (!startString) return '';
  return Array.from(set)
    .filter((each) => each.startsWith(startString))
    .map((each) => each.slice(startString.length))
    .join('-');
}
