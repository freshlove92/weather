import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButtonBox = ({cities,setCity,getCurrentLocation,selectedCity}) => {
    // console.log("잘 왔니?", cities)

    return (
         <div>
          <Button 
                variant={selectedCity === null ? "danger" : "warning"} 
                onClick={()=>getCurrentLocation()}>
                Current Location
            </Button>
            {cities.map((item, index) => (
                <Button 
                    variant={selectedCity === item ? "danger" : "warning"} 
                    key={index} 
                    onClick={()=>setCity(item)}>
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButtonBox;