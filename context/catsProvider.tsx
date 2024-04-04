import { Cat, CatContextType } from "@/interface/cats";
import { ReactNode, createContext, useEffect, useState } from "react";

const CatContext = createContext<CatContextType>({
  catsList: [],
  getCats: () => {},
  loading: true,
  getTwoRandomCats: () => {},
});

const CatsProvider = ({ children }: { children: ReactNode }) => {
  const [catsList, setCatsList] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);

  const getCats = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://data.latelier.co/cats.json");
      const cats = await response.json();

      if (cats.images.length) {
        cats.images.forEach((element: Cat) => {
          element.vote = 0;
        });
      }

      setCatsList(cats.images);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const getTwoRandomCats = async () => {
    const randomCat = catsList[Math.floor(Math.random() * catsList.length)];
    let randomCatTwo = catsList[Math.floor(Math.random() * catsList.length)];
    console.log("yooo ", randomCat, randomCatTwo);

    while (randomCatTwo.id === randomCat.id) {
      randomCatTwo = catsList[Math.floor(Math.random() * catsList.length)];
    }

    return [randomCat, randomCatTwo];
  };

  return (
    <CatContext.Provider
      value={{ catsList, getCats, loading, getTwoRandomCats }}
    >
      {children}
    </CatContext.Provider>
  );
};

export { CatsProvider, CatContext };
