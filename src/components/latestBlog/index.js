"use client"
import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import js from "../iamge/javascript-zhestkie-chasti.jpg";
import Link from "next/link";
import formatDate from "../utils/formatDate";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function LatestBlog({ lastThree, lang }) {

	if (lang == "tr") {
		return (
			<div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-20 py-8 w-full grid gap-7">
				<div>
					<div className="flex text-white items-center justify-between">
						<div className="flex text-white items-center">
							<div className="w-1 h-16 bg-white mr-4 rounded-lg"></div>
							<div className="flex flex-center">
								<h2 className="text-2xl font-semibold text-white">Son Yazılar</h2>
							</div>
						</div>
						<div className="border-b border-gray-300 flex">
							<div className="hidden lg:block relative border-b border-white">
								<BsSearch size={20} className=" absolute left-0 top-1/2 transform -translate-y-1/2 text-white" />
								<input type="text" className="pl-9 border-none bg-transparent outline-none p-1 w-40 text-white placeholder:text-color1" placeholder="s e a r c h" />
							</div>
						</div>
					</div>
				</div>
				<Swiper
					slidesPerView={1}
					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
					autoplay={{
						delay: 2000
					}}
					navigation={true}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className="w-[950px] p-2">
					{
						lastThree && lastThree.posts.map((item, index) => (
							<div key={index}>
								<SwiperSlide className="flex flex-col gap-7 lg:gap-6 lg:flex-row justify-evenly text-white">
									<Image src={js} alt="Javascript" className="h-[370px] w-[580px] rounded-3xl shadow-xl hidden md:block flex justify-center" />
									<div className="w-[800px] flex flex-col gap-3 justify-center">
										<div className="flex  justify-center items-center mt-4 gap-1">
											{item.categories.length === 0 ?
												(<div className="font-semibold">Diğer</div>)
												:
												item.categories.map((element, index) => (
													<div key={index} className="font-semibold">{element.TR_title}</div>
												))
											}
											<div className="text-sm text-gray-200 ml-1">{formatDate(item.createdAt)}</div>
										</div>
										<h1 className="text-2xl w-[400px] sm:w-[580px] lg:w-full font-semibold mt-2 leading-tight md:text-4xl">{item.TR_title}</h1>
										<Link href={`/${lang}/blog/${item.TR_Slug}`} className="flex p-3 px-2 gap-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center mt-5">
											Read Artical <AiOutlineArrowRight size={20} />
										</Link>
									</div>

								</SwiperSlide>
							</div>
						))
					}
				</Swiper>
			</div>
		);
	} else {
		return (
			<div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-20 py-8 w-full grid gap-7">
				<div>
					<div className="flex text-white items-center justify-between">
						<div className="flex text-white items-center">
							<div className="w-1 h-16 bg-white mr-4 rounded-lg"></div>
							<div className="flex flex-center">
								<h2 className="text-2xl font-semibold text-white">Latest Blogs</h2>
							</div>
						</div>
						<div className="border-b border-gray-300 flex">
							<div className="hidden lg:block relative border-b border-white">
								<BsSearch size={20} className=" absolute left-0 top-1/2 transform -translate-y-1/2 text-white" />
								<input type="text" className="pl-9 border-none bg-transparent outline-none p-1 w-40 text-white placeholder:text-color1" placeholder="s e a r c h" />
							</div>
						</div>
					</div>
				</div>
				<Swiper
					cssMode={true}
					slidesPerView={1}
					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
					navigation
					autoplay={{
						delay: 2000
					}}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className="w-[950px] flex justify-between items-center text-center content-center">
					{
						lastThree && lastThree.posts.map((item, index) => (
							<div key={index}>
								<SwiperSlide className="flex items-center text-center gap-7 lg:gap-6 lg:flex-row justify-around text-white">
									<Image src={js} alt="Javascript" className="h-[370px] w-[580px] rounded-3xl shadow-xl hidden md:block" />
									<div className="w-[800px] flex flex-col gap-3 justify-center">
										<div className="flex  justify-center items-center mt-4 gap-1">
											{item.categories.length === 0 ?
												(<div className="font-semibold">Other</div>)
												:
												item.categories.map((element, index) => (
													<div key={index} className="font-semibold">{element.EN_title}</div>
												))
											}
											<div className="text-sm text-gray-200 ml-1">{formatDate(item.createdAt)}</div>
										</div>
										<h1 className="text-2xl w-[400px] sm:w-[580px] lg:w-full font-semibold mt-2 leading-tight md:text-4xl">{item.EN_title}</h1>
										<Link href={`/${lang}/blog/${item.EN_Slug}`} className="flex p-3 px-2 gap-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center mt-5">
											Read Artical <AiOutlineArrowRight size={20} />
										</Link>
									</div>
								</SwiperSlide>
							</div>
						))
					}
				</Swiper>
			</div>
		);
	}
}

export default LatestBlog;
