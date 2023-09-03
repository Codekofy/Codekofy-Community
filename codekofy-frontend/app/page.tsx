import images from "@/constants/images";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-14">CodeKofy</h1>
      <Image
        src={images.codeKofy}
        alt="codekofy Logo"
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
