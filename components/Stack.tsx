import { Icon } from "@iconify/react";
import {AnimationOnScroll} from "react-animation-on-scroll";

type AppProps = {
  stack: {
    id: string;
    url: string;
    name: string;
    description: string;
    important: boolean;
  }[];
  header: string;
  id: string;
}

export default function Stack({ stack, header, id }: AppProps): JSX.Element {
  return (
    <div
      id={id}
      className="w-full sm:w-10/12 py-6 px-4 mx-auto my-3 flex flex-col justify-center gap-2 animate-zoomIn rounded-md"
    >
      <h2 className="text-center text-xl font-medium capitalize text-black dark:text-gray-400 ">
        {header}
      </h2>
      <AnimationOnScroll animateIn="animate-zoomIn" animateOnce={true}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((element) => (
            <div
              key={element.id}
              className={`col-span-1 p-1 flex flex-row gap-2 rounded-md border-2 dark:bg-black border-white dark:border-[#3a3402] ${
                element.important
                  ? "bg-gradient-to-r to-yellow-50 dark:to-black from-yellow-200 dark:from-black dark:border-blue-500"
                  : "bg-white dark:bg-black"
              } shadow-lg shadow-black/20`}
            >
              <div className="p-1 ">
                <Icon icon={element.url} width="30" height="30" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="p-1 text-blue-700 dark:text-blue-500 font-medium capitalize">
                  {element.name}
                </p>
                <p className="p-1 text-gray-700 dark:text-gray-500 font-medium capitalize">
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
