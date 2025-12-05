"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grip grid-cols-1 lg:grid-cols-12 lg:flex ">
        <div className="cols-span-7 place-self-center ">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold px-3">
            <span className="text-6xl bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent">
              Hello, I'm   {"  "}
            </span>
            
    <TypeAnimation
      sequence={[
        'Mostapha Zahiri',
        1500,
        'Software Engineer',
        1500,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-secondary-500 text-lg lg:text-xl px-2.5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            pariatur reprehenderit doloribus sed quisquam voluptate omnis
            expedita. Ut voluptates iusto voluptate? Perferendis ab modi quos
            eius quae esse iure atque!
          </p>
          <div className="mt-5 flex justify-center lg:justify-start lg:mt-14 lg:px-11">
            <button className="py-2 px-6 border-2 border-primary-500 rounded-full bg-primary-500 hover:bg-primary-600 text-white mr-3.5 transition-colors">
              Hire me
            </button>
            <button className="py-2 px-6 border-2 border-primary-500 rounded-full bg-transparent hover:bg-secondary-900 text-white transition-colors">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0 lg:mr-10">
          <div className="rounded-full w-[300px] h-[300px] overflow-hidden">
            <Image
              src="/Images/profile.png"
              width={300}
              height={300}
              className="object-cover rounded-full"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
