const { port, app } = require('./constants');

const auth = require('./routes/auth');

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

app.use(auth);
