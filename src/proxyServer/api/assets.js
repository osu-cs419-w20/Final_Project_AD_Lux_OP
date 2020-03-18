const router = require('express').Router();
const constants = require('../constants');

const dataHeleper = require('../lib/dataHelper');

router.get('/champion/name/:name/info', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(dataHeleper.getChampionInfoByName(req.params.name));
});

router.get('/champion/id/:id/info', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(dataHeleper.getChampionInfoById(req.params.id));
});

router.get('/champion/name/:name/image', (req, res) => {
    const champion = dataHeleper.getChampionInfoByName(req.params.name);
    const filePath = constants.imgDir + '/champion/' + champion.image.full;
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(filePath);
});

router.get('/champion/id/:id/image', (req, res) => {
    const champion = dataHeleper.getChampionInfoById(req.params.id);
    const filePath = constants.imgDir + '/champion/' + champion.image.full;
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(filePath);
});

router.get('/champion/id/:id/image/loading', (req, res) => {
    const champion = dataHeleper.getChampionInfoById(req.params.id);
    console.log(champion);
    const filePath = constants.imgDir + '/champion/loading/' + champion.id + '_0.jpg';
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(filePath);
});

router.get('/champion/id/:id/image/tile', (req, res) => {
    const champion = dataHeleper.getChampionInfoById(req.params.id);
    const filePath = constants.imgDir + '/champion/tiles/' + champion.id + '_0.jpg';
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(filePath);
});



router.get('/item/id/:id/image', (req, res) => {
    const filePath = constants.imgDir + '/item/' + req.params.id + '.png';
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(filePath);
});

router.get('/*', (req, res) => {
    res.send('ERROR 404');
});

module.exports = router;