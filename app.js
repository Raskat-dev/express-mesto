const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const errorRouter = require('./routes/error');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message:
    'Слишком много запросов в вашего IP, попробуйте снова спустя 15 минут',
}));
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
