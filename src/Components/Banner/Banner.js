import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios
            .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((resp) => {
                console.log(resp.data.results[12]);
                setMovie(resp.data.results[Math.floor((Math.random()*20-1) + 1)])     //Math.floor(Math.random() * (max - min)) + min;
            });
    }, []);
    return (
        <div style={{backgroundImage:`url(${imageUrl+movie?.backdrop_path})`
        }} className="banner">
            <div className="content">
                <h1 className="title">{movie?.title || movie?.name}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <p className="description">
                    {movie?.overview}
                </p>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
