/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css"
const base_url = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
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
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    />
                ))}

            </div>

            
        </div>
    )
}

export default Row;
