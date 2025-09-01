import { useState } from "react"
import { createPortal } from 'react-dom'


export default function Nav() {
    const [open , setOpen] = useState(false)
    function handleClick() {
        setOpen((prev)=>!prev)
    }
    return (
        <div className="h-20 w-full fixed z-50 shadow-xl flex flex-col">
            <nav className=" flex w-full h-20 sticky justify-between items-center gap-3 p-3 bg-gray-400 ">
                <h1 className=" text-2xl md:text-3xl hover:-translate-y-1 text-gray-900 hover:text-gray-950 duration-200  font-extrabold">your logo</h1>
                <ul className=" hidden md:flex gap-2 font-bold ">
                    <li className=" md:text-xl hover:-translate-y-1 hover:bg-black hover:text-white duration-200 p-1.5 rounded-2xl">Home</li>
                    <li className=" md:text-xl hover:-translate-y-1 hover:bg-black hover:text-white duration-200 p-1.5 rounded-2xl">About</li>
                    <li className=" md:text-xl hover:-translate-y-1 hover:bg-black hover:text-white duration-200 p-1.5 rounded-2xl">Contact</li>
                    <li className=" md:text-xl hover:-translate-y-1 hover:bg-black hover:text-white duration-200 p-1.5 rounded-2xl">Product</li>
                </ul>
                <div className="hidden md:flex justify-center items-center gap-4 bg-white/60 rounded-2xl border-2 shadow-2xl">
                    <button className=" font-bold p-3 rounded-2xl hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-1.5 hover:translate-x-0.5 duration-150">Sign Up</button>
                    <button className=" font-bold p-3 pl-2 pr-2 rounded-2xl hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-1.5 hover:translate-x-0.5 duration-150 ">Login</button>
                </div>
                {open ? null : <button className=" hover:scale-125 duration-150 md:hidden" onClick={handleClick}><svg className=" hover:cursor-pointer font-extrabold" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>}
            </nav>
            {
                open? createPortal(
                    <nav className=" z-50 top-0 right-0 flex flex-col min-h-screen fixed justify-between items-center gap-3 p-3 bg-white/70 md:hidden">
                {open ? <button onClick={handleClick}><svg className=" hover:scale-125 duration-125 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button> : null}
                <ul className=" w-full flex-1 flex flex-col items-start gap-2 font-bold ">
                    <li className=" h-full w-full pl-3 hover:-translate-y-1 hover:bg-black hover:text-white duration-200 p-1.5 rounded-2xl "><button>Home</button></li>
                    <li className=" h-full w-full pl-3 hover:-translate-y-1 hover:bg-black hover:text-white duration-200 p-1.5 rounded-2xl "><button>About</button></li>
                    <li className=" h-full w-full pl-3 hover:-translate-y-1 hover:bg-black hover:text-white duration-200 p-1.5 rounded-2xl "><button>Contact</button></li>
                    <li className=" h-full w-full pl-3 hover:-translate-y-1 hover:bg-black hover:text-white duration-200 p-1.5 rounded-2xl "><button>Product</button></li>
                </ul>
                <div className=" md:flex justify-center items-center gap-4 bg-white/60 rounded-2xl border-2 shadow-2xl">
                    <button className=" font-bold p-3 rounded-2xl hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-1.5 hover:translate-x-0.5 duration-150">Sign Up</button>
                    <button className=" font-bold p-3 pl-2 pr-2 rounded-2xl hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-1.5 hover:translate-x-0.5 duration-150 ">Login</button>
                </div>
            </nav>,document.body
                )
                    
                :
                    null

            }
            
        </div>
    )
}