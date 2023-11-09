import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    duas: typeof window !== "undefined" ? window.localStorage.getItem("catId") : false,
    loading: false,
    error: null,
};

export const DuaContext = createContext(INITIAL_STATE);

const DuaReducer = (state, action) => {
    switch (action.type) {
        case "DUA_START":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "DUA_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export const DuaCotextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DuaReducer, INITIAL_STATE);

    useEffect(() => {
        typeof window !== "undefined" ? window.localStorage.setItem("catId", state.duas) : false;
    }, [state.duas]);

    return (
        <DuaContext.Provider
            value={{
                duas: state.duas,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </DuaContext.Provider>
    );
};
