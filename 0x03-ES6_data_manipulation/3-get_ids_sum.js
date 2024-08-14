export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) return [];
  return studentsList.reduce((result, value) => result + value.id, 0);
}
