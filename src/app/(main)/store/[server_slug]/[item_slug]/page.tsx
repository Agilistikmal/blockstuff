"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import HumanIcon from "@/icons/human";
import MailIcon from "@/icons/mail";
import { TransactionChannel } from "@/model/transaction_model";
import { ApiResponse } from "@/model/web_model";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StoreItemDetailPage() {
  const [paymentMethod, setPaymentMethod] = useState<TransactionChannel[]>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<TransactionChannel>();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/transaction/channel");
      const response: ApiResponse = await res.json();
      setPaymentMethod(response.data);
    })();
  }, []);
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 mt-5">
        <div>
          <div>
            <h1 className="font-bold text-xl">Item Details</h1>
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-xl">Player Details</h1>
            <form method="POST">
              <Input
                id="email"
                title="Email Address"
                name="email"
                type="email"
                placeholder="Example: youremail@domain.com"
                icon={<MailIcon className="w-6 text-black" />}
              />
              <Input
                id="username"
                title="Minecraft Username"
                name="username"
                type="text"
                placeholder="Example: Agilistikmal"
                icon={<HumanIcon className="w-6 text-black" />}
              />
            </form>
          </div>

          <div className="mt-5">
            <h1 className="font-bold text-xl">Select Payment Method</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-4 mt-2">
              {paymentMethod?.map((p, i) => (
                <>
                  <Button
                    type={3}
                    primaryBg={
                      selectedPaymentMethod == p ? "bg-sunset" : "bg-platinum"
                    }
                    secondaryBg={
                      selectedPaymentMethod == p
                        ? "bg-sunset/70"
                        : "bg-platinum/70"
                    }
                    key={i}
                    className="!text-black"
                    onClick={() => setSelectedPaymentMethod(p)}
                  >
                    <p className="text-nowrap line-clamp-1 text-center text-xs">
                      {p.name}
                    </p>
                  </Button>
                </>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h1 className="font-bold text-xl">Order Details</h1>
            <div className="p-5 bg-platinum text-black/50 text-sm">
              <p>Item Price: Rp0</p>
              <p>
                Payment Fee: Rp
                {Intl.NumberFormat("id-ID").format(
                  selectedPaymentMethod?.fee_customer.flat || 0
                )}
                <span className="text-xs">
                  {" "}
                  ({selectedPaymentMethod?.name})
                </span>
              </p>
              <p className="text-flame text-lg font-bold">
                Total: Rp
                {Intl.NumberFormat("id-ID").format(
                  selectedPaymentMethod?.fee_customer.flat || 0
                )}
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <Button
              type={1}
              primaryBg="bg-flame"
              secondaryBg="bg-flame/70"
              className="w-full max-w-sm"
            >
              Checkout
            </Button>
            <Link href={"/store"} className="text-flame px-5">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
