import Divide from "@/components/divide";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Link from "next/link";

export default function Project() {

    return (
        <div className="container mx-auto h-[70vh] flex justify-center items-center">
            <div className="grid grid-cols-1">
                <h1 className="text-center text-6xl noto-serif">待上線</h1>
                <Divide />
                <div className="text-center">不妨看看<Link href="/" className="underline decoration-solid px-[1px]">我們的議題</Link>。</div>
            </div>
        </div>
    )
}
