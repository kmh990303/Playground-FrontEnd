import React, { useEffect } from "react";

const Position: React.FC = () => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                localStorage.setItem('myPosition', JSON.stringify(position));
            },
            (error) => {
                console.log(error)
            }
        )
    }, [])

    const deleteHandler = () => {
        localStorage.removeItem('myPosition');
    }

    const searchHandler = () => {
        const position = localStorage.getItem('myPosition');

        if (position) {
            console.log(JSON.parse(position));
        } else {
            console.log('Cannot find');
        }
    }

    return (
        <div>
            <p>Check the console!!!</p>
            <div>
                <button onClick={searchHandler}>Search My Position</button>
                <button onClick={deleteHandler}>Delete My Position</button>
            </div>
        </div>
    )
}

export default Position;