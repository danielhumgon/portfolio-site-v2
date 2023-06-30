"use client";
import React from "react";
import Image from "next/image";
// import logo from "./assets/logo.svg"
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
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import gmail from "./assets/gmail.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
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
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image className="w-16 h-16 m-auto" src={js} alt="JavaScript skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          JavaScript
        </p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={react} alt="React skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          React
        </p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={node} alt="NodeJs skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          NodeJS
        </p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={mongo} alt="Mongo skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          MongoDB
        </p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={next} alt="NextJS skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          NextJS
        </p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={redux} alt="Redux skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          Redux
        </p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={git} alt="Git skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">Git</p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={sass} alt="Sass skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          Sass
        </p>
      </div>
      <div>
        <Image
          className="w-16 h-16 m-auto"
          src={tailwind}
          alt="Tailwind skill"
        />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          Tailwindcss
        </p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={gatsby} alt="Gatsby skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          Gatsby
        </p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={ipfs} alt="IPFS skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          IPFS
        </p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={figma} alt="Figma skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          Figma
        </p>
      </div>
      <div>
        <Image className="w-16 h-16 m-auto" src={ubuntu} alt="Ubuntu skill" />
        <p className="text-slate-50 text-xs font-light mt-2 text-center">
          Ubuntu
        </p>
      </div>
    </Slider>
  );
};

