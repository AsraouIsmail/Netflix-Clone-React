/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';


function Banner() {

    //to pick a random movie and dsiplay it in the banner every time you refresh the app you'll see a new banner's movie
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
              request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
              ]
            );
            return request;
        }
        fetchData()
    },[])

    // a truncate function to keep the description text nice and short
    function truncate (str, n){
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };
    return (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        {/* inside the header i gave it a backround image */}

        <div className="banner_contents">
          {/* title */}
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          {/* div > 2 buttons */}
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          {/* description */}
          <h1 className="banner_description">
            {truncate(movie?.overview, 160)}
          </h1>

          <div className="banner--fadeBottom" />
        </div>
      </header>
    );
}

export default Banner
