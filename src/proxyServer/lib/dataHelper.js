const champions = require('../data/json/champion');
const fetch = require('isomorphic-unfetch');

const getChampionInfoById = (id) => {
    for (var champion in champions.data) {
        if (champions.data[champion].key == id) {
            return(champions.data[champion]);
        }
    }
};

exports.getChampionInfoById = getChampionInfoById;

const getChampionInfoByName = (name) => {
    return champions.data[name];
};

exports.getChampionInfoByName = getChampionInfoByName;