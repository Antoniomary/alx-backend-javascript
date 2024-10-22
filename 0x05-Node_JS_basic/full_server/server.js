import express from 'express';
import routes from './routes/index';

const port = 1245;
const app = express();

const databasePath = process.argv[2];
app.use((req, res, next) => {
  req.databasePath = databasePath;
  next();
});

app.use('/', routes);

app.listen(port, () => {});

export default app;
