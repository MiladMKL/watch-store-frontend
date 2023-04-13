import Image from "next/image";
import { Inter } from "next/font/google";
import Slider from "@/components/Slider";
import ShoeCard from "@/components/ProductCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Slider />

      <div className="w-full flex justify-between items-center max-w-screen-2xl px-5 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
          <ShoeCard />
        </div>
      </div>
    </main>
  );
}
