import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Home = () => {
    const [randomContent, setRandomContent] = useState({
        title: "The Lord of the Rings: The Return of the King",
        poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    });

    const fetchRandomContent = async () => {
        const result = await axios.get("https://fooapi.com/api/movies/rand");
        console.log(result.data.data);
        setRandomContent({
            title: result.data.data.title,
            poster: result.data.data.poster,
            plot: result.data.data.plot
        })
    }

    useEffect(() => {
        fetchRandomContent();
    }, [])

    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src={randomContent.poster} alt="" width="150" height="200" />
                <h1 className="display-5 fw-bold text-body-emphasis">{randomContent.title}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">{randomContent.plot}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" onClick={fetchRandomContent} className="btn btn-primary btn-lg px-4 gap-3">Random Content</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home