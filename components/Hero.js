import * as React from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../store/uiSlice";

export default function Album() {
  const dispatch = useDispatch()

  return (
    <main className="w-full relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div className="relative w-2/5 z-30 py-28 flex flex-col gap-10 justify-center">
        <h2 className="p-4 text-white text-center text-7xl font-medium">
          Hello, My Name Is <span>Hassan Fathy</span>
        </h2>
        <p className="text-white text-center text-lg font-medium">
          I'm junior full stack web developer. I'm a solution-oriented and
          problem solver with 1 year of experience building and maintaining
          software and software architecture. I'm highly skilled in
          communication, collaboration, and technical documentation.
          <br />
            <a
              href="#front-stack"
              className="text-white font-medium cursor-pointer animate-pulse"
            >
              below, you will learn about the stack i'm expertise in
            </a>
        </p>
        <div className="flex flex-row justify-center gap-4">
          <button className="px-3 py-1 font-medium rounded-md border-2 border-white bg-white text-black">who i am</button>
          <button onClick={() => dispatch(openModal())} className="px-3 py-1 font-medium rounded-md border-2 text-white border-white transition-all duration-300 ease-in-out hover:border-white hover:bg-white hover:text-black">contact me</button>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="\videos\animated-background.mp4" type="video/mp4" />
        your browser can't display this video
      </video>
    </main>
  );
}
