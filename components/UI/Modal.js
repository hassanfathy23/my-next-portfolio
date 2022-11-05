import * as React from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../../store/uiSlice";

export default function BasicModal({children}) {
    const dispatch = useDispatch()
  return (
    <>
    <div onClick={() => dispatch(openModal())} className="w-full h-screen fixed top-0 bg-black/40 z-30" />
    <main className="w-5/12 h-96 p-4 fixed inset-x-2/4 inset-y-2/4 -translate-x-2/4 -translate-y-2/4 z-40 overflow-hidden rounded-md bg-white border-2 border-black shadow-md shadow-black/20">
        {children}
    </main>
    </>
  );
}
