import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Sliders() {
  return (
    <div className="container mx-auto w-full mt-32 px-[2%]">
      <div className="flex gap-10 w-max">
        <div>
          <div className="rounded-2xl relative overflow-hidden h-[400px] w-[800px]">
            <div className="absolute w-full h-full top-0 left-0 z-10 bg-black/20 flex items-end justify-between p-8">
              <div className="w-[60%]">
                <h3 className="text-white font-medium text-2xl">
                  WAN 2.2 Image generation
                </h3>
                <p className="text-white/80">
                  Generate complex images with the brand new and powerful WAN
                  2.2 model. Exceptional prompt adherence and ultra-realistic
                  textures.
                </p>
              </div>
              <Button className="bg-white hover:bg-white text-black rounded-full h-auto py-3 px-5">
                Try WAN 2.2
              </Button>
            </div>
            <Image
              src="/images/announce-wan-2-2-image.webp"
              width={1920}
              height={1067}
              alt="Announce WAN"
              className="w-full h-full object-center object-cover absolute top-0 left-0"
            />
          </div>
          <div className="flex gap-4 justify-end mt-6 pr-10">
            {Array.from({ length: 9 }, (_, i) => (
              <span
                key={i}
                className={cn(
                  "size-2 rounded-full bg-neutral-300 cursor-pointer dark:bg-neutral-100/20",
                  i === 0 && "bg-neutral-950 dark:bg-neutral-100"
                )}
              ></span>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-2xl relative overflow-hidden h-[400px] w-[800px]">
            <video
              playsInline
              poster="/images/OSSKreaFlux1_poster.webp"
              preload="none"
              muted
              loop
              className="w-full h-full absolute top-0 left-0 object-center object-cover"
            >
              <source src="/images/OSSKreaFlux1_video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex gap-3 mt-1 relative left-[65%]">
            <Button
              size={"icon"}
              className="bg-neutral-300 p-2 rounded-full text-black hover:bg-neutral-400 dark:bg-neutral-100"
            >
              <ChevronLeft size={32} className="scale-125" />
            </Button>
            <Button
              size={"icon"}
              className="bg-neutral-300 p-2 rounded-full text-black hover:bg-neutral-400 dark:bg-neutral-100"
            >
              <ChevronRight size={32} className="scale-125" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
