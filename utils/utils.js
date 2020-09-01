module.exports.serverError = (err, res) => {
  if (err.name === 'ValidationError') {
    return res.status(400).send({ message: 'Переданы недопустимые данные' });
  }
  return res.status((err.message) ? err.code : 500)
    .send({ message: err.message || 'На сервере произошла ошибка' });
};
