import { useState, useEffect } from 'react';
import movieDB from "../api/MovieDB";
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from "../interfaces/movieInterface";

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];


}
export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMoviesDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const movieCastPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [
            movieDetailsResponse, 
            movieCastResponse
        ] = await Promise.all([
            movieDetailsPromise,
            movieCastPromise
        ]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: movieCastResponse.data.cast
        })

        
    }

    useEffect(() => {
        getMoviesDetails();
    }, []);

    return {
        ...state
    }
    

}
