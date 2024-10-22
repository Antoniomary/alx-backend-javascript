import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = req.databasePath || './database.csv';

    readDatabase(dbPath)
      .then((students) => {
        let result = 'This is the list of our students\n';

        for (const [field, names] of Object.entries(students)) {
          const sorted = names.sort((a, b) => {
            a.toLowerCase().localeCompare(b.toLowerCase());
          });

          const n = names.length;
          const all = sorted.join(', ');
          result += `Number of students in ${field}: ${n}. List: ${all}\n`;
        }

        res.send(result);
      }).catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const dbPath = req.databasePath || './database.csv';

    if (!major || !['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(dbPath)
      .then((students) => {
        const names = students[major];
        const sorted = names.sort((a, b) => {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        });

        const result = `List: ${sorted.join(', ')}\n`;

        res.send(result);
      }).catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

export default StudentsController;
