import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { TbPassword } from "react-icons/tb";
import { RxReset } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function page() {
  return (
    <div className="w-full bg-[url('https://i.pinimg.com/474x/d9/af/45/d9af45d7a046edab3c23f81a9d0b3322.jpg')] flex justify-between items-stretch h-screen">
      <div className="flex flex-col justify-between gap-5 p-10">
        <div className="flex flex-col gap-2 mx-auto">
          <h1 className="text-4xl text-left font-bold">Speak your</h1>
          <p className="text-lg pb-1 font-normal">Login ID & Password.</p>
        </div>
        <picture>
          <img src="/icons8-audio-wave.gif" alt="" width="250px" height={200} />
        </picture>
        <div className="flex flex-col justify-center gap-6 mx-auto">
          <span className="flex flex-row font-extrabold border-b-[1px] border-slate-200 justify-between items-center pb-2 space-x-10 text-xl">
            <p className="">ibsharon19@gmail.com</p>
            <span>
              <HiCheckCircle size={20} style={{ color: "green" }} />
            </span>
          </span>

          <span className="flex flex-row border-b-[1px] font-extrabold border-slate-200 justify-between items-center pb-2 space-x-10 text-xl">
            <p className="pr-5">..................</p>
            <span>
              <HiCheckCircle size={20} style={{ color: "green" }} />
            </span>
          </span>
        </div>
      </div>

      <aside className="border p-5 rounded-full outline-offset-4 w-fit m-auto outline-double outline-[10px] shadow-xl shadow-sky-400 outline-slate-50">
        <FaMicrophoneAlt size={30} style={{ color: "black" }} />
      </aside>

      <div className="flex flex-col justify-between gap-5 p-10 bg-transparent basis-[40%]">
        <div className="flex flex-col gap-2">
          <span className="flex flex-row justify-between items-center">
            <h1 className="text-4xl text-left font-extrabold text-white">
              Login
            </h1>
          </span>
          <p className="text-lg pb-1 font-normal text-white">
            Hello! Let's get started
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <span className="flex flex-row border-b-[1px] border-slate-200 justify-between items-center   text-xl">
              <input
                placeholder="Email ID"
                className=" text-base bg-transparent placeholder:text-slate-200 text-white"
              />
              <span>
                <GoMail size={30} style={{ color: "white" }} />
              </span>
            </span>
            <span className="flex flex-row border-b-[1px] border-slate-200 justify-between items-center   text-xl">
              <input
                placeholder="Password"
                className="border-b-[1px] border-slate-200 pb-2 space-x-10 text-base bg-transparent placeholder:text-slate-200 text-white"
              />
              <span>
                <TbPassword size={30} style={{ color: "white" }} />
              </span>
            </span>
          </div>

          <p className="text-slate-300 flex  gap-3 pb-2  text-xl">
            Forgot password?
            <Link href="/forgot-password" className="text-white font-bold">
              Reset
            </Link>
            <span className="border rounded-xl bg-white w-[100px] hover:bg-transparent">
              <Link href="/forgot-password">
                <RxReset
                  className="mx-auto"
                  size={30}
                  style={{ color: "black" }}
                />
              </Link>
            </span>
          </p>

          <span className="flex flex-row  font-extrabold border bg-slate-300 text-black ">
            <FaFacebook size={20} style={{ color: "blue" }} />
            <p className="pr-10 mx-auto"> Continue with facebook </p>
          </span>
          <span className="flex flex-row  font-extrabold border bg-slate-300 text-black ">
            <FcGoogle size={20} />
            <p className="pr-10 mx-auto"> Continue with google </p>
          </span>
          <span>
            <p>
              <Link
                href="/sign-up"
                className="text-black text-xl font-semibold"
              >
                Don't have an account? Sign up
              </Link>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
