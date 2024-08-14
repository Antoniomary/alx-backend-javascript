export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString) return '';

  const result = [];
  for (const each of set) {
    if (each && each.startsWith(startString)) {
      result.push(each.slice(startString.length));
    }
  }

  return result.join('-');
}
