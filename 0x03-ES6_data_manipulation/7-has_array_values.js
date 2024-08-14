export default function hasValuesFromArray(set, array) {
  for (const each of array) {
    if (!set.has(each)) return false;
  }
  return true;
}
