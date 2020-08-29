const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch((err) => res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const ownerId = req.user._id;

  Card.create({ name, link, owner: ownerId })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ErrorName') {
        return res.status(400).send({ message: 'Переданы некорректные данные в метод создания карточки' });
      }
      return res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card) {
        res.send(card);
        return;
      }
      res.status(404).send({ message: 'Нет карточки с таким id' });
    })
    .catch((err) => {
      if (err.name === 'ErrorName') {
        return res.status(400).send({ message: 'Переданы некорректные данные в метод удаления карточки' });
      }
      return res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => {
      if (card) {
        res.send(card);
        return;
      }
      res.status(404).send({ message: 'Нет карточки с таким id' });
    })
    .catch((err) => {
      if (err.name === 'ErrorName') {
        return res.status(400).send({ message: 'Переданы некорректные данные в метод удаления карточки' });
      }
      return res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .then((card) => {
      if (card) {
        res.send(card);
        return;
      }
      res.status(404).send({ message: 'Нет карточки с таким id' });
    })
    .catch((err) => {
      if (err.name === 'ErrorName') {
        return res.status(400).send({ message: 'Переданы некорректные данные в метод удаления карточки' });
      }
      return res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` });
    });
};
