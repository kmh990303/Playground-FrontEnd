import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { increment, decrement, reset, incrementByAmount } from "../store/CounterSlice";

const ReduxPractice: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div className="flex gap-8">
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            </div>
        </div>
    )
}

export default ReduxPractice;