import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MovieDetail: React.FC = () => {
    const movie = useRouteLoaderData('movie') as { Plot: string }; // 부모 라우트의 ID를 사용하여 데이터 가져오기
    const state = useLocation();
    return (
        <div className="flex flex-col gap-8">
            <h2>Movie Detail</h2>
            {state.state}
            <p>{movie.Plot}</p>
        </div>
    );
};

export default MovieDetail;
