import { Icon } from "@iconify/react";
import {AnimationOnScroll} from "react-animation-on-scroll";

export default function Stack({ stack, header, id }) {
  return (
    <div
      id={id}
      className="w-full sm:w-10/12 py-6 sm:px-3 mx-auto my-3 flex flex-col justify-center gap-2 animate-zoomIn rounded-md"
    >
      <h2 className="text-center text-xl font-medium capitalize text-black ">
        {header}
      </h2>
      <AnimationOnScroll animateIn="animate-zoomIn" animateOnce={true}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((element) => (
            <div
              key={element.id}
              className={`col-span-1 p-1 flex flex-row gap-2 rounded-md ${
                element.important
                  ? "bg-gradient-to-r to-yellow-50 from-yellow-200"
                  : "bg-white"
              } shadow-lg shadow-black/20`}
            >
              <div className="p-1 ">
                <Icon icon={element.url} width="30" height="30" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="p-1 text-blue-700 font-medium capitalize">
                  {element.name}
                </p>
                <p className="p-1 text-gray-700 font-medium capitalize">
                  {element.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimationOnScroll>
    </div>
  );
}
