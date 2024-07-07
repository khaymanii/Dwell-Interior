import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto my-16 px-4 flex items-center">
      {" "}
      <div className="lg:pr-24 lg:w-1/2 text-center lg:text-left">
        <h1 className="font-extrabold text-xl md:text-2xl lg:text-2xl pb-4">
          About Us
        </h1>
        <p className="text-sm md:text-base lg:text-base pb-4">
          We curate a collection of furniture that embodies timeless elegance
          and functional design. Our mission is to provide high-quality, trusted
          pieces that not only enhance your space but also reflect our unique
          style.
        </p>
        <Button
          radius="full"
          variant="bordered"
          className="font-semibold text-customGreen border-customGreen  hover:text-white hover:bg-customGreen"
        >
          Contact us
        </Button>{" "}
      </div>
      <div>
        <Image
          src="./images/aboutimage1.svg"
          alt="aboutimage1"
          width={400}
          height={400}
        />
      </div>
      <div className="px-4">
        <Image
          src="./images/aboutline.svg"
          alt="aboutline"
          width={2}
          height={2}
          className="h-[290px] w-2"
        />
      </div>
      <div>
        <Image
          src="./images/teamimage.svg"
          alt="aboutline"
          width={120}
          height={120}
          className=""
        />
      </div>
    </div>
  );
}
