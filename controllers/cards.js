const Card = require('../models/card');
const { validationError, serverError } = require('../utils/utils');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch((err) => serverError(err, res));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const ownerId = req.user._id;
  Card.create({ name, link, owner: ownerId })
    .then((card) => res.send(card))
    .catch((err) => validationError(err, res, 'Переданы некорректные данные в метод создания карточки'));
};

module.exports.deleteCard = (req, res) => {
  Card.findOneAndDelete({ _id: req.params.cardId })
    .orFail(new Error('Нет карточки с таким id'))
    .then((card) => res.send(card))
    .catch((err) => validationError(err, res, 'Переданы некорректные данные в метод удаления карточки'));
};

module.exports.likeCard = (req, res) => {
  Card.findOneAndUpdate({ _id: req.params.cardId },
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true })
    .orFail(new Error('Нет карточки с таким id'))
    .then((card) => res.send(card))
    .catch((err) => validationError(err, res, 'Переданы некорректные данные в метод редактирования карточки'));
};

module.exports.dislikeCard = (req, res) => {
  Card.findOneAndUpdate({ _id: req.params.cardId },
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true })
    .orFail(new Error('Нет карточки с таким id'))
    .then((card) => res.send(card))
    .catch((err) => validationError(err, res, 'Переданы некорректные данные в метод редактирования карточки'));
};
