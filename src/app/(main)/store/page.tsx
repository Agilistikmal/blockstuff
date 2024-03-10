"use client";

import Input from "@/components/input";
import { Server } from "@/model/server_model";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function StorePage() {
  const [server, setServer] = useState<Server[]>([
    {
      id: "ln",
      slug: "luckynet",
      name: "LuckyNetwork",
      ip: "play.luckynetwork.net",
      website: "luckynetwork.net",
      logo: "https://www.luckynetwork.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLN_LOGO_HEADER.23126edc.webp&w=256&q=75",
    },
    {
      id: "cn",
      slug: "crazynet",
      name: "CrazyNetwork",
      ip: "mc.crazynetwork.id",
      logo: "https://minecraft-mp.com/images/favicon/327574.png?ts=1709959930",
      discord: "https://discord.gg/cn",
    },
  ]);
  const [filteredServer, setFilteredServer] = useState<Server[]>(server);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const filter = server.filter((s) =>
      s.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredServer(filter);
  }
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto px-8 mt-5">
        <div>
          <h1 className="font-bold">Find Server</h1>
          <Input type="text" placeholder="Search..." onChange={handleSearch} />
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
          {filteredServer.length == 0 && <p>Server tidak ditemukan.</p>}
          {filteredServer.map((s, i) => (
            <Link
              href={`/store/${s.slug}`}
              key={i}
              className="group bg-white text-black w-full max-w-sm mx-auto"
            >
              <div className="p-5">
                <div className="relative h-24 w-full mx-auto">
                  <Image
                    src={s.logo}
                    fill={true}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h1 className="font-bold text-2xl">{s.name}</h1>
                  <p className="text-xs text-black/70">{s.ip}</p>
                </div>
              </div>
              <div className="px-5 py-1 bg-flame text-platinum flex justify-between">
                <p>6 stuff</p>
                <p>Click to View</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
