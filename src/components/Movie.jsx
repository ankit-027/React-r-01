import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Movie = () => {

    const [randomMovies, setRandomMovies] = useState([]);

    const fetchRandomMovies = async () => {
        const result = await axios.get("https://fooapi.com/api/movies");
        setRandomMovies(result.data.data);
        console.log(result.data.data);
    }
    useEffect(() => {
        fetchRandomMovies();
    }, []);

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container"> <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    randomMovies.map((movie, index) => {
                        console.log(movie);
                        return (
                            <div className="col" key={index}>
                                <div className="card shadow-sm">
                                    <img src={movie.poster} alt="image" height={'400px'} />
                                    <div className="card-body">
                                        <span style={{ color: 'green', fontWeight: 'bold' }}>{movie.title}</span>
                                        <p className="card-text">{movie.plot}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Random Movie</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-body-secondary">{movie.runtime}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
            </div>
        </div>
    )
}
export default Movie