import React, { useEffect } from "react";

const Time: React.FC = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Hi! nice to meet you!')
        }, 2000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            time job
        </div>
    )
}

export default Time;