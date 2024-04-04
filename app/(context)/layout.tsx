"use client";
import { CatsProvider } from "@/context/catsProvider";
import { ReactNode } from "react";

export default function ContextLayout({ children }: { children: ReactNode }) {
  return <CatsProvider>{children}</CatsProvider>;
}
