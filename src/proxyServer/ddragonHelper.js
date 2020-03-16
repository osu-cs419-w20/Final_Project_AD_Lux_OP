const champions = require('./dragontail-10.5.1/10.5.1/data/en_US/champion');

const getChampionInfoById = (id) => {
    for (var champion in champions.data) {
        if (champions.data[champion].key == id) {
            return(champions.data[champion]);
        }
    }
};

exports.getChampionInfoById = getChampionInfoById;

const getChampionFullImagePathById = (id) => {
    const championInfo = getChampionInfoById(id);
    return '/dragontail-10.5.1/10.5.1/img/champion/' + championInfo.image.full;
}

exports.getChampionFullImagePathById = getChampionFullImagePathById;