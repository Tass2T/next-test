"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NavbarComponent() {
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, []);

  return (
    <div className="py-6 w-full flex justify-center">
      <div className="h-16 bg-white/50 rounded-xl backdrop-blur-sm flex overflow-hidden">
        <Link
          className={`flex-1 flex items-center justify-center w-24 duration-150 ${pathName === "/" ? 'bg-white/60' : 'hover:bg-white/20'}`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`flex-1 flex items-center text-center w-24 duration-150  ${pathName === "/list" ? 'bg-white/60' : 'hover:bg-white/20'}`}
          href={"/list"}
        >
          Liste des chats
        </Link>
      </div>
    </div>
  );
}
