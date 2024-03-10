import Navbar from "@/components/navbar";
import { silkscreen } from "../utils/font";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${silkscreen} bg-black text-platinum`}>
      <section className="min-h-dvh">
        <Navbar />
        <main>{children}</main>
      </section>
      <Footer />
    </body>
  );
}
