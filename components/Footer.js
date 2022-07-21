import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/innocre_logo_full.png";

function Footer() {
  return (
    <div className="relative mt-16 bg-gradient-to-t from-black to-gray-900 ">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <div className="flex items-center gap-2 text-white">
              <Image
                src={logo}
                width={60}
                height={60}
                className="cursor-pointer"
              />
              <p className="text-xl">Innocre</p>
            </div>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-white">Innovative Creation 2022</p>
            </div>
          </div>
          <div className=" grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 text-white hidden">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    World
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Cherry
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Web
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Apples
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Media
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Infopreneur
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2022. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
