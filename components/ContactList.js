import Header from "./Header";
import Modal from "./UI/Modal";
import { Icon } from "@iconify/react";

export default function ContactList({ list }) {
  return (
    <Modal background="bg-gray-50">
      <main className="w-full flex flex-col items-center gap-4 bg-gray-50">
        <h2 className="p-2 text-3xl font-medium text-center">let{`'`}s get in touch</h2>
        <div className="w-full h-72 sm:h-auto p-3 grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto overscroll-none animate-fromTopToBottom">
          {list.map((item) => (
            <a
              href={item.url}
              key={item.id}
              className=" p-2 col-span-1 flex flex-row gap-4 shadow-md shadow-black/20 rounded-md bg-white transition-all duration-300 hover:scale-105"
            >
              <Icon icon={item.image} width="30" height="30" />
              <h2 className="p-2 text-lg">{item.title}</h2>
            </a>
          ))}
        </div>
      </main>
    </Modal>
  );
}