export default function Home() {
  return (
    <>
      {/* <header className="bg-sky-950 p-3">
        <Image className="h-8 w-10" src={logo} alt="logo" />
      </header> */}
      <main className="bg-sky-950 p-6">
        {/* Hero Section */}
        <div className="relative flex flex-col  w-full max-w-lg sm:text-left lg:text-left">
          <div className="absolute top-7 -left-4 w-32 h-32 sm:w-72 sm:h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-blob"></div>
          <div className="absolute top-7 -right-4 w-32 h-32 sm:w-72 sm:h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-2 left-40 w-32 h-32 sm:w-72 sm:h-72 bg-sky-600 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-blob animation-delay-4000"></div>

          <h2 className="text-sky-200 text-5xl font-thin mb-2 sm:text-8xl sm:ml-24 lg:text-9xl lg:ml-32">
            Daniel
          </h2>
          <h2 className="text-sky-200 text-5xl font-thin ml-4 mb-2 sm:text-8xl sm:ml-36 lg:text-9xl lg:ml-48">
            Gonzalez
          </h2>
          <h3 className="text-sky-50 text-5xl ml-16 font-medium mb-2 sm:text-8xl sm:ml-52 lg:text-9xl lg:ml-72">
            Fullstack
          </h3>
          <h3 className="text-sky-50 text-5xl ml-24 font-medium mb-2 sm:text-8xl sm:ml-64 lg:text-9xl lg:ml-96">
            Developer
          </h3>
          <div className="border border-gray-100 opacity-20 w-11/12 self-center mt-6 mb-6 sm:mt-12 sm:mb-16 lg:mt-8"></div>
        </div>
        <div className="lg:px-12">
          {/* About Section */}
          <div>
            <h2 className="text-sky-50 font-medium text-xl mb-3 sm:text-3xl sm:mb-8">
              About
            </h2>
            <p className="text-sky-200 mb-12 sm:w-3/4 sm:text-lg">
              Hello there! My name is Daniel Gonzalez, a Fullstack Developer
              with a passion for crafting beautiful and user-friendly websites.
              With over 5 years of experience in the industry, I specialize in
              creating intuitive and engaging user experiences that drive
              results. Whether you need a simple brochure site or a complex web
              application, I have the skills and expertise to bring your vision
              to life.
            </p>
          </div>
          {/* Skills Carousel */}
          <div className="mb-14">
            <h2 className="text-sky-50 font-medium text-xl mb-4 sm:text-3xl sm:mb-8">
              Skills
            </h2>
            <div className="sm:w-3/4 m-auto">
              <Carousel />
            </div>
          </div>
          {/* Projects Section */}
          <h2 className="text-sky-50 font-medium text-xl mb-3 sm:text-3xl sm:mb-8">
            Projects
          </h2>
          <div className="flex flex-col gap-16 lg:p-14">
            {/* Project 1 */}
            <div className="p-4">
              <Image
                className="relative w-11/12 m-auto sm:rounded-t-2xl"
                src={project1}
                alt="token tiger"
              />
              <h3 className="relative text-center text-sm text-zinc-950 bg-sky-500 py-1 px-6 font-bold w-4/5 m-auto -mt-6 z-10 sm:text-xl sm:rounded-xl">
                Token Tiger
              </h3>
              <div className="bg-sky-800 rounded-2xl p-4 -m-4 text-center sm:w-11/12 sm:m-auto sm:-mt-6">
                <p className="text-sky-200 text-sm mt-2 mb-2 sm:text-xl sm:w-4/5 sm:m-auto sm:p-7">
                  A user-friendly NFT creator built on the BitcoinCash
                  blockchain, create and share unique digital assets with ease.
                  Built with React, Redux and SCSS.
                </p>
                <a
                  className="text-sky-100 underline hover:font-semibold sm:text-xl"
                  href="https://tokentiger.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="p-4">
              <Image
                className="relative w-11/12 m-auto sm:rounded-t-2xl"
                src={project2}
                alt="Launchpad IP Dashboard"
              />
              <h3 className="relative text-center text-sm text-zinc-950 bg-sky-500 py-1 px-6 font-bold w-4/5 m-auto -mt-6 z-10 sm:text-xl sm:rounded-xl">
                Launchpad IP Dashboard
              </h3>
              <div className="bg-sky-800 rounded-2xl p-4 -m-4 text-center sm:w-11/12 sm:m-auto sm:-mt-6">
                <p className="text-sky-200 text-sm mt-2 mb-2 sm:text-xl sm:w-4/5 sm:m-auto sm:p-7">
                  Dashboard app to authenticate files using the BitcoinCash
                  blockchain, tokenize and protects digital assets. Built with
                  Gatsby, Redux and AdminLTE.
                </p>
                <a
                  className="text-sky-100 underline hover:font-semibold sm:text-xl"
                  href="https://launchpadip.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="p-4">
              <Image
                className="relative w-11/12 m-auto sm:rounded-t-2xl"
                src={project3}
                alt="STATION 3"
              />
              <h3 className="relative text-center text-sm text-zinc-950 bg-sky-500 py-1 px-6 font-bold w-4/5 m-auto -mt-6 z-10 sm:text-xl sm:rounded-xl">
                STATION 3
              </h3>
              <div className="bg-sky-800 rounded-2xl p-4 -m-4 text-center sm:w-11/12 sm:m-auto sm:-mt-6">
                <p className="text-sky-200 text-sm mt-2 mb-2 sm:text-xl sm:w-4/5 sm:m-auto sm:p-7">
                  App built on the Avalanche Network for indie game developers
                  to showcase and distribute their games. Built with React,
                  SCSS, Three.js and Ethers.
                </p>
                <a
                  className="text-sky-100 underline hover:font-semibold sm:text-xl"
                  href="https://www.stationthree.xyz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
            {/* Project 4 */}
            <div className="p-4">
              <Image
                className="relative w-11/12 m-auto sm:rounded-t-2xl"
                src={project4}
                alt="Crypto Tracker & Wallet"
              />
              <h3 className="relative text-center text-sm text-zinc-950 bg-sky-500 py-1 px-6 font-bold w-4/5 m-auto -mt-6 z-10 sm:text-xl sm:rounded-xl">
                Crypto Tracker & Wallet
              </h3>
              <div className="bg-sky-800 rounded-2xl p-4 -m-4 text-center sm:w-11/12 sm:m-auto sm:-mt-6">
                <p className="text-sky-200 text-sm mt-2 mb-2 sm:text-xl sm:w-4/5 sm:m-auto sm:p-7">
                  App built using React and SCSS to track cryptocurrency prices.
                  Connects to MetaMask using Ethers, allows easy management of
                  your Energi tokens.
                </p>
                <a
                  className="text-sky-100 underline hover:font-semibold sm:text-xl"
                  href="https://frontend-challenge-danielhumgon.vercel.app/wallet"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 opacity-20 w-11/12 m-auto mt-14 mb-6 sm:mb-14"></div>
          {/* Contact Section */}

          <div className="mt-14 sm:px-12 lg:px-12">
            <h2 className="text-sky-50 font-medium text-xl mb-3 sm:text-3xl sm:mb-8">
              Contact
            </h2>
            <p className="text-sky-200 mb-12 sm:w-3/4 sm:text-lg">
              I am currently looking for a job opportunity, if you have
              questions or just want to chat, feel free to send me a message and
              I will get back to you!
            </p>
            <div className="flex justify-around mt-6 sm:justify-center sm:gap-8 lg:gap-12">
              <a href="mailto: danielhumgon@gmail.com">
                <Image
                  className="w-12 h-12 m-auto"
                  src={gmail}
                  alt="gmail icon"
                />
              </a>
              <a
                href="https://github.com/danielhumgon"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-12 h-12 m-auto"
                  src={github}
                  alt="github icon"
                />
              </a>
              <a
                href="https://twitter.com/danielhumgon"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-12 h-12 m-auto"
                  src={twitter}
                  alt="twitter icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/danielhumgon/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="w-12 h-12 m-auto"
                  src={linkedin}
                  alt="linkedin icon"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-sky-950 text-center p-4">
        <p className="text-zinc-400 text-xs">
          &copy; Copyright {new Date().getFullYear()}, Daniel Gonzalez
        </p>
      </footer>
    </>
  );
}
