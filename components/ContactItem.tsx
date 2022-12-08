import { Icon } from "@iconify/react";

type AppProps = {
  url: string;
  id: string;
  image: string;
  title: string;
};

function ContactItem({ url, id, image, title }: AppProps) {
  return (
    <a
      href={url}
      key={id}
      className=" p-2 col-span-1 flex flex-row gap-4 shadow-md shadow-black/20 rounded-md bg-white dark:bg-black border-2 border-gray-50 dark:border-[#3a3402] transition-all duration-300 hover:scale-105"
    >
      <Icon icon={image} width="30" height="30" />
      <h2 className="p-2 text-lg dark:text-white">{title}</h2>
    </a>
  );
}

export default ContactItem;
