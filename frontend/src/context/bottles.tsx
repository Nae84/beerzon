import PropTypes from 'prop-types';
import { useState, createContext } from "react";
import { LitersAmmount } from "./../lib/types";

export const BottlesContext = createContext<LitersAmmount | null>(null);

export function BottlesProvider({ children }) {

  const [bottles, setBottles] = useState<LitersAmmount> ({} as LitersAmmount);

  return (
    <BottlesContext.Provider value={{bottles, setBottles}}>
      {children}
    </BottlesContext.Provider>
  )
}

BottlesProvider.propTypes = {
  children: PropTypes.node
}