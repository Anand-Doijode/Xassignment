require('dotenv').config();
const Express = require('express');
const { xss } = require('express-xss-sanitizer');
const router = require('./routers/router');
require('./utils/dbConnection').initConnection();

const app = new Express();
const port = process.env.PORT || 3000;

app.use(xss());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;
