"use client";
import { CatContext } from "@/context/catsProvider";
import { useContext, useEffect } from "react";

export default function Home() {
  const { catsList, getCats } = useContext(CatContext);
  useEffect(() => {
    if (!catsList.length) getCats();
  }, []);

  return (
    <span className="flex w-full h-full">
      <div className="flex-1 bg-[#8E0093]"></div>
      <div className="flex-1 bg-custom"></div>
    </span>
  );
}
