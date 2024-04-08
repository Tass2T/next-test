"use client";
import NavbarComponent from "@/components/NavbarComponent";
import "./globals.css";
import { CatsProvider } from "@/context/catsProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <CatsProvider>
        <body>
          <NavbarComponent />
          {children}
        </body>
      </CatsProvider>
    </html>
  );
}
