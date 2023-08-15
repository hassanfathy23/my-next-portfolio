import Image from "next/image";
import Link from "next/link";

type AppProps = {
  link: string;
  id: number;
  image: string;
  title: string;
  description: string;
  from: string;
  to: string;
};

function WorkItem({ link, id, image, title, description, from, to }: AppProps) {
  return (
    <Link href={link} key={id}>
      <div className="md:px-4 md:py-2 flex flex-col md:flex-row-reverse items-center gap-2 rounded-xl shadow-md shadow-black/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-black/5">
        <div className="px-4 md:px-0 flex justify-center items-center">
          <div className="relative sm:w-72 w-[30rem] h-48 object-cover">
          <Image
            src={image}
            alt="can't display this image"
            // width={288}
            // height={192}
            fill
            className="object-cover"
          />
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <div className="py-2 flex flex-row gap-2">
            <h3 className="text-xl dark:text-gray-400 font-medium">{title}</h3>
            <i className="text-gray-600 dark:text-gray-500 font-medium">
              from {from} to {to}
            </i>
          </div>
          <p className="text-gray-600 dark:text-gray-500 lowercase">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default WorkItem;
