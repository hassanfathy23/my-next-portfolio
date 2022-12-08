import { Icon } from "@iconify/react";

import Modal from "./UI/Modal";

type AppProps = {
  list: {
    id: string;
    url: string;
    image: string;
    title: string;
  }[];
};

import ContactItem from "./ContactItem";

export default function ContactList({ list }: AppProps) {
  return (
    <Modal background="bg-gray-50 dark:bg-black">
      <main className="w-full flex flex-col items-center gap-4 bg-gray-50 dark:bg-black">
        <h2 className="p-2 text-3xl dark:text-white font-medium text-center">
          let{`'`}s get in touch
        </h2>
        <div className="w-full h-72 sm:h-auto p-3 grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto overscroll-none animate-fromTopToBottom">
          {list.map((item) => (
            <ContactItem
              id={item.id}
              image={item.image}
              title={item.title}
              url={item.url}
              key={item.id}
            />
          ))}
        </div>
      </main>
    </Modal>
  );
}
