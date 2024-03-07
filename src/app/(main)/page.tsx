"use client";

import Button from "@/components/button";
import ArrowRightIcon from "@/icons/arrow_right";
import CartIcon from "@/icons/cart";
import ExternalLinkIcon from "@/icons/external_link";
import MoneyIcon from "@/icons/money";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("Agilistikmal");
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto px-8 pt-64 grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-screen-sm">
          <h1 className="font-bold text-3xl">BLOCKSTUFF</h1>
          <p>
            Dapatkan rank, coin, dan item lainnya di{" "}
            <span className="px-3 bg-platinum text-black">blockstuff</span>.
            Transaksi instan secara{" "}
            <span className="text-vanilla">otomatis</span>.
          </p>
          <div className="flex items-center gap-8 mt-5">
            <Link href={"/store"}>
              <Button type={1} primaryBg="bg-flame" secondaryBg="bg-flame/70">
                <div className="flex items-center gap-2 text-white">
                  <ArrowRightIcon className="w-6" />
                  <span className="text-xl">Store</span>
                </div>
              </Button>
            </Link>
            <Link href={"/discord"} target="_blank">
              <div className="flex items-center gap-2 text-sunset">
                <ExternalLinkIcon className="w-6" />
                <span className="text-xl">Discord</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-center relative">
          <Image
            src={`https://starlightskins.lunareclipse.studio/skin-render/relaxing/${username}/full`}
            width={1080}
            height={1080}
            alt=""
            className="w-96 translate-x-24"
          />
          <Image
            src={`https://starlightskins.lunareclipse.studio/skin-render/sleeping/${username}/full`}
            width={1080}
            height={1080}
            alt=""
            className="w-96 -translate-x-16"
          />
        </div>
      </div>
    </>
  );
}
