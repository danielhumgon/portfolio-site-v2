'use client'
import React from "react";
import Image from "next/image";
import hero from "./assets/hero.svg";
import js from "./assets/javascript.png";
import react from "./assets/react.svg";
import node from "./assets/node.svg";
import mongo from "./assets/mongo.svg";
import next from "./assets/next.svg";
import redux from "./assets/redux.svg";
import git from "./assets/git.png";
import sass from "./assets/sass.svg";
import tailwind from "./assets/tailwind.svg";
import gatsby from "./assets/gatsby.svg";
import ipfs from "./assets/ipfs.png";
import figma from "./assets/figma.svg";
import ubuntu from "./assets/ubuntu.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false
  };
  return (
    <Slider {...settings}>
      <div>
        <Image className="w-16 h-16" src={js} alt="JavaScript skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={react} alt="React skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={node} alt="NodeJs skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={mongo} alt="Mongo skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={next} alt="NextJS skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={redux} alt="Redux skill" />
      </div>
      <div>
        <Image className="w-16 h-16" src={git} alt="Git skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={sass} alt="Sass skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={tailwind} alt="Tailwind skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={gatsby} alt="Gatsby skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={ipfs} alt="IPFS skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={figma} alt="Figma skill" />
      </div>
      <div>
        <Image className="w-16 h-16"  src={ubuntu} alt="Ubuntu skill" />
      </div>
    </Slider>
  );
};

export default function Home() {
  return (
    <>
      <header className="bg-sky-950">
        <h1>Logo</h1>
      </header>
      <main className="bg-sky-950 p-6">
        <div className="flex flex-col w-full">
          <h2 className="text-sky-200 text-5xl font-thin mb-2">Daniel</h2>
          <h2 className="text-sky-200 text-5xl font-thin ml-4 mb-2">
            Gonzalez
          </h2>
          <h3 className="text-sky-50 text-5xl ml-16 font-medium mb-2">
            Fullstack
          </h3>
          <h3 className="text-sky-50 text-5xl ml-24 font-medium mb-2">
            Developer
          </h3>
          <div className="border border-gray-100 opacity-20 w-11/12 self-center mt-6 mb-6"></div>
        </div>
        <div>
          <h2 className="text-sky-50 font-medium text-xl mb-3">About</h2>
          <p className="text-sky-200 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            aperiam reiciendis totam est fugiat magni ipsum, nemo illo sapiente
            similique iusto fuga voluptas tempora accusamus ipsam!
            Exercitationem et eum fuga.
          </p>
        </div>
        <div>
          <h2 className="text-sky-50 font-medium text-xl mb-3">Skills</h2>
          <Carousel />
        </div>
      </main>
      <footer className="bg-sky-950">2023 Copyright</footer>
    </>
  );
}
