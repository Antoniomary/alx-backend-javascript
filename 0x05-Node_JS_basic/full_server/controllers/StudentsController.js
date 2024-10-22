import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((students) => {
        let result = 'This is the list of our students\n';

        for (const [field, names] of Object.entries(students)) {
          const n = names.length;
          const all = names.join(', ');
          result += `Number of students in ${field}: ${n}. List: ${all}\n`;
        }

        return response.status(200).send(result.trim());
      }).catch((err) => response.status(500).send(err.message));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!major || !['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2])
      .then((students) => {
        const names = students[major];
        const result = `List: ${names.join(', ')}`;
        return response.send(result);
      }).catch((err) => response.status(500).send(err.message));
  }
}

export default StudentsController;
