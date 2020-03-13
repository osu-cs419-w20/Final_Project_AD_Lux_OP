const baseUrl = 'http://localhost:8080/api/'

export async function getSummonerByName(name) {
    const url = baseUrl + 'lol/summoner/v4/summoners/by-name/' + name;
    const response = await fetch(url, {
        method: 'GET'
    });
    const responseBody = await response.json();
    return responseBody;
}

export async function getStatsBySummonerId(id) {
    const url = baseUrl + '/lol/league/v4/entries/by-summoner/' + id;
    const response = await fetch(url, {
        method: 'GET'
    });
    const responseBody = await response.json();
    return responseBody;
}

export async function getMatchHistoryBySummonerId(id) {
    const url = baseUrl + '/lol/match/v4/matchlists/by-account/' + id;
    const response = await fetch(url, {
        method: 'GET'
    });
    const responseBody = await response.json();
    return responseBody;
}

export async function getChampionMasterBySummonerId(id) {
    const url = baseUrl + '/lol/champion-mastery/v4/champion-masteries/by-summoner/' + id;
    const response = await fetch(url, {
        method: 'GET'
    });
    const responseBody = await response.json();
    return responseBody;
}
