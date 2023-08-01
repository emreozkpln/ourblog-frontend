import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from "react-icons/ai"
import js from "../iamge/javascript-zhestkie-chasti.jpg";
import { sınırlandırılmışMetniAl } from "@/components/utils/sınırlandırılmışMetniAl";

function Blogs() {
    const metin = "How to center a divHow to center a divHow to center a divHow to center a divHow to center a divHow to center a divHow to center a divHow to center a div";
    const sınırlandırılmışMetin = sınırlandırılmışMetniAl(metin, 80);
    return (
        <div className="flex flex-col col-span-1 shadow-xl rounded-xl">
            <div>
                <Image src={js} alt="Javascript" className="w-full h-[200px] rounded-t-xl" />
            </div>
            <div className="p-5 grid gap-2">
                <div className="flex items-center">
                    <div className="font-semibold">Maintenance -</div>
                    <div className="text-sm ml-1">October 30, 2023</div>
                </div>
                <h4 className="text-sm font">{sınırlandırılmışMetin}</h4>
                <div className="flex justify-between">
                    <div></div>
                    <button className="flex p-2 gap-2 font-semibold bg-blue-400 text-white w-40 items-center rounded-3xl shadow-lg justify-center">
                        Read More <AiOutlineArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Blogs