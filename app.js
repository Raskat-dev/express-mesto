const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorRouter = require('./routes/error');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/users', require('./routes/users'));

app.use((req, res, next) => {
  req.user = {
    _id: '5f4a0f9f6cf9233300b9d082',
  };

  next();
});
app.use('/cards', require('./routes/cards'));

app.use('/*', errorRouter);

app.listen(PORT, () => {
  console.log(`Загружаем порт ${PORT}`);
});
