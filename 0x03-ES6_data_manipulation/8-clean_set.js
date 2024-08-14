export default function cleanSet(set, startString) {
  if (!startString) return '';

  const result = [];
  for (const each of set) {
    if (each.startsWith(startString)) {
      result.push(each.slice(startString.length));
    }
  }

  return result.join('-');
}
