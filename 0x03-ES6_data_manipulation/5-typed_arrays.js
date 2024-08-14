export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arrayBuffer = new ArrayBuffer(length);
  if (arrayBuffer.byteLength !== length) {
    throw new Error('Allocation error');
  }
  const myView = new DataView(arrayBuffer);
  myView.setInt8(position, value);
  return myView;
}
