import { Cat, CatContextType } from "@/interface/cats";
import { ReactNode, createContext, useEffect, useState } from "react";

const CatContext = createContext<CatContextType>({
  catsList: [],
  getCats: () => {},
});

const CatsProvider = ({ children }: { children: ReactNode }) => {
  const [catsList, setCatsList] = useState<Cat[]>([]);

  const getCats = async () => {
    try {
      const response = await fetch("https://data.latelier.co/cats.json");
      const cats = await response.json();

      setCatsList(cats.images);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CatContext.Provider value={{ catsList, getCats }}>
      {children}
    </CatContext.Provider>
  );
};

export { CatsProvider, CatContext };
