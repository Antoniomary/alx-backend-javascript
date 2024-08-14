export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!studentsList) return [];
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const newEntry = student;
      const gradeEntry = newGrades.find((entry) => entry.studentId === student.id);
      newEntry.grade = gradeEntry ? gradeEntry.grade : 'N/A';
      return newEntry;
    });
}
