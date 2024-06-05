import PropTypes from 'prop-types';
import { useState, createContext } from 'react';

export const LoadingContext = createContext(false)


export function LoadingProvider({ children }) {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      {children}
    </LoadingContext.Provider>
  )
}

LoadingProvider.propTypes = {
  children: PropTypes.node
}