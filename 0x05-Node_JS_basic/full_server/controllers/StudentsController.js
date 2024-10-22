import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = req.databasePath || './database.csv';
    let result = '';

    readDatabase(dbPath)
      .then((students) => {
        result = 'This is the list of our students\n';

        for (const [field, names] of Object.entries(students)) {
          const sorted = names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

          const n = names.length;
          const all = sorted.join(', ');
          result += `Number of students in ${field}: ${n}. List: ${all}\n`;
        }
        return res.send(result);
      }).catch((err) => {
        res.statusCode = 500;
        return res.send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const dbPath = req.databasePath || './database.csv';
    let result = '';

    if (!major || !['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(dbPath)
      .then((students) => {
        const names = students[major];
        const sorted = names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        result += `List: ${sorted.join(', ')}\n`;
      }).catch((err) => {
        res.statusCode = 500;
        result += err.message;
      });

    return res.send(result);
  }
}

export default StudentsController;
