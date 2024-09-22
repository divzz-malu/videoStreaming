import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../Constants/Constants";

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState("");
    useEffect(() => {
        axios
            .get(props.url)
            .then((resp) => {
                console.log(resp.data.results);
                setMovies(resp.data.results);
            })
            .catch((err) => {
                alert("Network error");
            });
    }, []);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        console.log(id);
        axios
            .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((resp) => {
                console.log(resp.data)
                if(resp.data.results.length !== 0){
                    setUrlId(resp.data.results[0])
                }else{
                    console.log('Trailer not available');
                }
            }).catch((err)=>{
                console.log("Trailer not available");
            });
    };
    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="posters">
                {movies.map((movie, index) => (
                    <img
                        onClick={() => handleMovie(movie.id)}
                        key={index}
                        className={props.isSmall ? "small_poster" : "poster"}
                        src={`${imageUrl + movie.backdrop_path}`}
                        alt="poster"
                    />
                ))}
            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    );
}

export default RowPost;
