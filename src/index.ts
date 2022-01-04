import Koa from 'koa';

const app = new Koa();

app.use((context: Koa.Context) => {
  context.body = 'Hello!';
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
