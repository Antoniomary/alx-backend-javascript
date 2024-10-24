import { readFile } from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      else {
        const lines = data.trim().split('\n').slice(1);

        const students = {};
        lines.forEach((line) => {
          const words = line.split(',');
          const firstName = words[0];
          const field = words[3];

          if (!students[field]) students[field] = [];
          students[field].push(firstName);
        });

        resolve(students);
      }
    });
  });
}

export default readDatabase;
