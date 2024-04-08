interface CatCardProps {
  imgUrl: string;
  onClick: () => void;
}

export default function CatCard({ imgUrl, onClick }: CatCardProps) {
  return (
    <img
      onClick={onClick}
      className="rounded-full w-80 h-80 duration-100 select-none cursor-pointer hover:scale-110 active:scale-90"
      src={imgUrl}
    ></img>
  );
}
