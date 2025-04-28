import Image from "next/image";
import hehe from "@/public/hehe.jpg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-4xl mb-2 mt-4">Daniels tax</h1>
      <p className="mb-4">Du är i goda händer!</p>
      <Image
        alt=""
        src={hehe}
        className="w-98 h-1/2"
        width={1920}
        height={1080}
      />
      <a
        href="https://suno.com/song/bb5c29cb-cba4-4e6e-b26b-9bb5b689fc17?sh=cYwA2tnuqRqCn7bg"
        className="border rounded px-4 py-2 mt-4 mb-6"
      >
        Kalle
      </a>
      <a
        href="https://suno.com/song/a6bce859-4de4-45a2-9c25-21bd5cd30ba0?sh=HHx2IWc0rtWiSn2S"
        className="border rounded px-4 py-2 mt-4 mb-6"
      >
        Dampe
      </a>
    </div>
  );
}
