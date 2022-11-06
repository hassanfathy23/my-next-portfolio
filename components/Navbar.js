import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { openModal } from "../store/uiSlice";
import ContactList from "../components/ContactList";
import { contactList } from "../pages/index";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { asPath } = router;
  const modalIsOpen = useSelector((state) => state.ui.modalIsOpen);

  return (
    <>
      <nav className="py-3 px-6 flex flex-row justify-between items-center">
        <Link href="/" className="cursor-pointer text-4xl font-medium italic">
          Logo
        </Link>
        <div className="flex flex-row justify-between gap-3">
          <Link href="/">
            <h3
              className={`px-2 py-1 cursor-pointer text-gray-500 font-medium transition-all duration-150 ${
                asPath === "/" && "text-gray-700"
              } hover:text-gray-700`}
            >
              home
            </h3>
          </Link>
          <Link href="/aboutme">
            <h3
              className={`px-2 py-1 cursor-pointer text-gray-500 font-medium transition-all duration-150 ${
                asPath === "/aboutme" && "text-gray-700"
              } hover:text-gray-700`}
            >
              about me
            </h3>
          </Link>
          <h3
            onClick={() => dispatch(openModal())}
            className={`px-2 py-1 cursor-pointer text-gray-500 font-medium animate-frequency ${
              modalIsOpen && "animate-none text-gray-700"
            } hover:animate-none transition-all duration-150 hover:text-gray-700`}
          >
            contact me
          </h3>
        </div>
        <div></div>
      </nav>
      {modalIsOpen && <ContactList list={contactList} />}
    </>
  );
}
