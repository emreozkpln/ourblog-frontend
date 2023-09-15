"use client"
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import { BiSolidPencil } from "react-icons/bi"
import Link from 'next/link';
import formatDate from '../utils/formatDate';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { redirect } from 'next/navigation';

function BlogCards({ categoryName, postsDetails, blogCounter, lang, slug }) {
    switch (postsDetails) {
        case "notfound":
            redirect("/not-found")
            break;
        case "badrequest":
            redirect("/bad-request")
            break;
        case "err":
            redirect("/internal-error")
        default:
            break;
    }
    if (blogCounter == "err" || categoryName == "err") {
        redirect("/internal-error")
    }
    let titleTr, titleEn
    postsDetails.map(item => {
        item.categories.map(element => {
            titleTr = element.TR_slug
            titleEn = element.EN_slug
        })
    })

    if (lang == "en") {
        return (
            <div>
                <div className='grid gap-20'>
                    <div className='flex justify-between items-center'>
                        <div className="flex space-x-4 items-center">
                            <div className="w-1.5 h-28 bg-color2 rounded-lg"></div>
                            <h2 className="text-xl sm:text-3xl font-extrabold text-color2">
                                {categoryName} <span className="bg-color3 p-1 text-white rounded-xl shadow-xl">{blogCounter}</span>
                            </h2>
                        </div>
                        <div className='shadow-lg bg-color1 text-white p-3 rounded-2xl'>
                            <Link href={`/en/category/${slug}/posts`}>View All</Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-5'>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            navigation={true}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            className="w-[calc(100vw-40%)]">
                            {postsDetails && postsDetails.map((item, index) => (
                                <div key={item.EN_Slug}>
                                    <SwiperSlide className="flex flex-col rounded-xl border-b border-gray-300">
                                        <div>
                                            <img src={item.coverImage} title={item.coverImageTitleEN} alt={item.coverImageAltEN} className="w-full h-[200px] rounded-t-xl" />
                                        </div>
                                        <div className="p-5 flex flex-col min-h-[248px]">
                                            <div className="font-semibold line-clamp-2">{item.EN_title}</div>
                                            <div className="text-sm ml-auto mt-2 flex flex-row items-center justify-center">{formatDate(item.createdAt)} <BiSolidPencil size={14} className='ml-1'/></div>
                                            <h4 className="text-sm mt-2 line-clamp-3">{item.EN_description}</h4>
                                            <Link href={`/${lang}/blog/${item.EN_Slug}`} className="mt-auto ml-auto flex p-2 font-semibold bg-color2 text-white w-40 items-center rounded-3xl shadow-lg shadow-gray-400 justify-center">
                                                <div>Read More</div> <AiOutlineArrowRight className='ml-2' size={20} />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className='grid gap-20'>
                    <div className='flex justify-between items-center'>
                        <div className="flex space-x-4 items-center">
                            <div className="w-1.5 h-28 bg-color2 rounded-lg"></div>
                            <h2 className="text-xl sm:text-3xl font-extrabold text-color2">
                                {categoryName} <span className="bg-color3 p-1 text-white rounded-xl shadow-xl">{blogCounter}</span>
                            </h2>
                        </div>
                        <div className='shadow-lg bg-color1 text-white p-3 rounded-2xl'>
                            <Link href={`/tr/category/${slug}/posts`}>Hepsini Gör</Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-5'>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            navigation={true}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            className="w-[calc(100vw-40%)]">
                            {postsDetails && postsDetails.map((item, index) => (
                                <div key={item.TR_Slug} >
                                    <SwiperSlide className="flex flex-col col-span-1 border-b border-gray-300 rounded-xl">
                                        <div>
                                            <img src={item.coverImage} title={item.coverImageTitleTR} alt={item.coverImageAltTR} className="w-full h-[200px] rounded-t-xl" />
                                        </div>
                                        <div className="p-5 flex flex-col min-h-[248px]">
                                            <div className="font-semibold line-clamp-2">{item.TR_title}</div>
                                            <div className="text-sm ml-auto mt-2 flex flex-row items-center justify-center">{formatDate(item.createdAt)} <BiSolidPencil size={14} className='ml-1'/></div>
                                            <h4 className="text-sm mt-2 line-clamp-3">{item.TR_description}</h4>
                                            <Link href={`/${lang}/blog/${item.TR_Slug}`} className="mt-auto ml-auto flex p-2 font-semibold bg-color2 text-white w-40 items-center rounded-3xl shadow-lg shadow-gray-400 justify-center">
                                                Yazıyı Oku <AiOutlineArrowRight size={20} className='ml-2' />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogCards