import { useState, useEffect } from "react";
import Movie from "../components/Movies";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&with_rt_ratings=true&sort_by=rating").then((resp) => resp.json())
        .then(json => {
        setMovies(json.data.movies);
        setLoading(prev => !prev);
        })
    }, [])
    
    return(
        
        <div>
        {loading ? (<div><h1>Loading...</h1> <strong>Wait for a second..</strong></div>) : 
        <div>
            <h1>Movies! over 8 stars</h1>
            {movies.map((movie) => (
            <Movie 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            />
            ))};
        </div>}
        </div>
        )
}

export default Home;