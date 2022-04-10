import React, { useContext, useEffect, useState } from "react";

const PartsContext = React.createContext(undefined);

export function useParts() {
  return useContext(PartsContext);
}

export function PartsProvider({ children }) {
  const hardwareCategories = [
    // "Add custom category",
    "Case",
    "Power supply",
    "Motherboard",
    "Expansion cards",
    "Storage devices",
    "Fixed media",
    "Removable media",
    "Input peripherals",
    "Output peripherals",
  ];

  const defPart = {
    formPartName: "",
    formPartCategory: "",
    formPartDetails: "",
    formPartPrice: "",
  };

  const [parts, setParts] = useState([]);
  const [write, setWrite] = useState(false);

  const deletePart = (id) => {
    let newParts = parts.filter((part) => part.id !== id);
    console.log(newParts);
    setParts([...newParts]);
    setWrite(true);
  };

  useEffect(() => {
    const partsParsed = JSON.parse(localStorage.getItem("parts"));
    partsParsed && setParts(partsParsed);
  }, []);

  useEffect(() => {
    write && localStorage.setItem("parts", JSON.stringify(parts));
    setWrite(false);
  }, [write]);

  const value = {
    parts,
    setParts,
    defPart,
    setWrite,
    hardwareCategories,
    deletePart,
  };
  return (
    <PartsContext.Provider value={value}>{children}</PartsContext.Provider>
  );
}
