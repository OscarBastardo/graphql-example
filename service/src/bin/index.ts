import * as dotenv from 'dotenv';

import createServer from 'src/server/createServer';

dotenv.config();

const PORT = process.env.PORT || 4000;
const server = createServer();
server.listen(PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`server listening on port ${PORT}`);
});
