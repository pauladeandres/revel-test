import { useState, useEffect } from 'react'

import styles from '@/styles/Films.module.css'

export const Carousel = ({ genre }) => {

    const { id, name } = genre
    const [movies, setMovies] = useState([])

    async function getMovies() {
        await fetch(`/api/genres/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return setMovies(data)
                })
            .catch((error) => console.log('Error', error))
    }
    
    useEffect(() => {
        getMovies()
    }, [])

    return (
        // skeleton screens
        <div className="section">
            <h3 className={`${styles['genre-title']}`}>{name}</h3>
            <div className={`${styles['films-container']}`}>
                {
                    movies.map((movie) => (
                        <a key={movie.id} className={`${styles['film-card-link']}`} href={`/movies/${movie.title.replace(/\s/g, "-")}?id=${movie.id}`}>
                            <div key={movie.id} className={`${styles['film-card']}`} style={{ backgroundImage: `url(${movie.thumbnail})` }}>
                                <div className={`${styles['film-card-link-overlay']}`}></div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}