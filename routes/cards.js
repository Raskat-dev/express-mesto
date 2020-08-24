const cardsRouter = require('express').Router();
const path = require('path');
const { readFile } = require('../read-file');

const cardsPath = path.join(__dirname, '../data/cards.json');

cardsRouter.get('/cards', (req, res) => {
  readFile(cardsPath)
    .then((data) => JSON.parse(data))
    .then((cardsData) => res.status(200).send(cardsData))
    .catch((err) => res.status(404).send(`Ошибка, ${err}`));
});

module.exports = cardsRouter;
