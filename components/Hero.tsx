import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="max-w-5xl mx-auto my-12 px-4 flex items-center justify-between">
      <div className="pr-12">
        <h1 className="text-xl font-extrabold pb-2">
          We help you make minimalist and modern interior decisions
        </h1>
        <p className="text-sm pb-4">
          Experience modern elegance and minimalist charm with our curated
          furniture selection. Elevate your space with sleek designs and clean
          lines. Discover timeless pieces that speak volumes in understated
          sophistication
        </p>
        <div className="pb-4">
          <span className="pr-4">
            <Button
              radius="full"
              className="font-bold text-white bg-customGreen px-6"
            >
              Shop now
            </Button>
          </span>
          <span>
            <Button
              radius="full"
              variant="bordered"
              className=" font-bold text-customGreen border-customGreen"
            >
              Explore now
            </Button>
          </span>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-lg">5+</span>{" "}
            <span className="text-sm">experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-lg">2M</span>{" "}
            <span className="text-sm">customers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-lg">50K+</span>{" "}
            <span className="text-sm">projects</span>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="./images/heroimage.svg"
          alt="hero image"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
}
