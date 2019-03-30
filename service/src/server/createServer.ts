import * as Koa from 'koa';
import * as mount from 'koa-mount';
const graphqlHTTP = require('koa-graphql');

function createServer() {
  const server = new Koa();

  server.use(mount('/graphql', graphqlHTTP({

  })));

  return server;
}

export default createServer;
