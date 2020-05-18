const cityId = "2643743";
const apiKey = "cb2e8b38b6dbee867869e2e9415a7102";
const iconurl = "http://openweathermap.org/img/w/";
export function renderIcon(iconId, format){
  return iconurl + iconId + format;
}

export function renderCurrentTime(){
  let date = new Date();
  let hours = date.getHours().length == 1 ? "0" + date.getHours() : date.getHours();
  let minutes = "0" + date.getMinutes();
  let currentTime = hours + ":" + minutes.substr(-2);
  return currentTime;
}

export async function fetchWeekData(){  
  try{
    const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?id="+ cityId +"&units=metric&appid="+ apiKey);
    const data = await response.json();
    setLocalCache(data, 'weekData')
    return data;
  }  catch (err){
    alert(err);
    return lastUpdatedData('weekData')
  }

}

export async function fetchCurrentData(){
  try {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?id="+ cityId +"&units=metric&appid="+ apiKey);
    const data = await response.json();
    setLocalCache(data, 'currentData')
    return data;
  } catch (err){
    alert(err);
    return lastUpdatedData('currentData')
  }
}

export function getDayName(dt){
  const date = new Date(dt * 1000)
  return date.toString().split(' ')[0];
}

function setLocalCache(data, keyName){
    localStorage.setItem(keyName, JSON.stringify(data));
}

function lastUpdatedData(keyName){  
  if(localStorage.getItem(KeyName) === null) {
    return "Sorry, we can't seem to retrieve the necessary data at the moment";
  } else {
    return JSON.parse(localStorage.getItem(keyName));
  }
}