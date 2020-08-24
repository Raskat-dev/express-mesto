const express = require('express');
const path = require('path');
const cardsRouter = require('./routes/cards');
const { userRouter, usersRouter } = require('./routes/users');
const errorRouter = require('./routes/error');

const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
  console.log(`Загружаем порт ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use('/users', userRouter);
app.use('/*', errorRouter);
