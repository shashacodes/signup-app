import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { TbPassword } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";

export default function page() {
  return (
    <div className="w-full flex  bg-[url('https://i.pinimg.com/474x/a5/71/b2/a571b262015428f19fcc47fcc3b81d8c.jpg')] bg-no-repeat bg-cover justify-between items-stretch h-screen text-white bg-white">
      <div className="flex flex-col justify-between gap-5 p-8">
        <div className="flex flex-col gap-2 mx-auto">
          <h1 className="md:text-4xl text:xl text-left font-extrabold">
            Speak your
          </h1>
          <p className="text-lg pb-1 font-normal">Login ID & Password.</p>
        </div>

        <picture>
          <img src="/audio.gif" alt="" width="250px" height={200} />
        </picture>

        <div className="flex flex-col gap-5 text-white">
          <span className="flex flex-row border-b-[1px] font-extrabold border-slate-200 justify-between items-center pb-2 space-x-10 text-xl">
            <p className="">ibsharon19@gmail.com</p>
            <span>
              <HiCheckCircle size={20} style={{ color: "green" }} />
            </span>
          </span>

          <span className="flex flex-row border-b-[1px] font-extrabold border-slate-200 justify-between items-center pb-2 space-x-10 text-xl text-white">
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

      <div className="flex flex-col justify-between gap-5 p-10 bg-amber-700 basis-[40%]">
        <div className="flex  flex-col gap-2">
          <h1 className="text-4xl mx-auto font-extrabold text-white">
            Sign up
          </h1>
          <p className="text-lg mx-auto pb-1 font-normal text-white">
            Get started with us
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <span className="flex flex-row border-b-[1px] space-x-10 text-xl justify-between items-center border-slate-200">
              <input
                placeholder="FullName"
                className=" pb-2 text-base bg-transparent placeholder:text-slate-200 text-white"
              />
              <p>
                <BsFillPersonPlusFill size={30} style={{ color: "black" }} />
              </p>
            </span>
            <span className="flex flex-row border-b-[1px] space-x-10 text-xl justify-between items-center border-slate-200">
              <input
                placeholder="Email ID"
                className=" text-base bg-transparent placeholder:text-slate-200 text-white"
              />
              <p>
                <GoMail size={30} style={{ color: "black" }} />
              </p>
            </span>
            <span className="flex flex-row border-b-[1px] space-x-10 text-xl justify-between items-center border-slate-200">
              <input
                placeholder="Password (6 or more chars)"
                className=" pb-2 text-base bg-transparent placeholder:text-slate-200 text-white"
              />
              <p>
                <TbPassword size={30} style={{ color: "black" }} />
              </p>
            </span>
          </div>
          <p className="pr-3">
            By clicking signup, you agree the User Agreement, Privacy Policy,
            and Cookie Policy.
          </p>
          <button className="mx-auto font-extrabold rounded-xl text-center text-black text-xl border h-[50px] w-[100px] bg-white hover:bg-transparent">
            SIGN UP
          </button>
          <p className="mx-auto">------------------ or ---------------------</p>
          <span className="flex flex-row rounded-xl font-extrabold border bg-slate-300 text-black ">
            <FaFacebook size={20} style={{ color: "blue" }} />
            <p className="pr-10 mx-auto"> Continue with facebook </p>
          </span>
          <span className="flex flex-row rounded-xl font-extrabold border bg-slate-300 text-black ">
            <FcGoogle size={20} style={{ color: "" }} />
            <p className="pr-10 mx-auto"> Continue with google </p>
          </span>
          <span>
            <p className="text-black text-xl">
              Already have an account?
              <Link href="/Login" className="text-red-600 font-extrabold">
                <span className="border rounded-xl bg-white p-2 hover:bg-transparent">
                  Login
                </span>
              </Link>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
