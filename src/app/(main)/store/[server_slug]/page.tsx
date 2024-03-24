"use client";

import Button from "@/components/button";
import { Item, ItemFeatureRequest } from "@/model/item_model";
import { Server } from "@/model/server_model";
import Link from "next/link";
import { useEffect, useState } from "react";

type Params = {
  server_slug: string;
};

export default function StoreDetailPage({ params }: { params: Params }) {
  const [server, setServer] = useState<Server>();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function getItems() {
      const res = await fetch(`/api/server/${params.server_slug}/item`);
      const body = await res.json();

      if (body.status != 200) {
      }
      setServer(body.data);
      setItems(body.data.items);
    }
    getItems();
  });
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto px-8">
        <div className="text-center">
          <h1 className="font-bold text-2xl">{server?.name}</h1>
          <p>{server?.ip}</p>
          <div className="flex gap-4 justify-center">
            {server?.discord && (
              <Link
                href={server.discord}
                target="_blank"
                className="text-flame border-b-2 border-flame"
              >
                Join Discord
              </Link>
            )}
            {server?.website && (
              <Link
                href={server.website}
                target="_blank"
                className="text-flame border-b-2 border-flame"
              >
                Visit Website
              </Link>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {items.map((i) => (
            <>
              <div key={i.id} className="bg-flame p-5">
                <div className="flex justify-between">
                  <div>
                    <h1 className="font-bold">{i.title}</h1>
                    <p>{i.description}</p>
                  </div>
                  <div className="px-2 bg-vanilla/50 text-black h-max">
                    <h1 className="text-xs">{i.type}</h1>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-2 text-xs mt-5 p-2 bg-vanilla text-black">
                  {i.features.map((f) => (
                    <>
                      <p key={f.id} className="border-l-4 border-flame pl-1">
                        {f.name}
                      </p>
                    </>
                  ))}
                </div>

                <Link
                  href={`/store/${params.server_slug}/${i.slug}`}
                  className="mt-5 block"
                >
                  <Button
                    type={1}
                    primaryBg="bg-sunset"
                    secondaryBg="bg-sunset/70"
                    className="text-black w-full"
                  >
                    Rp{Intl.NumberFormat("id-ID").format(i.price)}
                  </Button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
