import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from "../../common/apis/movieApi"
import {APIKey} from "../../common/apis/movieApiKey"

const Home = () => {

    const movieText = 'Harry';

    useEffect(()=>{
        const fetchMovies = async() =>{
            const response = await movieApi
                .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err)=>{
                    console.log(err);
                })
                console.log(response);

        }
        fetchMovies();
    },[])

    return (
        <div className='banner'>
            <MovieListing />
        </div>
    );
};

export default Home;