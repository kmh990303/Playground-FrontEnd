import React, { ChangeEvent, useState } from "react";
import useSendRequest from "../hook/useSendRequest";

const Hookprac: React.FC = () => {
    const [name, setName] = useState<string>('');

    const { data, loading, error, sendRequest } = useSendRequest({
        url: `https://pokeapi.co/api/v2/pokemon/${name}`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    })


    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value.toLowerCase());
    }

    const clickHandler = () => {
        sendRequest();
    }

    return (
        <div className="mx-auto">
            <h1 className="text-center my-8">
                Search Your Pokemon
            </h1>
            <p className="text-center">
                <div className="flex flex-col gap-8">
                    <input type="text" value={name} onChange={changeHandler} name="name" className="w-1/3 mx-auto mb-4" />
                    <button onClick={clickHandler} className="mb-8">submit</button>
                </div>
            </p>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {data && (
                    <div className="">
                        <img src={data.sprites.front_default} alt="pokemonJpg" className="mx-auto mb-4" />
                        <h2 className="text-center">{data.name}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Hookprac;