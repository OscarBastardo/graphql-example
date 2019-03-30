import * as Koa from 'koa';
import * as mount from 'koa-mount';
const graphqlHTTP = require('koa-graphql');
import schema from '../schema';

function createServer() {
  const server = new Koa();

  server.use(mount('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  })));

  return server;
}

export default createServer;
