import { createContext, ReactNode, useReducer } from "react";

interface counterType {
    counter: number;
    increment: () => void;
    decrement: () => void;
    increase: (num: number) => void
}

export const CounterContext = createContext<counterType>({
    counter: 0,
    increment: () => { },
    decrement: () => { },
    increase: () => { },
});

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'increase', payload: number };

const reducer = (state: number, action: Action): number => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'increase':
            return state + action.payload;
        default:
            return state;
    }
}


const CounterContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [counter, dispatch] = useReducer(reducer, 0);

    const increment = () => {
        dispatch({
            type: 'increment'
        })
    }

    const decrement = () => {
        dispatch({
            type: 'decrement'
        })
    }

    const increase = (num: number) => {
        dispatch({
            type: 'increase',
            payload: num,
        })
    }

    const ctxValue = {
        counter,
        increment,
        decrement,
        increase
    }

    return (
        <CounterContext.Provider value={ctxValue}>
            {children}
        </CounterContext.Provider>
    )
}


export default CounterContextProvider;