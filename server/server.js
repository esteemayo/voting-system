const dotenv = require('dotenv');
require('colors');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 🔥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

app.set('port', process.env.PORT || 5050);

const server = app.listen(app.get('port'), () =>
  console.log(`Server running at port → ${server.address().port}`.blue.bold)
);
