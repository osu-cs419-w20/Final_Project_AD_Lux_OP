const router = require('express').Router();
const constants = require('../constants');

const dataHeleper = require('../lib/dataHelper');

router.get('/champion/name/:name/info', (req, res) => {
    res.send(dataHeleper.getChampionInfoByName(req.params.name));
});

router.get('/champion/id/:id/info', (req, res) => {
    res.send(dataHeleper.getChampionInfoById(req.params.id));
});

router.get('/champion/name/:name/image', (req, res) => {
    const champion = dataHeleper.getChampionInfoByName(req.params.name);
    const filePath = constants.imgDir + '/champion/' + champion.image.full;
    res.sendFile(filePath);
});

router.get('/champion/id/:id/image', (req, res) => {
    const champion = dataHeleper.getChampionInfoById(req.params.id);
    const filePath = constants.imgDir + '/champion/' + champion.image.full;
    res.sendFile(filePath);
});


router.get('/*', (req, res) => {
    res.send('ERROR 404');
});

module.exports = router;