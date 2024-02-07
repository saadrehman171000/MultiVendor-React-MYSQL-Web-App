import HeroPage from "@/components/HeroPage";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import Artist1 from "../../public/Artist1.jpg";
import Artist2 from "../../public/Artist2.jpg";
import Artist3 from "../../public/Artist3.jpg";
import Artist4 from "../../public/Artist4.jpg";
import Link from "next/link";

export default function Home() {
  const artists = [
    Artist1,
    Artist2,
    Artist3,
    Artist4,
    Artist1,
    Artist2,
    Artist3,
    Artist4,
  ];
  return (
    <main className="flex flex-col items-center justify-between ">
      <HeroPage />
      <h1 className="text-3xl font-medium my-10">
        Here are our top Instructors
      </h1>
      <div className="w-[80%]">
        <Carousel
          opts={{
            align: "start",
          }}
          className="min-w-xl h-96"
        >
          <CarouselContent>
            {artists.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Link href="/artist/landing-page" className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <Image src={src} alt="Artist" width={500} height={500} />
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
