const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      else {
        const lines = data.trim().split('\n').slice(1);

        let count = 0;

        const students = {};
        lines.forEach((line) => {
          const words = line.split(',');
          const firstName = words[0];
          const field = words[3];

          if (!students[field]) students[field] = [];
          students[field].push(firstName);

          count += 1;
        });

        console.log(`Number of students: ${count}`);

        for (const [field, names] of Object.entries(students)) {
          const n = names.length;
          const all = names.join(', ');

          console.log(`Number of students in ${field}: ${n}. List: ${all}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
