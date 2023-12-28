import { useEffect, useReducer, Reducer } from "react";

export function useLocalStorageReducer<T, A>(
    key: string,
    reducer: Reducer<T, A>,
    initialState: T
) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const storedData = localStorage.getItem(key);
        if (storedData) {
            dispatch({ type: "restore", payload: JSON.parse(storedData) } as A);
        }
    }, [key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, dispatch] as const;
}
