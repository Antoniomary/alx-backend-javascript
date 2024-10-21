function countStudents(path) {
  try {
    readFile(path);
    console.log(`Number of students: ${count}`);
  } catch (error) {
    throw Error('Cannot load the database');
  }
Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
}

module.exports = countStudents;
