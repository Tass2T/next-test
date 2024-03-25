import Link from "next/link";

export default function NavbarComponent() {
  return (
    <div className="fixed left-[calc(50%-9rem)] top-6 w-72 h-16 bg-white/50 rounded-xl backdrop-blur-sm flex items-center justify-evenly">
      <Link href={"/"}>Home</Link>
      <Link href={"/list"}>Liste des chats</Link>
    </div>
  );
}
