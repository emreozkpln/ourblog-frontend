import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from "react-icons/ai"
import js from "../iamge/javascript-zhestkie-chasti.jpg";
import { sınırlandırılmışMetniAl } from "@/components/utils/sınırlandırılmışMetniAl";

function Blogs({ posts }) {

    return (
        <div className="flex flex-col col-span-1 shadow-xl rounded-xl">
            <div>
                <Image src={js} alt="Javascript" className="w-full h-[200px] rounded-t-xl" />
            </div>

            {
                posts && posts.posts.TestTitleEn.map(item => (
                    <div className="p-5 grid gap-2">
                        <div className="font-semibold">{item.TR_title}</div>
                        <div className="text-sm ml-1 flex justify-end">October 30, 2023</div>
                        <h4 className="text-sm font">{item.TR_MetaDescription}</h4>
                        <div className="flex justify-between">
                            <div></div>
                            <button className="flex p-2 gap-2 font-semibold bg-color2 text-white w-40 items-center rounded-3xl shadow-lg shadow-gray-400 justify-center">
                                Read More <AiOutlineArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default Blogs