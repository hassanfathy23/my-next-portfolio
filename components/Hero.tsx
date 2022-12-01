import Link from "next/link";
import * as React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Inconsolata, Roboto } from '@next/font/google'

import { openModal } from "../store/uiSlice";
import { useAppDispatch, useAppSelector } from '../store/hooks';
import NavbarList from "./NavbarList";
import AnimatedBg from "./UI/AnimatedBg";

const inconsolata = Inconsolata({
  weight: '300',
  variable: '--font-inconsolata',
  subsets: ['latin']
})

const roboto = Roboto({
  weight: '300',
  variable: '--font-roboto',
  subsets: ['latin']
})


export default function Album() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { asPath } = router;
  const modalIsOpen = useAppSelector((state) => state.ui.modalIsOpen);
  const dropdownMenuIsOpen = useAppSelector(
    (state) => state.ui.dropdownMenuIsOpen
  );

  return (
    <AnimatedBg>
    <main className={`w-full absolute flex items-center justify-center h-full mt-16 mb-12 overflow-hidden`}>
      <div className="relative w-full md:w-3/5 xl:w-2/5 h-full z-30 py-28 flex flex-col gap-5 justify-center animate-fadeInSlowely">
        <h2 className={`p-4 text-white text-center text-5xl md:text-7xl ${inconsolata.variable} font-inconsolata`}>
          Hello, My Name Is <span>Hassan Fathy</span>
        </h2>
        <p className={`p-4 text-white text-center text-xl lg:text-2xl ${roboto.variable} font-roboto`}>
          I am junior full stack web developer. I am a solution-oriented and
          problem solver with 1 year of experience building and maintaining
          software and software architecture. I am highly skilled in
          communication, collaboration, and technical documentation.
          <br />
          <a
            href="#front-stack"
            className="text-white font-medium cursor-pointer animate-pulse"
          >
            below, you will learn about the stack i am expertise in
          </a>
        </p>
        <div className="flex flex-row justify-center gap-4">
          <Link href="/aboutme">
            <button className="px-3 py-1 text-xl md:text-2xl lg:text-base font-medium rounded-md border-2 border-white bg-white text-black">
              who i am
            </button>
          </Link>
          <button
            onClick={() => dispatch(openModal())}
            className="px-3 py-1 text-xl md:text-2xl lg:text-base font-medium rounded-md border-2 text-white border-white animate-frequency hover:animate-none transition-all duration-300 ease-in-out hover:border-white hover:bg-white hover:text-black"
          >
            contact me
          </button>
        </div>
      </div>
      {/* <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="\videos\animated-background.mp4" type="video/mp4" />
        your browser can not display this video
  </video> */}
      {dropdownMenuIsOpen && <NavbarList />}
    </main>
    </AnimatedBg>
  );
}
