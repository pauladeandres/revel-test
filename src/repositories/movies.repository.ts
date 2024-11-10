export const useMoviesRepository = () => {

    const getMovieById = (id: number) => {
        return fetch(`/movies/${id}`)
    }

    return {
        getMovieById
    }
}