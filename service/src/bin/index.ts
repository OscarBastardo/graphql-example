import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

import createServer from 'src/server/createServer';

dotenv.config();

const dbUri = 'mongodb+srv://graphql:test123@cluster0-uqt1i.mongodb.net/test?retryWrites=true';
mongoose.connect(dbUri, { useNewUrlParser: true});
mongoose.connection.once('open', () => {
  // tslint:disable-next-line: no-console
  console.log('connected to database');
})

const PORT = process.env.PORT || 4000;
const server = createServer();
server.listen(PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`server listening on port ${PORT}`);
});
