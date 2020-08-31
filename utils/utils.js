module.exports.validationError = (err, res, msg) => {
  if (err.name === 'ValidationError') {
    return res.status(400).send({ message: msg });
  }
  if (err.message === 'Нет карточки с таким id') {
    return res.status(404).send({ message: err.message });
  }
  return res.status(500).send({ message: 'На сервере произошла ошибка' });
};

module.exports.serverError = (err, res) => {
  if (err.message === 'Нет пользователя с таким id' || err.message === 'Нет карточки с таким id') {
    return res.status(404).send({ message: err.message });
  }
  return res.status(500).send({ message: 'На сервере произошла ошибка' });
};
