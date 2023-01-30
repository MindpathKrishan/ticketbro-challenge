import { AppBar, BannerCta, Footer } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <AppBar />
      <div className="flex justify-center items-center h-60">
        <Link href={"/blog/1"} className="flex justify-center items-center">
          <button className="rounded-md text-sm p-3 text-white bg-primary-500 m-3 h-fit w-fit">
            Go to Posts
          </button>
        </Link>
      </div>
      <BannerCta />
      <Footer />
    </>
  );
}
