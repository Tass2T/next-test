"use client";
import CatCard from "@/components/CatCard";
import { CatContext } from "@/context/catsProvider";
import { Cat } from "@/interface/cats";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { getTwoRandomCats, catsList, getCats, addOneVoteToACat } =
    useContext(CatContext);
  const [twoCats, setTwoCats] = useState<Cat[]>([]);

  const getTwoCats = () => {
    getTwoRandomCats().then((res) => {
      setTwoCats(res);
    });
  };

  useEffect(() => {
    if (!twoCats.length) getCats();
  }, []);

  useEffect(() => {
    if (catsList.length) {
      getTwoCats();
    }
  }, [catsList]);

  const vote = (id: string): void => {
    console.log(id);

    addOneVoteToACat(id);
    getTwoCats();
  };

  return (
    <span className="flex w-full h-full items-center justify-center gap-40 bg-gradient-to-r from-[#8E0093] from-0% to-50% to-custom from-50% to-100%">
      {twoCats.length && (
        <>
          <CatCard
            onClick={() => vote(twoCats[0].id)}
            imgUrl={twoCats[0].url}
          ></CatCard>
          <CatCard
            onClick={() => vote(twoCats[1].id)}
            imgUrl={twoCats[1].url}
          ></CatCard>
        </>
      )}
    </span>
  );
}
