import ExternalLinkIcon from "@/icons/external_link";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="pt-8 pb-96">
        <div className="w-full max-w-screen-xl mx-auto px-8 border-t-4 border-t-white pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
            <div className="mx-auto md:mx-0 md:mr-auto">
              <h1 className="font-bold text-3xl">BLOCKSTUFF</h1>
              <p>
                this website is maintained by{" "}
                <Link
                  href={"https://safatanc.com"}
                  className="px-5 bg-flame text-white"
                >
                  safatanc.com
                </Link>
              </p>
            </div>
            <div className="mx-auto md:mx-0 md:ml-auto">
              <h1 className="font-bold text-3xl">Useful Link</h1>
              <div className="flex flex-col gap-2 mt-5">
                <Link
                  href={"/discord"}
                  target="_blank"
                  className="flex items-center gap-2 text-sunset"
                >
                  <ExternalLinkIcon className="w-6" />
                  <p>Discord</p>
                </Link>
                <Link
                  href={"https://safatanc.com"}
                  target="_blank"
                  className="flex items-center gap-2 text-sunset"
                >
                  <ExternalLinkIcon className="w-6" />
                  <p>safatanc.com</p>
                </Link>
                <Link
                  href={"https://github.com/agilistikmal"}
                  target="_blank"
                  className="flex items-center gap-2 text-sunset"
                >
                  <ExternalLinkIcon className="w-6" />
                  <p>GitHub</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
