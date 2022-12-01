import * as React from "react";

import { closeModal } from "../../store/uiSlice";
import { useAppDispatch } from '../../store/hooks';

type AppProps = {
  children: JSX.Element;
  background: String;
}

export default function BasicModal({children, background}: AppProps) {
    const dispatch = useAppDispatch()
  return (
    <>
    <div onClick={() => dispatch(closeModal())} className={`w-full h-screen fixed top-0 bg-black/50 z-30`}/>
    <main className={`w-full md:w-8/12 lg:w-5/12 h-96 p-4 fixed inset-x-2/4 inset-y-2/4 -translate-x-2/4 -translate-y-2/4 animate-fadeIn z-40 overflow-hidden rounded-md ${background} shadow-md shadow-black/20`}>
        {children}
    </main>
    </>
  );
}
