import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export const movieLoader = async ({ request }: { request: Request }) => {
    const url = new URL(request.url);
    const title = url.searchParams.get('title');

    if (!title) {
        return { title: 'No Title Provided', poster: '' };
    }

    const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=a23af8f8`);
    const data = await response.json();

    if (data.Response === 'False') {
        throw new Error('Movie not found');
    }

    return {
        title: data.Title,
        poster: data.Poster,
        plot: data.Plot,
    };
}

const Movie: React.FC = () => {
    const movie = useLoaderData() as { title: string; poster: string };
    const [searchTitle, setSearchTitle] = useState<string>('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/movie?title=${encodeURIComponent(searchTitle)}`);
    };

    return (
        <>
            <div className="flex flex-col items-center">
                <input
                    type="text"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    placeholder="Enter movie title"
                />
                <button onClick={handleSearch}>Search</button>
                {movie && movie.title && (
                    <>
                        <h1>{movie.title}</h1>
                        <img src={movie.poster} alt="movie_poster" />
                        <button onClick={() => navigate('/movie/movieDetail', { state: movie.title })}>See Details</button>
                    </>
                )}
            </div>
        </>
    );
};

export default Movie;
