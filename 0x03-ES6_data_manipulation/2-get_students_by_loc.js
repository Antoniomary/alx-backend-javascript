export default function getStudentsByLocation(data, city) {
  if (!Array.isArray(data)) return [];
  return data.filter((each) => each.location === city);
}
