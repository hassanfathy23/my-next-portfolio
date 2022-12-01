import Link from "next/link"

import { openModal } from "../store/uiSlice"
import { useAppDispatch } from '../store/hooks';

export default function Example() {
  const dispatch = useAppDispatch()
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-black">get in touch with me</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <span
                onClick={() => dispatch(openModal())}
                className="inline-flex items-center justify-center animate-frequency hover:animate-none rounded-md border border-transparent cursor-pointer capitalize bg-black px-5 py-3 text-base font-medium text-white"
              >
                contact me
              </span>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/aboutme"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-black hover:bg-indigo-50"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  