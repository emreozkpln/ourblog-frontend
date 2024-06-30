import { IoIosArrowForward } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import LogoutButton from "./LogoutButton";

export default function Navbar(){
    return (
        <div className="h-screen w-fit bg-[#353a40] text-[#c9ced6] px-2 text-2xl flex flex-col py-3">
            <div className="flex items-center my-2">
                <FaHome size={16} className="mr-2"/>
                Homepage
            </div>
            <div className="group my-2">
                <div className="cursor-pointer flex items-center justify-between">
                    <div className="flex items-center"><FaBookmark size={16} className="mr-2"/>Posts</div> 
                    <IoIosArrowForward color="text-[#c9ced6]" className="ml-1 group-hover:rotate-90 rotate-180 transition-transform duration-300" size={8}/>
                </div>
                <div className="bg-[#353a40] overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-40 pl-10">
                    <div className="my-1">Create</div>
                    <div className="my-1">Create</div>
                    <div className="my-1">Create</div>
                    <div className="my-1">Create</div>
                </div>
            </div>
            <div className="group my-2">
                <div className="cursor-pointer flex items-center justify-between">
                    <div className="flex items-center"><BiSolidCategory size={16} className="mr-2"/>Categories</div> 
                    <IoIosArrowForward color="text-[#c9ced6]" className="ml-1 group-hover:rotate-90 rotate-180 transition-transform duration-300" size={8}/>
                </div>
                <div className="bg-[#353a40] overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-40 pl-10">
                    <div className="my-1">Create</div>
                    <div className="my-1">Create</div>
                    <div className="my-1">Create</div>
                    <div className="my-1">Create</div>
                </div>
            </div>
            <LogoutButton />
        </div>
    )
}