/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { FC, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";

interface ToastProps {}

const Message = () => {
  return (
    <div className="relative border-green-900 backdrop-blur-sm border-2/1 shadow shadow-slate-700 bg-green-400/20 p-4 rounded-xl text-slate-900">
      <button
        className="absolute top-1 right-1 bg-transparent p-2"
        onClick={() => toast.dismiss()}
      >
        <TfiClose className="text-slate-900 dark:text-slate-100" />
      </button>
      <div className="pe-2 w-44 mb-2 dark:text-slate-100">
        👋 Hi! Hope you're enjoying. Could you give me a Github start?
      </div>
      <div>
        <Link
          className="flex gap-2 text-wrap items-center px-2 py-0.5 w-fit bg-white border-slate-800 border rounded hover:bg-success hover:text-white hover:border-green-700"
          target="_blank"
          href={"https://github.com/borjamrd"}
          onClick={() => toast.dismiss()}
        >
          Sure!
          <BsBoxArrowInUpRight />
        </Link>
      </div>
    </div>
  );
};

const Toast: FC<ToastProps> = ({}) => {
  const toastOptions = {
    duration: 30000,
  };

  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      toast.custom(<Message />);
    }, 10000);
    return () => clearTimeout(toastTimeout);
  }, []);

  return <Toaster position="bottom-right" toastOptions={toastOptions} />;
};

export default Toast;
