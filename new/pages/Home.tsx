import { useQuery } from "@tanstack/react-query";
import React from "react";

interface DummyData {
    id: string;
    name: string;
    team: string;
}

// fetchDummyData 함수는 컴포넌트 외부에 정의
const fetchDummyData = async (): Promise<DummyData[]> => {
    const response = await fetch('http://localhost:5000/api/home', {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data...');
    }

    const data = await response.json()

    return data;
};

const Home: React.FC = () => {
    // useQuery의 타입 인자를 명확히 정의
    const { data, error, isLoading } = useQuery<DummyData[], Error>({
        queryKey: ['dummyData'],
        queryFn: () => fetchDummyData(),
    }
    );

    if (isLoading) {
        return <div>Loading....</div>;
    }

    if (error) {
        // `error` 타입을 `Error`로 캐스팅
        return <div>Error: {(error as Error).message}</div>;
    }

    console.log(data);

    // `data`가 배열로 추론되도록 타입을 명시
    return (
        <div>
            <h1>Dummy</h1>
            <ul>
                {data && data.length > 0 && data.map((player: DummyData) => (
                    <li key={player.id}>
                        {player.name} - {player.team}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
