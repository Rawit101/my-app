import Link from "next/link";
const menus = [
    { name: "Home", path: "#" },
    { name: "About us", path: "#" },
    { name: "Page1", path: "/page1" },
    { name: "Page2", path: "/page2" },
    { name: "Page3", path: "/page3" },
]
export default function Navbar() {
    return (
        <div className="w-full sticky top-0 bg-gray-800 text-white p-4 flex justify-between">
            <div>
                Logo
            </div>
            <div>
                <ul className="flex space-x-4">
                    {menus.map((menu, index) => (
                        <li key={index}>
                            <Link href={menu.path}>{menu.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}