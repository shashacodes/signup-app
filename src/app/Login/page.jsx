import Image from "next/image";
import Link from "next/link";
import React from "react";
import pic from "../Images/favicon.ico";
import { FaMicrophoneAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { TbPassword } from "react-icons/tb";
import { RxReset } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function page() {
  return (
    <div className="w-full flex  bg-[url('https://i.pinimg.com/474x/e0/eb/c8/e0ebc8e4d0665d56879ebed6d5c63329.jpg')] bg-no-repeat bg-cover  justify-between items-stretch h-screen bg-white">
      <div className="flex flex-col justify-between gap-5 p-8">
        <div className="flex flex-col gap-2 mx-auto">
          <h1 className="text-4xl text-left font-extrabold">Speak your</h1>
          <p className="text-lg pb-1 font-normal">Login ID & Password.</p>
        </div>

        <div>
          <img src="/audio.gif" alt="" width="250px" height={200} />
        </div>

        <div className="flex flex-col gap-5">
          <span className="flex flex-row border-b-[1px] border-slate-200 justify-between items-center pb-2 space-x-10 text-xl font-extrabold">
            <p className="">ibsharon19@gmail.com</p>
            <span>
              <HiCheckCircle size={20} style={{ color: "green" }} />
            </span>
          </span>

          <span className="flex flex-row border-b-[1px] border-slate-200 justify-between items-center pb-2 space-x-10 text-xl font-extrabold">
            <p className="pr-5">..................</p>
            <span>
              <HiCheckCircle size={20} style={{ color: "green" }} />
            </span>
          </span>
        </div>
      </div>

      <aside className="border pr-5 items-center p-5 rounded-full outline-offset-4 w-fit m-auto outline-double outline-[10px] shadow-xl shadow-sky-400 outline-slate-50">
        <FaMicrophoneAlt size={30} style={{ color: "black" }} />
      </aside>

      <div className="basis-[40%] flex justify-between text-xl gap-5 items-stretch h-screen">
        <div className="flex w-full flex-col justify-between border rounded-tr-xl bg-transparent border-amber-800 gap-5 p-10  bg-amber-700">
          <div className="flex flex-col gap-2">
            <span className="flex flex-row justify-between mx-auto gap-3 items-center">
              <h1 className="text-4xl text-left font-extrabold text-white">
                Login
              </h1>{" "}
              <Image
                className="mx-auto my-5"
                src={pic}
                alt="a favicon"
                width={50}
                height={80}
              />
            </span>
            <p className="text-lg pb-1 mx-auto font-normal  text-white">
              Hello! Let's get started
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <span className="flex flex-row border-b-[1px] border-slate-200 justify-between items-center   text-xl">
                <input
                  placeholder="Email ID"
                  className=" text-base bg-transparent placeholder:text-slate-200 text-white"
                />{" "}
                <span>
                  <GoMail size={30} style={{ color: "black" }} />
                </span>{" "}
              </span>
              <span className="flex flex-row border-b-[1px] border-slate-200 justify-between items-center   text-xl">
                <input
                  placeholder="Password"
                  className="border-b-[1px] border-slate-200 pb-2 space-x-10 text-base bg-transparent placeholder:text-slate-200 text-white"
                />
                <span>
                  <TbPassword size={30} style={{ color: "black" }} />
                </span>{" "}
              </span>
            </div>

            <p className="text-slate-300 flex  gap-3 pb-2  text-xl">
              Forgot password?
              <Link href="/forgot-password" className="text-white">
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

            <span className="flex flex-row  font-extrabold border rounded-xl bg-slate-300 text-black ">
              <FaFacebook size={30} style={{ color: "blue" }} />
              <p className="pr-10 mx-auto"> Continue with facebook </p>
            </span>
            <span className="flex flex-row  font-extrabold border rounded-xl bg-slate-300 text-black ">
              <FcGoogle size={30} style={{ color: "" }} />
              <p className="pr-10 mx-auto"> Continue with google </p>
            </span>
            <span>
              <p>
                {" "}
                <Link
                  href="/sign-up"
                  className="text-black font-extrabold text-xl"
                >
                  {" "}
                  Don't have an account? Sign up{" "}
                </Link>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
