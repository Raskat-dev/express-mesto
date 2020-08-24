const usersRouter = require('express').Router();
const userRouter = require('express').Router();
const path = require('path');
const { readFile } = require('../helpers/read-file');

const usersPath = path.join(__dirname, '../data/users.json');

usersRouter.get('/', (req, res) => {
  readFile(usersPath)
    .then((data) => JSON.parse(data))
    .then((usersData) => res.status(200).send(usersData))
    .catch((err) => res.status(404).send(`Ошибка, ${err}`));
});

userRouter.get('/:id', (req, res) => {
  const userId = req.params.id;
  readFile(usersPath)
    .then((data) => JSON.parse(data))
    .then((usersData) => {
      const user = usersData.find((userData) => userData._id === userId);
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => res.status(404).send(err));
});

module.exports = { usersRouter, userRouter };
