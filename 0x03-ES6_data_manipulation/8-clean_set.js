export default function cleanSet(set, startString) {
  if (!startString) return '';
  return Array.from(set)
    .filter((each) => each.startsWith(startString) && startString.length > each.length)
    .map((each) => each.slice(startString.length))
    .join('-');
}
