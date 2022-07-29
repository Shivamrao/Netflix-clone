import React,{useState,useEffect} from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isRowLarge}) {
    
    const [Movies, setMovies] = useState([]);   
    const [TrailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData()  {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
           
            return request;
            
        }
      
        fetchData();

      
    }, [fetchUrl]);
    
    const clickmovie = (movie) =>{
        if(TrailerUrl){
            setTrailerUrl('')
        } else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "") .then((url) =>{
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
            }).catch((error) =>{ console.log(error)})
        }
    }
    const opts = {
        height:"390",
        width:"100%",
        playerVars:{autoplay:1},
    }
     
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>

            {Movies.map(movie => (
                
                <img 
                onClick={() => {clickmovie(movie)}}
                key={movie.id}
                className={`row_poster ${isRowLarge && "row_posterLarge"}`}
                src={`${base_url}${movie.poster_path  }`} 
                alt = {movie.name}/>
            ))}

        </div>
         {TrailerUrl && <YouTube videoId={TrailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row