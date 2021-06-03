import React, { createContext, useReducer, useContext } from 'react';

const Context = createContext();

export const Provider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(Context);
  return dispatch;
};

export const useSelector = (selector) => {
  const { state } = useContext(Context);
  return selector(state);
};

