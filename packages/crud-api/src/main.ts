import express from 'express';
import router from './router';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(router);

app.listen(port, host, () => {
  console.log(`crud-api: [ Ready ] http://${host}:${port}`);
});
