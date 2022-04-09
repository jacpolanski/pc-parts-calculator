import React, { useContext, useState } from "react";

const PartsContext = React.createContext(undefined);

export function useParts() {
  return useContext(PartsContext);
}

export function PartsProvider({ children }) {
  const [parts, setParts] = useState([]);
  const deletePart = (id) => {
    let newParts = parts.filter((part) => part.id !== id);
    setParts([...newParts]);
  };
  const defPart = {
    formPartName: "",
    formPartCategory: "",
    formPartDetails: "",
    formPartPrice: "",
  };

  const value = {
    parts,
    setParts,
    defPart,
    deletePart,
  };
  return (
    <PartsContext.Provider value={value}>{children}</PartsContext.Provider>
  );
}
