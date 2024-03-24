import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
import WeatherButtonBox from './components/WeatherButtonBox';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";

//1. 처음 현재위치 기반 날씨정보 기본제공
//2. 도시, 섭씨, 화씨, 날씨상태
//3. 5개버튼 (현재위치1, 원하는 도시4)
//------------------------------
//4. 버튼을 누를때 도시별 정보가 변경된다.
//5. 1번인 현재위치버튼을 누르면 다시 현재로 화면 노출.
//6. 로딩스피너 = 데이터를 가지고 오는동안 돌아가는 화면 넣기

function App() {
  
   const getCurrentLocation =()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        // console.log("현재위치",lat,lon)
        getWeaterByCurrentLocation(lat, lon)
        setCity(null);
      });
    }

    const getWeaterByCurrentLocation=async(lat, lon)=>{
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d35034cce3abb9cdd03482bcf781a1cb&units=metric`
        setLoading(true)
        let response = await fetch(url)
        let data = await response.json()
        setId(data.weather[0].id)
        setWeather(data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setAPIError(err.message);
        setLoading(false);
      }
      // console.log("data", data)
    }

    const getWeaterByCity =async()=>{
      try {
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d35034cce3abb9cdd03482bcf781a1cb&units=metric`
        setLoading(true)
        let response = await fetch(url)
        let data = await response.json()
        // console.log("뭐가나오나", data)
        setWeather(data)
        setLoading(false)
      } catch (err) {
        alert( "데이터에 에러가 있어 재요청을 시도합니다." );
        setAPIError(err.message);
        setLoading(false);
      }
    }

    const cities = ['paris', 'new york', 'tokyo', 'seoul'];
    const [city, setCity]=useState('')
    const [weather, setWeather] = useState()
    const [id, setId] = useState()
    const [loading, setLoading]=useState("ture")
    const [apiError, setAPIError] = useState("");

    useEffect(()=>{
      if (!city){
        getCurrentLocation();
      } else {
        getWeaterByCity();
        
      }
    },[city]);

    //  useEffect(()=>{
    //     getCurrentLocation();
    // },[]);

    // useEffect(()=>{
    //     getWeaterByCity();
    // },[city]);

  return (
    <div>
      {loading? (<div className='contaier'>
        <ClipLoader color= "#000" loading={loading} size={150} /></div>) :
      (<div className='contaier'>
        <WeatherBox weather={weather} id={id} /> 
        <br/>
        <WeatherButtonBox cities={cities} setCity={setCity} getCurrentLocation={getCurrentLocation} selectedCity={city}/>
      </div>
      )}
    </div>
  );
}

export default App;
