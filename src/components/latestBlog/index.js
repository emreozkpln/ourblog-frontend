"use client"
import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import formatDate from "../utils/formatDate";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { searchPost } from "@/services/service";
import { redirect } from "next/navigation";

function LatestBlog({ lastThree, lang }) {
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const inputRef = useRef(null);
	const resultsRef = useRef(null);

	useEffect(() => {
		if (lang == "tr") {
			const handleSearch = async () => {
				const results = await searchPost(searchValue, "TR");
				setSearchResults(results)
			}
			handleSearch()
		} else {
			const handleSearch = async () => {
				const results = await searchPost(searchValue, "EN");
				setSearchResults(results)
			}
			handleSearch()
		}
	}, [searchValue]);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (inputRef.current && !inputRef.current.contains(e.target) && resultsRef.current && !resultsRef.current.contains(e.target)) {
				setSearchResults([]);
			}
		};
		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	switch (lastThree) {
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

	if (lang == "tr") {
		return (
			<div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-5 sm:px-10 md:px-20 py-8 w-full grid space-x-7 space-y-7">
				<div>
					<div className="flex flex-col space-x-14 space-y-5 sm:flex-row text-white items-start justify-between">
						<div className="flex text-white items-center">
							<div className="w-1 h-16 bg-white mr-4 rounded-lg"></div>
							<h2 className="text-2xl font-semibold text-white">Son Yazılar</h2>
						</div>
						<div className="border-b border-gray-300 flex flex-col relative ">
							<div className="relative border-b border-white">
								<BsSearch size={20} className=" absolute left-0 top-1/2 transform -translate-y-1/2 text-white" />
								<input type="text" ref={inputRef} className="pl-9 border-none bg-transparent outline-none p-1 w-60 sm:w-80 text-white placeholder:text-gray-300" onChange={(e) => { setSearchValue(e.target.value) }} placeholder="s e a r c h" />
							</div>
							<div className="rounded-lg absolute top-10 z-50 p-1 w-full" ref={resultsRef}>
								{
									searchResults.DBresult && Array.isArray(searchResults.DBresult) && searchResults.DBresult.map((item, index) => (
										<div key={index} className="bg-white hover:bg-gray-200 hover:text-black text-gray-600">
											<Link href={`/${lang}/blog/${item.TR_Slug}`} className="flex space-x-2">
												<img src={item.coverImage} alt={item.coverImageAltTR} title={item.coverImageTitleTR} className="w-10 h-auto" />
												<div className="flex flex-col text-sm">
													<div className="line-clamp-1 font-medium">{item.TR_title}:</div>
													<div className="line-clamp-1 font-medium">{item.TR_description}</div>
												</div>
											</Link>
											<div className="w-full h-0.5 bg-gray-600 mt-1 mb-1 rounded-lg"></div>
										</div>
									))
								}
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
					className="w-[calc(100vw-90px)] sm:w-[calc(100vw-160px)] p-2">
					{
						lastThree && lastThree.posts.map((item, index) => (
							<div key={index}>
								<SwiperSlide>
									<div className="flex space-x-9 justify-evenly text-white ">
										<div>
											<img src={item.coverImage} title={item.coverImageTitleTR} alt={item.coverImageAltTR} className="h-[370px] w-[580px] rounded-3xl shadow-xl hidden md:block" />
										</div>
										<div className="w-[250px] sm:w-[350px] md:w-[600px] lg:w-[800px] flex flex-col justify-center">
											<div className="flex items-center mt-4 space-x-1">
												{item.categories.length === 0 ?
													(<h3 className="font-semibold text-sm md:text-xl">Diğer</h3>)
													:
													item.categories.map((element, index) => (
														<h3 key={index} className="font-semibold text-sm md:text-xl">{element.TR_title}</h3>
													))
												}
												<div className="text-sm text-gray-200 ml-1">{formatDate(item.createdAt)}</div>
											</div>
											<h1 className="text-xl w-[200px] sm:w-[580px] md:w-full font-semibold mt-3 md:text-3xl leading-tight lg:text-5xl">{item.TR_title}</h1>
											<Link href={`/${lang}/blog/${item.TR_Slug}`} className="flex p-2 md:p-3 space-x-1 md:space-x-2 font-semibold w-32 md:w-40 bg-white text-color2 items-center rounded-3xl shadow-xl justify-center mt-3 md:mt-5">
												Yazıyı oku<AiOutlineArrowRight className="w-3 h-3 md:w-5 md:h-5 ml-2" />
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
			<div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-5 sm:px-10 md:px-20 py-8 w-full grid space-x-7 space-y-7">
				<div>
					<div className="flex flex-col space-x-14 space-y-5 sm:flex-row text-white items-start justify-between">
						<div className="flex text-white items-center">
							<div className="w-1 h-16 bg-white mr-4 rounded-lg"></div>
							<h2 className="text-2xl font-semibold text-white">Latest Blog</h2>
						</div>
						<div className="border-b border-gray-300 flex flex-col relative">
							<div className="relative border-b border-white">
								<BsSearch size={20} className=" absolute left-0 top-1/2 transform -translate-y-1/2 text-white" />
								<input type="text" ref={inputRef} className="pl-9 border-none bg-transparent outline-none p-1 w-60 sm:w-80 text-white placeholder:text-gray-300" onChange={(e) => { setSearchValue(e.target.value) }} placeholder="s e a r c h" />
							</div>
							<div className="rounded-lg absolute top-10 z-50 p-1 w-full" ref={resultsRef}>
								{
									searchResults.DBresult && Array.isArray(searchResults.DBresult) && searchResults.DBresult.map((item, index) => (
										<div key={index} className="bg-white hover:bg-gray-200 hover:text-black text-gray-600">
											<Link href={`/${lang}/blog/${item.EN_Slug}`} className="flex space-x-2">
												<img src={item.coverImage} title={item.coverImageTitleEN} alt={item.coverImageAltEN} className="w-10 h-auto" />
												<div className="flex flex-col text-sm">
													<div className="line-clamp-1 font-medium">{item.EN_title}:</div>
													<div className="line-clamp-1 font-medium">{item.EN_description}</div>
												</div>
											</Link>
											<div className="w-full h-0.5 bg-gray-600 mt-1 mb-1 rounded-lg"></div>
										</div>
									))
								}
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
					className="w-[calc(100vw-90px)] sm:w-[calc(100vw-160px)] p-2">
					{
						lastThree && lastThree.posts.map((item, index) => (
							<div key={index}>
								<SwiperSlide>
									<div className="flex space-x-9 justify-evenly text-white ">
										<div>
											<img src={item.coverImage} title={item.coverImageTitleEN} alt={item.coverImageAltEN} className="h-[370px] w-[580px] rounded-3xl shadow-xl hidden md:block" />
										</div>
										<div className="w-[250px] sm:w-[350px] md:w-[600px] lg:w-[800px] flex flex-col justify-center">
											<div className="flex items-center mt-4 space-x-1">
												{item.categories.length === 0 ?
													(<h3 className="font-semibold text-sm md:text-xl">Diğer</h3>)
													:
													item.categories.map((element, index) => (
														<h3 key={index} className="font-semibold text-sm md:text-xl">{element.EN_title}</h3>
													))
												}
												<div className="text-sm text-gray-200 ml-1">{formatDate(item.createdAt)}</div>
											</div>
											<h1 className="text-xl w-[200px] sm:w-[580px] md:w-full font-semibold mt-3 md:text-3xl leading-tight lg:text-5xl">{item.EN_title}</h1>
											<Link href={`/${lang}/blog/${item.EN_Slug}`} className="flex p-2 md:p-3 space-x-1 md:space-x-2 font-semibold w-32 md:w-40 bg-white text-color2 items-center rounded-3xl shadow-xl justify-center mt-3 md:mt-5">
												Read More <AiOutlineArrowRight className="w-3 h-3 md:w-5 md:h-5 ml-2" />
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
