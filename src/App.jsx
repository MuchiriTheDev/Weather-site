import Hero from './Components/Hero/Hero';
import Element from './Components/Elements/Element';
import sIcon from '../src/assets/search_40dp_FILL0_wght400_GRAD0_opsz40.png';
import cloud from '../src/assets/cloudy.png';
import mist from '../src/assets/foggy_7802819.png';
import snow from '../src/assets/snowy_3242665.png';
import rain from '../src/assets/rain_3380068.png';
import clear from '../src/assets/cloudy-day_5546089.png';
import storm from '../src/assets/storm_616522.png';
import './App.css'
import {  useState } from 'react';

function App() {
  const[location, setLocation] = useState("Your Location");
  const[temp , setTemp] = useState(0);
  const[wind, setWind] = useState(0);
  const[humidity, setHumidity] = useState(0)
  const [image, setImage] = useState()
  
  let api_key = "8a7fccbc451399afb90225d492101daf"
  
  

  const adjust = async()=> {
    const place = document.getElementById("search-input");
    if (place.value.length ===0){
      return 0
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${place.value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    setTemp(Math.floor(data.main.temp));
    setLocation(data.name);
    setWind(Math.floor(data.wind.speed));
    setHumidity(Math.floor(data.main.humidity))

    if(data.weather[0].icon == "01d"  || data.weather[0].icon == "01n"){
      setImage(clear)
    }else if(data.weather[0].icon == "02d"  || data.weather[0].icon == "02n" || data.weather[0].icon == "03d"  || data.weather[0].icon == "03n" || data.weather[0].icon == "04d"  || data.weather[0].icon == "04n"){
      setImage(cloud)
    }else if(data.weather[0].icon == "09d"  || data.weather[0].icon == "09n" || data.weather[0].icon == "10d"  || data.weather[0].icon == "10n"){
      setImage(rain)
    }else if(data.weather[0].icon == "11d"  || data.weather[0].icon == "11n"){
      setImage(storm)
    }else if(data.weather[0].icon == "13d"  || data.weather[0].icon == "13n"){
      setImage(snow)
    }else if(data.weather[0].icon == "50d"  || data.weather[0].icon == "50n"){
      setImage(mist)
    }
  }

  return (
      <div onclick={adjust}>
        <div className="container">
          <div id='searchbar'>
              <div className="section-1">
                  <input type="text" id="search-input" placeholder='Enter your Location' />
              </div>
              <div className="section-2">
                  <button className="search-btn"><img src={sIcon} alt="" className="search-icon" onClick={adjust}/></button>
              </div>
          </div>
          <Hero image={image} temp={temp} location={location}/>
          <Element wind={wind} humidity={humidity}/>
        </div>
      </div>
  )
}

export default App
