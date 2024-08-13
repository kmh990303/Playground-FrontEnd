import React from "react";
import { useParams } from "react-router-dom";

const HelloChild: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <p>it's HelloChild Page</p>
            <p>{id}</p>
        </div>
    )
}

export default HelloChild;