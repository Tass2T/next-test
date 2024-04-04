"use client";
import { CatContext } from "@/context/catsProvider";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { getTwoRandomCats, catsList, getCats } = useContext(CatContext);
  const [twoCats, setTwoCats] = useState([]);

  const getTwoCats = async () => {
    const result = await getTwoRandomCats();

    setTwoCats(result);
  };

  useEffect(() => {
    getCats();
  }, []);

  useEffect(() => {
    if (catsList.length) {
      getTwoCats();
    }
  }, [catsList]);

  return (
    <span className="flex w-full h-full">
      <div className="flex-1 bg-[#8E0093]"></div>
      <div className="flex-1 bg-custom"></div>
    </span>
  );
}
