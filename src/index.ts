import Koa from 'koa';
import Serve from 'koa-static';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import DotEnv from 'dotenv';
import path from 'path';

if (process.env.NODE_ENV === 'production') {
  DotEnv.config({
    path: path.join(__dirname, '../.env.production')
  });
} else {
  DotEnv.config({
    path: path.join(__dirname, '../.env.development')
  });
}

const app = new Koa();
const router = new Router();
const serve = Serve(path.join(__dirname, '../public'));
const bodyParser = BodyParser();

app.use(serve);
app.use(router.routes);
app.use(bodyParser);

app.listen(process.env.APP_BASE_PORT, () => {
  console.log(`Server listening on ${process.env.NODE_ENV}; ${process.env.APP_BASE_URL}:${process.env.APP_BASE_PORT}`);
});
