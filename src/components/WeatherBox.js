import React from 'react';

const WeatherBox = ({weather, id}) => {
    // console.log(weather)
    // const {name} = props
    const icon = weather?.weather[0]?.icon; 

const todayData = () => {
    const week = ['일','월','화','수','목','금','토'];
    let now = new Date();
    let todayMonth = (now.getMonth()+1) > 9 ? (now.getMonth()+1) : (now.getMonth()+1);
    let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
    let dayOfWeek = week[now.getDay()];
    return todayMonth + '월 ' + todayDate + '일 ' + dayOfWeek + '요일'
}
        
    return (
        <div className='picweaterbox'>
            <div>{todayData()}</div>
            {/* <div>{weather && weather.name}</div>  */}
            <h2>{weather?.name}</h2>
            <img className="weatherIcon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <h5>{weather?.main.temp}℃ {Math.round(weather?.main.temp)*9/5+32}℉</h5>
            <div>{weather?.weather[0].description}</div>
        </div>
    );
};

export default WeatherBox;