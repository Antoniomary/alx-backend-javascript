export default function updateUniqueItems(map) {
  if (map instanceof Map === false) {
    throw new Error('Cannot process');
  }

  for (const each of map) {
    if (each[1] === 1) {
      try {
        map.set(each[0], 100);
      } catch (error) {
        throw new Error('Cannot process');
      }
    }
  }
}
