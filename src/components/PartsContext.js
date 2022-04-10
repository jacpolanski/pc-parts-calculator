import React, { useContext, useEffect, useState } from "react";

const PartsContext = React.createContext(undefined);

export function useParts() {
  return useContext(PartsContext);
}

export function PartsProvider({ children }) {
  const [hardwareCategories, setHardwareCategories] = useState([
    "Case",
    "Power supply",
    "Motherboard",
    "Expansion cards",
    "Storage devices",
    "Fixed media",
    "Removable media",
    "Input peripherals",
    "Output peripherals",
  ]);

  const defPart = {
    formPartName: "",
    formPartCategory: "",
    formPartDetails: "",
    formPartPrice: "",
  };

  const [parts, setParts] = useState([]);
  const [write, setWrite] = useState(false);
  const [writeCategory, setWriteCategory] = useState(false);

  const deletePart = (id) => {
    let newParts = parts.filter((part) => part.id !== id);
    setParts([...newParts]);
    setWrite(true);
  };

  useEffect(() => {
    const partsParsed = JSON.parse(localStorage.getItem("parts"));
    partsParsed && setParts(partsParsed);
    const categoriesParsed = JSON.parse(localStorage.getItem("categories"));
    categoriesParsed && setHardwareCategories(categoriesParsed);
  }, []);

  useEffect(() => {
    write && localStorage.setItem("parts", JSON.stringify(parts));
    setWrite(false);
  }, [write, parts]);

  useEffect(() => {
    writeCategory &&
      localStorage.setItem("categories", JSON.stringify(hardwareCategories));
    setWriteCategory(false);
  }, [writeCategory, hardwareCategories]);

  const value = {
    parts,
    setParts,
    defPart,
    setWrite,
    hardwareCategories,
    setHardwareCategories,
    setWriteCategory,
    deletePart,
  };
  return (
    <PartsContext.Provider value={value}>{children}</PartsContext.Provider>
  );
}
