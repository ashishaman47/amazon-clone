//setup data layer
//we need this to track basket

import React, { createContext, useContext, useReducer } from 'react';

// creating data layer
export const StateContext = createContext();

// creating provider --> so that we can wrap our entire app inside provider and give access to that data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// it takes a property called value --> useReducer is a hook --> it tells use dat layer as store

export const useStateValue = () => useContext(StateContext);
