import React from "react";
import Image from 'next/image'
type Props = {};

    
function Hero({}: Props) {
  return (
    <div className="container relative ">
      <div className="grid grid-cols-2 m-10 align-middle">
        <div className="p-10 text-left">
          <h1 className="text-4xl font-bold">BEST PRODUCT</h1>
          <h1 className="text-4xl font-bold">FOR YOUR PETS</h1>
          <p className="text-lg mt-5">
            Looking for the best food, accessories and more for your pet? Look no further than PetsHub! We offer everything you need to keep your pet happy and healthy, all while providing amazing customer service. We know that your pet is a member of the family, and we treat them as such!
          </p>
        </div>
        <div className="ml-10 text-center">
          <Image src="/hero-object.png" width={400} height={280} />
        </div>
      </div>
      </div>
  );
}

export default Hero;