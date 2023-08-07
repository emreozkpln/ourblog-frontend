"use client"
import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from "react-icons/ai"
import js from "../iamge/javascript-zhestkie-chasti.jpg";

function BlogCards({ categoryName, postsDetails, blogCounter }) {
    // console.log(postsDetails);
    return (
        <div>
            <div className='grid gap-20'>
                <div className="flex gap-4 items-center">
                    <div className="w-1.5 h-28 bg-color2 rounded-lg"></div>
                    <h2 className="text-3xl font-extrabold text-color2">
                        {categoryName} <span className="bg-color3 p-1 text-white rounded-xl shadow-xl">{blogCounter}</span>
                    </h2>
                </div>
                {postsDetails && postsDetails.map((item, index) => (
                    <div className="flex flex-col col-span-1 shadow-xl rounded-xl">
                        <div>
                            <Image src={js} alt="Javascript" className="w-full h-[200px] rounded-t-xl" />
                        </div>
                        <div className="p-5 grid gap-2">
                            <div className="font-semibold">{item.TR_title}</div>
                            <div className="text-sm ml-1 flex justify-end">{item.createdAt}</div>
                            <h4 className="text-sm font">{item.TR_MetaDescription}</h4>
                            <div className="flex justify-between">
                                <div></div>
                                <button className="flex p-2 gap-2 font-semibold bg-color2 text-white w-40 items-center rounded-3xl shadow-lg shadow-gray-400 justify-center">
                                    Read More <AiOutlineArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogCards