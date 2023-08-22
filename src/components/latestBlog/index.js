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
					className="w-[calc(100vw-160px)] p-2">
					{
						lastThree && lastThree.posts.map((item, index) => (
							<div key={index}>
								<SwiperSlide>
									<div className="flex gap-7 justify-evenly text-white">
										<div>
											<Image src={js} alt="Javascript" className="h-[370px] w-[580px] rounded-3xl shadow-xl hidden md:block" />
										</div>
										<div className="w-[800px] flex flex-col gap-3 justify-center">
											<div className="flex items-center mt-4 gap-1">
												{item.categories.length === 0 ?
													(<h3 className="font-semibold text-xl">Diğer</h3>)
													:
													item.categories.map((element, index) => (
														<h3 key={index} className="font-semibold text-xl">{element.TR_title}</h3>
													))
												}
												<div className="text-sm text-gray-200 ml-1">{formatDate(item.createdAt)}</div>
											</div>
											<h1 className="text-2xl w-[400px] sm:w-[580px] lg:w-full font-semibold mt-2 leading-tight md:text-6xl">{item.TR_title}</h1>
											<Link href={`/${lang}/blog/${item.TR_Slug}`} className="flex p-3 px-2 gap-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center mt-5">
												Read Artical <AiOutlineArrowRight size={20} />
											</Link>
										</div>
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
			<div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-10 md:px-20 py-8 w-full grid gap-7">
				<div>
					<div className="flex flex-col gap-5 sm:flex-row text-white items-center justify-between">
						<div className="flex text-white items-center">
							<div className="w-1 h-16 bg-white mr-4 rounded-lg"></div>
							<h2 className="text-2xl font-semibold text-white">Son Yazılar</h2>
						</div>
						<div className="border-b border-gray-300 flex">
							<div className="relative border-b border-white">
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
					className="w-[calc(100vw-100px)] sm:w-[calc(100vw-160px)] p-2">
					{
						lastThree && lastThree.posts.map((item, index) => (
							<div key={index}>
								<SwiperSlide>
									<div className="flex gap-7 justify-evenly text-white ">
										<div>
											<Image src={js} alt="Javascript" className="h-[370px] w-[580px] rounded-3xl shadow-xl hidden md:block" />
										</div>
										<div className="w-[250px] sm:w-[350px] md:w-[600px] lg:w-[800px] flex flex-col gap-3 justify-center">
											<div className="flex items-center mt-4 gap-1">
												{item.categories.length === 0 ?
													(<h3 className="font-semibold text-xs md:text-xl">Diğer</h3>)
													:
													item.categories.map((element, index) => (
														<h3 key={index} className="font-semibold text-xs md:text-xl">{element.EN_title}</h3>
													))
												}
												<div className="text-sm text-gray-200 ml-1">{formatDate(item.createdAt)}</div>
											</div>
											<h1 className="text-sm sm:text-lg w-[200px] sm:w-[580px] md:w-full font-semibold mt-2 md:text-3xl leading-tight lg:text-6xl">{item.EN_title}</h1>
											<Link href={`/${lang}/blog/${item.EN_Slug}`} className="flex p-2 md:p-3 px-2 gap-1 md:gap-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center mt-2 md:mt-5">
												Read Artical <AiOutlineArrowRight size={20} />
											</Link>
										</div>
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
