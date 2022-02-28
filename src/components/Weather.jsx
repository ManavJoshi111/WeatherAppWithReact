import React, { useEffect, useState } from "react";
import "../CSS/weather.css";
const Weather = () => {
  const [city, setCity] = useState("");
  const [searchcity, setsearchcity] = useState("");

  function gettemp() {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchcity}&units=metric&appid=056e4cef407366ba950feffe182051b4`;
      const res = await fetch(url);
      const resJson = await res.json();
      setCity(resJson.main);
    };
    fetchApi();
  }
  return (
    <>
      <div className="bgimage"></div>
      <center>
        <h2 className="title">Weather App</h2>
      </center>
      <div className="box">
        <div className="inputData">
          <center>
            <input
              type="search"
              placeholder="Enter Name Of The City"
              name=""
              id="search"
              className="inputField"
              onChange={(event) => {
                setsearchcity(event.target.value);
              }}
            />
          </center>
        </div>
        <center>
          <button onClick={gettemp}>Submit</button>
        </center>
        <div className="info">
          {/* <h2 className="location">
            <span id="city">{searchcity}</span>
          </h2> */}

          <h1 className="temp">Temperature : {city.temp}&#176; </h1>
          <h3 className="tempmin_max">
            Min : {city.temp_min}&#176; | Max : {city.temp_max}&#176;{" "}
          </h3>
        </div>
      </div>
    </>
  );
};
export default Weather;
