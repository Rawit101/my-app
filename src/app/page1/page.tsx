import Image from "next/image";
import Link from "next/link"
import '../globals.css'

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl" >Page 1</h1>
            <p>This is page 1</p>

            <Image src="/01.jpg" width={300} height={300} alt="player" />
            <br />
            <p>66162110284-3</p><br />
            <Link href="\page1" className="button">Go to Page 1</Link><br />
            <Link href="\page2" className="button">Go to Page 2</Link><br />
            <Link href="\page3" className="button">Go to Page 3</Link><br />
        </div>
    );
}