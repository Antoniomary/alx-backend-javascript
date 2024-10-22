const http = require('http');

const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
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

        let result = `Number of students: ${count}\n`;

        for (const [field, names] of Object.entries(students)) {
          const n = names.length;
          const all = names.join(', ');

          result += `Number of students in ${field}: ${n}. List: ${all}\n`;
        }

        resolve(result);
      }
    });
  });
}

const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') res.end('Hello Holberton School!');
  else if (req.url === '/students') {
    let result = 'This is the list of our students\n';
    countStudents(process.argv[2])
      .then((data) => {
        result += data;
        res.end(result.slice(0, -1));
      }).catch((err) => {
        res.stastusCode = 404;
        res.end(err.message);
      });
  }
});

app.listen(port, () => {});

module.exports = app;
