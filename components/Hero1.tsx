import React from "react";
import Image from "next/image";

export default function Hero1() {
  return (
    <div className="bg-customGreen1  my-16 h-auto">
      <div className="max-w-5xl mx-auto px-4 py-12 flex items-center">
        <div className="pr-24">
          <h1 className="font-extrabold text-customGreen text-xl pb-4">
            Amazing <br /> deals for you
          </h1>
          <p className="text-sm">
            Unlock unbeatable savings on exquisite furniture pieces! Explore our
            amazing deals and elevate your space without breaking the bank. Do
            not miss out on the chance to transform your home with affordability
            and style.
          </p>
        </div>
        <div>
          <div className="flex gap-4 mb-8">
            <div>
              {" "}
              <div className="flex mb-4">
                <Image
                  src="./icons/trusted.svg"
                  alt="trusted icon"
                  width={20}
                  height={20}
                />
                <span className="font-bold pl-4">Trusted</span>
              </div>
              <p className="text-sm">
                Each piece is crafted with quality and precision, ensuring
                durability. Experience peace of mind as you furnish your space
                with our trusted design.
              </p>
            </div>

            <div>
              {" "}
              <div className="flex mb-4">
                <Image
                  src="./icons/warranty.svg"
                  alt="warranty icon"
                  width={20}
                  height={20}
                />
                <span className="font-bold pl-4">Sure warranty</span>
              </div>
              <p className="text-sm">
                Your satisfaction is our priority and we stand behind the
                quality of our products. Shop confidently knowing that we have
                got you covered.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              {" "}
              <div className="flex mb-4">
                <Image
                  src="./icons/moneybag.svg"
                  alt="moneybag icon"
                  width={20}
                  height={20}
                />
                <span className="font-bold pl-4">Save cost</span>
              </div>
              <p className="text-sm">
                Maximize savings without compromising quality! Explore our cost
                effective furniture solutions designed <br /> to elevate your
                space within budget.
              </p>
            </div>

            <div>
              {" "}
              <div className="flex mb-4">
                <Image
                  src="./icons/bundle.svg"
                  alt="bundle icon"
                  width={20}
                  height={20}
                />
                <span className="font-bold pl-4">Bundle offer</span>
              </div>
              <p className="text-sm">
                Elevate your entire space with a curated selection of furniture
                pieces at an unbeatable price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
