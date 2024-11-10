'use client'

import { useSearchParams } from 'next/navigation'

import { useState, useEffect } from 'react';

import { Image } from "../../components/image/image.component";
import { Button } from "../../components/button/button.component"
import PlusIcon from "../../icons/PlusIcon"
import star from "../../images/star.png"

export default function Movie() {
    const [movieId, setMovieId] = useState(null);
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const searchParams = useSearchParams();

    useEffect(() => {
        const getMovieId = async () => {
            const id = await searchParams.getAll("id")[0];
            console.log('id en function', id);
            setMovieId(id);
        };
        getMovieId();
    }, [searchParams]);

    useEffect(() => {
        if (movieId) {
            const getMovie = async () => {
                try {
                    setLoading(true);
                    const response = await fetch(`/api/movies/${movieId}/`, {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' }
                    });
                    if (!response.ok) {
                        throw new Error('Failed to fetch movie');
                    }
                    const data = await response.json();
                    console.log('Respuesta API', data);
                    setMovie(data);
                } catch (error) {
                    console.log('Error', error);
                    setError(error.message || 'An error occurred');
                } finally {
                    setLoading(false);
                }
            };
            getMovie();
        }
    }, [movieId]);

    function addtoUserList() {
        console.log('add to list')
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
        <div className='image-buttons-container'>
                <div className="image-section">
                    <Image title={movie.title} image={movie.poster}></Image>
                </div>
                <div className='back-button'>
                    <a href="/">
                        Back to movies
                    </a>
                </div>

                <div className='buttons-section'>
                    <Button text='Trailer' buttonType='white'></Button>
                    <Button text='Play' buttonType='purple'></Button>
                </div>
        </div>
           
            <div className="add-list-container" onClick={addtoUserList()}>
                <PlusIcon></PlusIcon>
                <div>Add to my list</div>
            </div>

            <div className='info-container'>
                <div className='general-info'>
                    <div className='info-line'>
                        <span className='name'>Rating: </span>
                        <span className='value'>
                            {
                                Array.from({ length: movie.rating }, (_, idx) => (
                                    <img className='rating-star' src={star.src} alt='Rating star icon'></img>
                                ))
                            }
                        </span>
                    </div>
                    <div className='info-line'>
                        <span className='name'>Cast: </span>
                        <span className='value'>{movie.cast}</span>
                    </div>
                    <div className='info-line'>
                        <span className='name'>Genre: </span>
                        <span className='value'>{movie.genre}</span>
                    </div>
                </div>

                <div className='title'>{movie.title}</div>
                <div className='description'>{movie.description}</div>
            </div>
        </>
    )
}