export default function getListStudentsIds(data) {
  if (!Array.isArray(data)) return [];
  return data.map((each) => each.id);
}
