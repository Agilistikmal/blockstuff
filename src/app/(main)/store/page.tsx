"use client";

import Input from "@/components/input";
import { Server } from "@/model/server_model";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

export default function StorePage() {
  const [server, setServer] = useState<Server[]>([]);
  const [filteredServer, setFilteredServer] = useState<Server[]>(server);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const filter = server.filter((s) =>
      s.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredServer(filter);
  }

  useEffect(() => {
    async function getServer() {
      const res = await fetch("/api/server");
      const body = await res.json();
      if (body.status != 200) {
      }
      setServer(body.data);
      setFilteredServer(body.data);
    }
    getServer();
  }, []);
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
                <p>{s._count.items} stuff</p>
                <p>Click to View</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
