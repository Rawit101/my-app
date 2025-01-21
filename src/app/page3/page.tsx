import Image from "next/image";
import Link from "next/link"
import '../globals.css'

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl">Page 3</h1>
            <p>This is page 3</p>

            <Image src="/03.jpg" width={300} height={300} alt="player" />
            <br />
            <p>66162110284-3</p><br />
            <Link href="\page1">Go to Page 1</Link><br />
            <Link href="\page2">Go to Page 2</Link><br />
            <Link href="\page3">Go to Page 3</Link><br />
        </div>
    );
}