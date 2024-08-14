export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const counter = weakMap.get(endpoint);
  if (counter === undefined) weakMap.set(endpoint, 1);
  else if (counter + 1 >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, counter + 1);
  }
}
