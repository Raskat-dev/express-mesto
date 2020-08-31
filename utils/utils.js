module.exports.validationError = (err, res, msg) => {
  if (err.name === 'ValidationError') {
    return res.status(400).send({ message: msg });
  }
  return res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` });
};

module.exports.serverError = (err, res) => res.status(500).send({ message: `${err.message}. На сервере произошла ошибка` });
