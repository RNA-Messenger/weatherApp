# weatherApp
Just another weather app by Agostina Noelia Rubisse


# Frontend Challenge
I want to thank you for the opportunity of submitting this challenge.
I could have used create-react-app but I decided to show some extra effort and set the environment from scratch.
Please, change the babelrc.txt to .babelrc, otherwise it won't compile.
You can run the app by doing `npm run build`, but remember to do `npm install` first!

## Brief
We have a simple api call in the helper.js file.
Every call uses the London city id and my apiKey.
I added some localStorage values to cache the data and return it if the api call fails.
 
## Design
I have modified the original design a bit. Based on the design you sent, I assume the current day is monday. Showing the temperature values both in the app header and the app list is redundant, so I just made the current day slot bigger and added extra bits of information to capture the users attention.
The remaining slots are mapped from the forecast weather api.
 
## Data
All data is fetch from the OpenWeather API
 
## Endpoints
helpers.js >>
`http://api.openweathermap.org/data/2.5/forecast?id="+ cityId +"&units=metric&appid="+ apiKey`
`http://api.openweathermap.org/data/2.5/weather?id="+ cityId +"&units=metric&appid="+ apiKey`
 
## Progress Bar
When the page loads we show first a loading screen. This could be improved by extending the time the data takes to load, but for now it looks nice.
 
## Location
The location is fixed due to the challenge asking to render London's weather, but the cityId could be a list of available cities ids and this can be easily changed by sending the id as a parameter in both fetches.
 
## Icons
The icons are being rendered by sourcing the img from the icon's url plus the icon name and img format.
const iconurl = "http://openweathermap.org/img/w/";
 
 
## Delivered
The progress bar fills fluidly and the application fetches new data every minute, as requested.
 
## Improvements
I would make every slot clickable and would render the whole day's data. Show the timeframes that are returned by the 5 days endpoint in a nice d3.js chart. Add the wind and pressure information as well. I also find the historical weather data very charming and useful. As a frequent traveler I use this information when preparing my bags, of course.
I would also add the possibility of removing the progress bar. Is a little bit annoying. I'm an Accuweather user and I never wonder about the updates, I just assume it is updating as much as it needs because showing the current weather implies that you need to keep that data updated.
I would also make a dropdown list of favorite cities to be able to check other location's weather. I sometimes wonder how my family and friends are doing in other parts of the world.
