/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from './axios';
import "./Row.css"
const base_url = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    //a snippet of code wich runs on a specific condition or variable
    useEffect(() => {
        //when the request load we get the information from the API
        //if the [] empty that means, useEffect run once when the row loads, and don't run again
        async function fetchData() {
            
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;
           
        }
        fetchData();

    },[fetchUrl]);

    // console.table(movies)

    const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (movie) =>{
      //first if the url is open this how you close it else when you click the img you'll be able to watch the yotube trailer
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.name || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
      }

  }

    return (
        <div className='row'>
            {/* add the title using props*/ }
            <h2>{title}</h2>

            {/* container -> posters */}
            <div className="row__posters">
                {/* Several row__poster */}
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)} 
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    />
                ))}

            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }

            
        </div>
    )
}

export default Row;
