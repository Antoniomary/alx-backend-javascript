export default function cleanSet(set, startString) {
  if (!startString) return '';
  return Array.from(set)
    .filter((each) => each.startsWith(startString) && each.length > startString.length)
    .map((each) => each.slice(startString.length))
    .join('-');
}
