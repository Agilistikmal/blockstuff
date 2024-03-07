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
      <Navbar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </body>
  );
}
