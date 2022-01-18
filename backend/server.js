const express = require('express');
require('dotenv').config();

require('./mongoose');
const cors = require('cors');
const path = require('path');
const errorHandlers = require('./handlers/errorHandlers');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use(require('./routes/user'));
app.use(require('./routes/form'));

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
// if (process.env.ENV !== "DEVELOPMENT") {
// app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
// }

app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
// if (process.env.ENV === 'DEVELOPMENT') {
//   app.use(errorHandlers.developmentErrors);
// } else {
//   app.use(errorHandlers.productionErrors);
// }
app.use(errorHandlers.productionErrors);

const server = app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

require('./socket')(server);
