import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Weather = () => {
  const APIKEY = "2119a9d08ee2ef07616f3dac5b553f5a";

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [icons, setIcon] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const getWeatherData = async (city, country) => {
    await axios({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}`
    }).then((res) => {
      console.log(res.data);
      setTemp(res.data.main.temp - 273.15);
      setIcon(res.data.weather[0].icon);
      setMin(res.data.main.temp_min - 273.15);
      setMax(res.data.main.temp_max - 273.15);
      setShow(true);
      setError(false);
    }).catch((err) => {
      console.log(err);
      setShow(false);
      setError(true);
      showAlert(err);
    });
  };

  function showAlert(err) {
    Swal.fire({
      title: `${err}`,
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Enter Correct Detail'
    });
  }

  return (
    <>
      <div className='flex flex-col items-center p-8 bg-gray-200'>
        <h1 className='text-3xl font-semibold mb-4'>Weather App</h1>
        <input
          className='border-2 p-2 mb-2'
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='City'
        />
        <input
          className='border-2 p-2 mb-2'
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder='Country'
        />

        {error ? (
          <div className='max-w-[420px] bg-red-200 p-4 rounded'>
            <h4 className='text-center'>
              If you want to see the temperature, <span className='text-green-600'>put the correct items,</span> <span className='text-red-500'>not the wrong items</span>
            </h4>
          </div>
        ) : null}

        <button
          className='border-2 p-2 rounded hover:bg-gray-700 hover:text-white transition duration-300'
          onClick={() => getWeatherData(city, country)}
        >
          Get Weather
        </button>
      </div>

      {show ? (
        <div className='flex flex-col items-center mt-8'>
          <h2 className='text-2xl mb-2'>{city}, {country}</h2>
          <div className="my-2">
            <img className='w-24 h-24' src={`http://openweathermap.org/img/wn/${icons}@2x.png`} alt="Weather Icon" />
          </div>
          {temp ? <h1 className='text-4xl'>{Math.floor(temp)}°C</h1> : null}
          <h4 className="my-4">Min: <span>{Math.floor(min)}°C</span> <span className="mx-3">|</span> Max: <span>{Math.floor(max)}°C</span></h4>
        </div>
      ) : (
        <div className='flex flex-col items-center mt-8'>
          <h1 className='text-2xl'>Fill the details above to check the temperature</h1>
        </div>
      )}
    </>
  );
};

export default Weather;
