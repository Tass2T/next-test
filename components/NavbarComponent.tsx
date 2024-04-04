"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const pathName = usePathname();

  return (
    <div className="bg-main fixed left-[calc(50%-4.5rem)] top-6 w-36 h-16 rounded-xl flex overflow-hidden shadow-2xl bg-white/40 backdrop-blur-sm">
      <Link
        className={`flex-1 flex items-center justify-center w-24 duration-150 hover:bg-white/50 ${
          pathName === "/" ? "bg-white/60" : ""
        }`}
        href={"/"}
      >
        Vote
      </Link>
      <Link
        className={`flex-1 flex items-center justify-center hover:bg-white/50 w-24 duration-150 ${
          pathName === "/list" ? "bg-white/60" : ""
        }`}
        href={"/list"}
      >
        Liste
      </Link>
    </div>
  );
}
