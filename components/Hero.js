import Link from "next/link";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Icon } from '@iconify/react';

import { openModal, openDropdownMenu } from "../store/uiSlice";

export default function Album() {
  const dispatch = useDispatch();
  const router = useRouter()
  const { asPath } = router
  const modalIsOpen = useSelector(state => state.ui.modalIsOpen)
  const dropdownMenuIsOpen = useSelector(state => state.ui.dropdownMenuIsOpen)

  return (
    <main className="w-full relative flex items-center justify-center h-[800px] mt-16 mb-12 overflow-hidden">
      <div className="relative w-full md:w-3/5 xl:w-2/5 h-full z-30 py-28 flex flex-col gap-10 justify-center animate-fadeInSlowely">
        <h2 className="p-4 text-white text-center text-5xl md:text-7xl font-medium">
          Hello, My Name Is <span>Hassan Fathy</span>
        </h2>
        <p className="text-white text-center text-xl lg:text-2xl font-medium">
          I am junior full stack web developer. I am a
          solution-oriented and problem solver with 1 year of experience
          building and maintaining software and software architecture. I
          am highly skilled in communication, collaboration, and
          technical documentation.
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
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="\videos\animated-background.mp4" type="video/mp4" />
        your browser can not display this video
      </video>
       {dropdownMenuIsOpen && <div className="fixed md:hidden px-2 py-1 bg-white top-5 right-1 z-50 animate-fadeIn">
        <div className="flex flex-col justify-center gap-3">
        <Link href="/">
          <div className="flex flex-row justify-start items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                className={`${
                  asPath === "/" ? "stroke-gray-700" : `stroke-gray-500`
                } group-hover:stroke-gray-700`}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"
              />
            </svg>
            <h3
              className={`px-1 py-1 cursor-pointer text-gray-500 font-medium transition-all duration-150 ${
                asPath === "/" && "text-gray-700"
              } group-hover:text-gray-700`}
            >
              home
            </h3>
          </div>
        </Link>
        <Link href="/aboutme">
          <div className="flex flex-row justify-start items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              className="fill-gray-500"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                fill={`${asPath === "/aboutme" ? "#374151" : `#64748b`}`}
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
              />
              <path
                fill={`${asPath === "/aboutme" ? "#374151" : `#64748b`}`}
                d="M464 336a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
              />
            </svg>
            <h3
              className={`px-1 py-1 cursor-pointer text-gray-500 font-medium transition-all duration-150 ${
                asPath === "/aboutme" && "text-gray-700"
              } group-hover:text-gray-700`}
            >
              about me
            </h3>
          </div>
        </Link>
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <rect
              x="0"
              y="0"
              width="512"
              height="512"
              fill="none"
              stroke="none"
            />
            <path
              fill="#6b7280"
              d="M472 48H40a24.028 24.028 0 0 0-24 24v368a24.028 24.028 0 0 0 24 24h88v-58.822a20.01 20.01 0 0 1 10.284-17.478l91.979-51.123L200 260.919V200a56 56 0 0 1 112 0v60.919l-30.263 75.655l91.979 51.126A20.011 20.011 0 0 1 384 405.178V464h88a24.028 24.028 0 0 0 24-24V72a24.028 24.028 0 0 0-24-24Zm-8 384h-48v-26.822a52.027 52.027 0 0 0-26.738-45.451L321.915 322.3L344 267.081V200a88 88 0 0 0-176 0v67.081l22.085 55.219l-67.347 37.432A52.027 52.027 0 0 0 96 405.178V432H48V80h416Z"
            />
          </svg>
          <h3
            onClick={() => dispatch(openModal())}
            className={`px-2 py-1 cursor-pointer text-gray-500 font-medium animate-frequency ${
              modalIsOpen && "animate-none text-gray-700"
            } hover:animate-none transition-all duration-150 hover:text-gray-700`}
          >
            contact me
          </h3>
        </div>
        <div onClick={() => dispatch(openDropdownMenu())} className="flex justify-center items-center cursor-pointer"><Icon icon="ep:circle-close" color="red" width="30" height="30" /></div>
        </div>
      </div>}
    </main>
  );
}
