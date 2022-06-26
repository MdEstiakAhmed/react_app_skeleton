import React, { createContext, useReducer } from 'react';
import tokenReducer, { handleToken } from '../reducers/tokenReducer';

const Context = createContext();

const Provider = (props) => {
    const [tokenState, tokenDispatch] = useReducer(tokenReducer, undefined);
    const tokenAction = handleToken(tokenDispatch);

    return (
        <Context.Provider value={{ tokenState, tokenAction }}>
            {props.children}
        </Context.Provider>
    );
};

export { Context, Provider };