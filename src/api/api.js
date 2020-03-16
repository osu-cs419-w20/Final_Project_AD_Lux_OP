const baseUrl = "http://localhost:8080";
const riotEndpoint = "/riot";

export async function getSummonerByName(name) {
  const url =
    baseUrl + riotEndpoint + "/lol/summoner/v4/summoners/by-name/" + name;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getStatsBySummonerId(id) {
  const url =
    baseUrl + riotEndpoint + "/lol/league/v4/entries/by-summoner/" + id;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getMatchHistoryBySummonerId(id) {
  const url =
    baseUrl + riotEndpoint + "/lol/match/v4/matchlists/by-account/" + id;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getChampionMasterBySummonerId(id) {
  const url =
    baseUrl +
    riotEndpoint +
    "/lol/champion-mastery/v4/champion-masteries/by-summoner/" +
    id;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getSummonerbyId(id) {
  const url = baseUrl + riotEndpoint + "/lol/summoner/v4/summoners/" + id;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getMatchInfoByMatchId(id) {
  const url = baseUrl + riotEndpoint + "/lol/match/v4/matches/" + id;
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getChampionInfoById(id) {
  const url = baseUrl + "/ddragon/champion/id/" + id + "/info";
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export async function getChampionInfoByName(id) {
  const url = baseUrl + "/ddragon/champion/name" + id + "/info";
  const response = await fetch(url, {
    method: "GET"
  });
  const responseBody = await response.json();
  return responseBody;
}

export function getChampionFullImageUrlByName(name) {
  const url = baseUrl + "/ddragon/champion/name/" + name + "/image/full";
  return url;
}

export function getChampionFullImageUrlById(id) {
  const url = baseUrl + "/ddragon/champion/id/" + id + "/image/full";
  return url;
}

export function getItemFullImageUrlById(id) {
  const url = baseUrl + "/ddragon/item/id/" + id + "/image/full";
  return url;
}
