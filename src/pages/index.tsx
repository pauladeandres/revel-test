import { useState, useEffect } from "react";

import { Slideshow } from "@/components/slideshow/slideshow.component"
import { Bubbles } from "@/components/category-bubbles/category-bubbles.component"
import { Carousel } from "@/components/films-carousel/films-carousel.component"

export default function Home() {

    const [genres, setGenres] = useState([])

    async function getGenres() {
        await fetch('/api/genres', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => setGenres(data))
            .catch((error) => console.log('Error', error))
    }

    useEffect(() => {
        getGenres()
    }, [])

    return (
        <>
            <Slideshow></Slideshow>
            <Bubbles bubbles={genres}></Bubbles>
            {
                genres.map((genre, idx) => {
                    return (
                        <Carousel key={idx} genre={genre}></Carousel>
                    )
                })
            }
        </>
    )
}