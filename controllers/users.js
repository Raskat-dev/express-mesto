const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` }));
};

module.exports.getUser = (req, res) => {
  User.findById(req.params._id)
    .then((user) => {
      if (user) { // проверка на наличие пользователя
        return res.send(user);
      }
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    })
    .catch((err) => res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ErrorName') {
        return res.status(400).send({ message: 'Переданы некорректные данные в метод создания пользователя' });
      }
      return res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` });
    });
};

module.exports.editUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (user) { // проверка на наличие пользователя
        return res.send(user);
      }
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    })
    .catch((err) => {
      if (err.name === 'ErrorName') {
        return res.status(400).send({ message: 'Переданы некорректные данные в метод редактирования пользователя' });
      }
      return res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` });
    });
};

module.exports.editUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (user) { // проверка на наличие пользователя
        return res.send(user);
      }
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    })
    .catch((err) => {
      if (err.name === 'ErrorName') {
        return res.status(400).send({ message: 'Переданы некорректные данные в метод редактирования пользователя' });
      }
      return res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` });
    });
};
