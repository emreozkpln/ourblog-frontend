import React from 'react'
import Header from '@/components/header'
import { getCategoryBlogEn } from '@/services/service'
import Image from 'next/image'
import js from "@/components/iamge/javascript-zhestkie-chasti.jpg";
import formatDate from '@/components/utils/formatDate';
import Link from 'next/link';
import { AiOutlineArrowRight } from "react-icons/ai"

async function CategoryPostEn({ params }) {

    const posts = await getCategoryBlogEn(params.categories)
    return (
        <div>
            <Header />
            <div className='p-20 grid gap-20'>
                <div className="flex gap-4 items-center">
                    <div className="w-1.5 h-28 bg-color2 rounded-lg"></div>
                    <h2 className="text-3xl font-extrabold text-color2">
                        {params.categories.toString().toUpperCase()} <span className="bg-color3 p-1 text-white rounded-xl shadow-xl">10</span>
                    </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        posts.posts.map((item, index) => (
                            <div key={index}>
                                <div className="flex flex-col col-span-1 shadow-xl rounded-xl">
                                    <div>
                                        <Image src={js} alt="Javascript" className="w-full h-[200px] rounded-t-xl" />
                                    </div>
                                    <div className="p-5 grid gap-2">
                                        <div className="font-semibold">{item.EN_title}</div>
                                        <div className="text-sm ml-1 flex justify-end">{formatDate(item.createdAt)}</div>
                                        <h4 className="text-sm font">{item.EN_MetaDescription}</h4>
                                        <div className="flex justify-between">
                                            <div></div>
                                            <Link href={`/tr/blog/${item.EN_Slug}`} className="flex p-2 gap-2 font-semibold bg-color2 text-white w-40 items-center rounded-3xl shadow-lg shadow-gray-400 justify-center">
                                                Read More <AiOutlineArrowRight size={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryPostEn