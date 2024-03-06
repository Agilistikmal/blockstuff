import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center text-center min-h-dvh w-full">
        <div className="p-[64px] border-4 border-black">
          <h1 className="font-black text-[64px]">BLOCKSTUFF</h1>
          <h2 className="font-medium text-[32px]">Something big is coming!</h2>
          <h3 className="font-light">this project maintained by <Link href={"https://www.safatanc.com"} target="_blank" className="bg-black px-3 text-white font-semibold">safatanc.com</Link></h3>
        </div>
      </div>
    </>
  );
}
