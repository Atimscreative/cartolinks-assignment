import React from "react";
import Gallery from "@/public/svg/Gallery";
import HeadSet from "@/public/svg/HeadSet";
import { MdiBell } from "@/public/svg/Bell";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronDown } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import NavTabs from "./NavTabs";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="w-full top-0 left-0 fixed z-[999]">
      <div className="px-[2%] container py-4 mx-auto flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link href="/">
            <motion.div
              // initial={{ opacity: 0, scale: 0.8 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={`./images/krea-ai/krea-logo${
                  theme === "dark" ? "-light" : ""
                }.svg`}
                width={22}
                height={22}
                alt="Krea Ai logo"
                className={cn(
                  // theme === "light" ? "bg-white/80" : "bg-black/80",
                  "rounded-md size-[22px]"
                )}
              />
            </motion.div>
          </Link>

          {/* User dropdown */}
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 bg-white/80 rounded-lg dark:bg-black/80 backdrop-blur-lg p-1"
          >
            <Image
              src="/images/krea-ai/Avatar.svg"
              alt="Avatar"
              width={24}
              height={24}
            />
            <motion.span
              className="inline-flex gap-3 text-sm items-center"
              whileHover={{ color: "#6366f1" }} // indigo-500 on hover
              transition={{ duration: 0.2 }}
            >
              timilehinabegunde
              <ChevronDown size={20} />
            </motion.span>
          </motion.span>
        </div>

        <NavTabs />

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-sm gap-2 bg-white rounded-lg text-black dark:bg-black/80 backdrop-blur-lg p-2 inline-flex dark:text-white/80  items-center"
          >
            {" "}
            <Gallery className="size-5" />
            Gallery
          </Link>
          <Link
            href="/"
            className="text-sm gap-2 bg-white rounded-lg text-black dark:bg-black/80 backdrop-blur-lg p-2 inline-flex dark:text-white/80  items-center"
          >
            <HeadSet className="size-5" />
            Support
          </Link>

          <Button className="bg-white rounded-lg dark:bg-black/80 backdrop-blur-lg p-2">
            <MdiBell className="size-5" />
          </Button>

          <ModeToggle />

          <Image
            src="/images/krea-ai/Avatar.svg"
            alt="Avatar"
            width={24}
            height={24}
          />
        </div>
      </div>
    </header>
  );
}
