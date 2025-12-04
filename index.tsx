"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { menuItem } from "./menu";
type Props = {
    children: ReactNode
}
const MainTemplate = (props: Props) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const currentAddress = usePathname();
        return (
        <div>
            {/* sidebar + header */}
            <div className ={`min-h-dvh w-1/2 md:w-1/3 lg:w-1/4 bg-amber-600 fixed top-0 right-full transition-transform transform easy-in-out  ` + (isShow ? 'translate-x-full ' : '')}>
                {/*togle sidebar */}
                <div className="w-full p-4 flex justify-between items-start">
                    <h1 className="font-bold text-lg">UKL</h1>
                    <button type="button" onClick={() =>setIsShow(false)} className="font-bold">
                        &times;
                    </button>
                </div>
                {/*display menu item*/}
                <div className="w-full p-3 flex flex-col gap-2">
                    {
                    menuItem.map((menu, index) =>(<Link href={menu.destination} key={`menu-${index}`} className="w-full">
                    <button type="button" className={`w-full rounded text-start py-2 px-3 font-semibold ${currentAddress === menu.destination ? `bg-amber-400 text-white` : `text-black hover:bg-amber-300`}`}>
                        {menu.label}
                    </button>
                    </Link>)) 
                    }
                </div>
            </div>

            {/*HEADER section*/}
            <div className="w-full bg-amber-400 p-3">
                <button type="button" onClick={() => setIsShow(true)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                    </button>
                    </div>
             {/* main content */}
                {props.children}
             {/* footer */}
            </div>
    )
}
export default MainTemplate