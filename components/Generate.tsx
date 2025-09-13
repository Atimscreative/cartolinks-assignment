import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Generate() {
  return (
    <>
      <div className="container mx-auto w-full mt-10 px-[2%]">
        <h3 className="font-medium text-2xl text-black mb-5 dark:text-white">
          Generate
        </h3>

        <div className="grid grid-cols-4 gap-6">
          {generate.map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="grid grid-cols-[50px_1fr] gap-3 items-center">
                <span
                  style={{
                    background: item.bgColor,
                    // width: "42px",
                    // height: "42px",
                  }}
                  className="inset-ring-[0.5px] rounded-[10px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-[50px] inline-flex justify-center items-center"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                    className="size-8"
                  />
                </span>
                <div>
                  <div className="inline-flex items-center gap-2">
                    <h3 className="font-medium text-base dark:text-white">
                      {item.label}
                    </h3>
                    {item.isNew && (
                      <Badge className="bg-blue-600 text-white rounded-full text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-500 text-balance">
                    {item.content}
                  </p>
                </div>
              </div>
              <Button className="bg-neutral-200 text-black py-2 hover:bg-neutral-300 text-sm h-auto rounded-full dark:bg-neutral-100">
                Open
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto w-full mt-20 px-[2%]">
        <h3 className="font-medium text-2xl text-black mb-5 dark:text-white">
          Gallery
        </h3>
      </div>
    </>
  );
}

const generate = [
  {
    label: "Image",
    content: "Generate images with custom styles in Flux and Ideogram.",
    icon: "/images/krea-ai/image.svg",
    bgColor: "linear-gradient(0deg, #D0E3F1 0%, #294962 100%)",
    isNew: true,
  },
  {
    label: "Video",
    content: "Generate videos with Hailuo, Pika, Runway, Luma, and more.",
    icon: "/images/krea-ai/video.svg",
    bgColor: "#faaa00",
    isNew: false,
  },
  {
    label: "Enhancer",
    content: "Upscale and enhance images and videos up to 22K.",
    icon: "/images/krea-ai/enhancer.svg",
    bgColor: "linear-gradient(0deg, #888888 0%, #000000 100%)",
    isNew: true,
  },
  {
    label: "Realtime",
    content: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: "/images/krea-ai/realtime.svg",
    bgColor:
      "linear-gradient(0deg, #CEF6FF 0%, oklch(79.72% 0.1583 221.31) 35%, oklch(65.75% 0.1796 237.8689) 100%)",
    isNew: false,
  },
  {
    label: "Edit",
    content: "Add objects, change style, or expand photos and generations.",
    icon: "/images/krea-ai/edit.svg",
    bgColor: "linear-gradient(0deg, #AE91CA 0%, #592A85 60%, #180728 100%)",
    isNew: true,
  },
  {
    label: "Video LipSync",
    content: "Lip sync any video to any audio.",
    icon: "/images/krea-ai/video-lipsync.svg",
    bgColor: "linear-gradient(0deg, #BBCA91 0%, #3C878F 60%, #07280F 100%)",
    isNew: true,
  },
  {
    label: "Motion Transfer",
    content: "Transfer motion to images and animate characters.",
    icon: "/images/krea-ai/motion.svg",
    bgColor: "#1B1C1D",
    isNew: true,
  },
  {
    label: "Train",
    content: "Teach Krea to replicate your style, products or characters",
    icon: "/images/krea-ai/folder.svg",
    bgColor: "",
    isNew: false,
  },
];
