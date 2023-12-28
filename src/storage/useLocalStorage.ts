import { useEffect, useReducer, Reducer } from "react"

export function useLocalStorageReducer<T, A>(
  key: string,
  reducer: Reducer<T, A>,
  initialState: T | (() => T)
) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const storedData = localStorage.getItem(key)

    if (storedData == null) {
      if (typeof initial === "function") {
        return (initial as () => T)()
      } else {
        return initial
      }
    } else {
      return JSON.parse(storedData)
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, dispatch] as const
}
