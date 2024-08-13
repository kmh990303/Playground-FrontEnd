import React from "react";
import { useRouteError } from "react-router-dom";

const Error: React.FC = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            it's error page....
        </div>
    )
}

export default Error;