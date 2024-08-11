import React from "react";
import { CounterContext } from "../store/CounterContext";
import { useContext } from "react";

const Counter: React.FC = () => {
    const { counter, increment, decrement, increase } = useContext(CounterContext);

    return (
        <div className="text-center flex justify-center items-center gap-8 mx-auto border-2 border-green-400">
            <button onClick={increment}>+</button>
            <p>{counter}</p>
            <button onClick={decrement}>-</button>
            <button onClick={() => increase(3)}>Special</button>
        </div>
    )
}

export default Counter;