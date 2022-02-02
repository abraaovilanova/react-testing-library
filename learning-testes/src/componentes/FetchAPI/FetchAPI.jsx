import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default () => {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(async ()=>{
        const API_KEY = '396f9c8444e7ff20a696e93cc4ed6e46'
        const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
        const data = await res.json()
        setPopularMovies(data.results)
    },[])

    return (
        <div>
            <h1>Popular Movies</h1>
            <ul>
                {popularMovies.map((elem, idx) => {
                    return elem.title && (
                        <li
                            data-testid={`movieid-${idx}`}
                            key={elem.id}>
                                {idx} - {elem.title}
                        </li>
                    )
                 })}
            </ul>
        </div>
    )
}