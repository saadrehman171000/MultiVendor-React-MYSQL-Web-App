import React from "react";
import CoverImage from "../../../../public/CoverImage.jpg";
import Image from "next/image";
import Artist1 from "../../../../public/Artist1.jpg";
import Facebook from "../../../../public/facebook.svg";
import Tiktok from "../../../../public/tiktok.svg";
import Instagram from "../../../../public/instagram.svg";
import { Karla } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Props = {};
const inter = Karla({ subsets: ["latin"], weight: ["800", "400"] });

function page({}: Props) {
  return (
    <div className="min-h-screen pb-10">
      <div className="flex flex-col items-center justify-center bg-cover-image bg-cover aspect-video">
        <h1 className="text-4xl px-10 bg-white text-violet-700 py-3">
          "Discover the Enchantment of Music with{" "}
          <span className="text-black bg-lime-200 px-4">Maroon 5</span> 🎶! Let
          Book Now for $17 <span className="line-through">(was $24)</span> and
          Dive into Blissful Melodies 🎶🌟
        </h1>

        <div className="bg-violet-700 text-lime-300 text-3xl font-medium py-4 px-3 rounded-xl mt-20">
          Secure Your Spot Today and Get 20% Off! Limited Slots Available –
          Start Your Musical Journey Now!
        </div>
      </div>
      <div className="flex items-center justify-center -mt-20 ">
        <Image
          className="rounded-2xl overflow-hidden"
          src={Artist1}
          alt="Artist"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center  justify-center">
        <div className="flex space-x-5 mt-10">
          <Image width={64} src={Facebook} alt="Facebook" />
          <Image width={64} src={Instagram} alt="Instagram" />
          <Image width={64} src={Tiktok} alt="Tiktok" />
        </div>
        <h1 className="text-4xl font-medium mt-20 text-center">
          "Engage and Connect with Your Instructor Today!"
        </h1>
        <h1 className={`${inter.className} text-violet-700 text-[12rem] pb-20`}>
          Maroon 5
        </h1>

        <div className="w-full flex-col flex items-center justify-center py-10 mb-10 bg-violet-700">
          <div className="text-center bg-lime-200 py-4 px-20 rounded-lg text-violet-700">
            <h1 className={`${inter.className} text-8xl`}>2 of 12</h1>
            <h1 className="text-2xl">Slots with Maroon up for grab </h1>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <input
              className="px-4 border-lime-200 border-4 w-[400px] py-4 text-violet-700 placeholder:text-violet-700 placeholder:text-2xl text-2xl"
              placeholder="Name"
              type="text"
            />
            <input
              className="px-4 border-lime-200 border-4 w-[400px] py-4 text-violet-700 placeholder:text-violet-700 placeholder:text-2xl text-2xl"
              placeholder="Email"
              type="email"
            />
            <input
              className="col-span-2  border-lime-200 border-4 px-4 w-full py-4 text-violet-700 placeholder:text-violet-700 placeholder:text-2xl text-2xl"
              placeholder="Phone"
              type="number"
            />
            <Button className="col-start-2 py-6 bg-lime-200">Next</Button>
          </div>
        </div>

        <div className="flex flex-col space-y-3 px-10">
          <h1 className="text-4xl text-lime-200 font-bold">
            Why Choose Maroon 5's Music Session?
          </h1>
          <h1 className="text-xl">
            ✅ World-renowned Expertise: "Learn from the Grammy-winning legends
            themselves."
          </h1>
          <h1 className="text-xl">
            ✅ Personalized Guidance: "Receive one-on-one coaching tailored to
            your goals."
          </h1>
          <h1 className="text-xl">
            ✅ Proven Techniques: "Master the techniques that have made Maroon 5
            a global sensation."
          </h1>
          <h1 className="text-xl">
            ✅ Creative Inspiration: "Fuel your musical passion with inspiration
            from the best." Industry Know-How: "Gain insider knowledge about the
            music industry."
          </h1>
        </div>
        <h1 className="text-4xl mt-10 selection:bg-red-500">
          HEAR FROM OTHERS:
        </h1>
        <div className="grid grid-cols-3 gap-10">
          <video className="w-[300px] h-[600px]">
            <source src="/review.mp4" type="video/mp4" />
          </video>
          <video className="w-[300px] h-[600px]">
            <source src="/review.mp4" type="video/mp4" />
          </video>
          <video className="w-[300px] h-[600px]">
            <source src="/review.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-full px-20 mt-10">
          <h1 className="text-4xl py-10 font-extrabold">FaQs</h1>
          <Accordion type="single" collapsible className="w-full text-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>When was Maroon 5 formed?</AccordionTrigger>
              <AccordionContent className="text-lg">
                Maroon 5 was originally formed in 1994 under the name "Kara's
                Flowers" before adopting their current name in 2001.{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Who are the members of Maroon 5?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                The current members of Maroon 5 include Adam Levine (vocals and
                guitar), Jesse Carmichael (keyboards and guitar), Mickey Madden
                (bass), James Valentine (guitar), Matt Flynn (drums), and PJ
                Morton (keyboards).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What is Maroon 5's musical style?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Maroon 5 is known for their pop-rock sound, incorporating
                elements of R&B, funk, and dance into their music.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What is Maroon 5's breakthrough album?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Maroon 5's breakthrough album is "Songs About Jane," released in
                2002, featuring hit singles like "This Love" and "She Will Be
                Loved."
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How many Grammy Awards has Maroon 5 won?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                As of my knowledge cutoff date in January 2022, Maroon 5 has won
                several Grammy Awards, including Best New Artist in 2005.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default page;
