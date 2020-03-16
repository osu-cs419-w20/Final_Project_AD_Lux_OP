const baseUrl = "http://localhost:8080";

export async function getSummonerByName(name) {
  const url = baseUrl + "/riot/lol/summoner/v4/summoners/by-name/" + name;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getStatsBySummonerId(id) {
  const url = baseUrl + "/riot/lol/league/v4/entries/by-summoner/" + id;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getMatchHistoryBySummonerId(id) {
  const url = baseUrl + "/riot/lol/match/v4/matchlists/by-account/" + id;
  console.log("ID: ", id);
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getChampionMasterBySummonerId(id) {
  const url = baseUrl + "/riot/lol/champion-mastery/v4/champion-masteries/by-summoner/" + id;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getSummonerbyId(id) {
  const url = baseUrl + "/riot/lol/summoner/v4/summoners/" + id;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getMatchInfoByMatchId(id) {
  const url = baseUrl + "/riot/lol/match/v4/matches/ " + id;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getChampionInfoById(id) {
  const url = baseUrl + "/assets/champion/id" + id + "/info";
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  console.log(responseBody);
  return responseBody;
}

export async function getChampionInfoByName(id) {
  const url = baseUrl + "/assets/champion/name" + id + "/info";
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  console.log(responseBody);
  return responseBody;
}


export function getChampionFullImageUrlByName(name) {
  const url = baseUrl + '/assets/champion/name/' + name + '/image';
  console.log(url);
  return url;
}

export function getChampionFullImageUrlById(id) {
  const url = baseUrl + '/assets/champion/id/' + id + '/image';
  console.log(url);
  return url;
}

