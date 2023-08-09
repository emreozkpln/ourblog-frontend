
import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import js from "../iamge/javascript-zhestkie-chasti.jpg";
import Link from "next/link";

function LatestBlog({ lastThree, lang }) {
	console.log(lastThree.posts[0]);
	let dbDate, year, month, day, formatDate
	lastThree.posts.forEach(element => {
		dbDate = element.createdAt
		const dateObject = new Date(dbDate);
		year = dateObject.getFullYear();
		month = dateObject.getMonth() + 1; // Aylar 0-11 arası indekslenir
		day = dateObject.getDate();
		formatDate = `${day}.${month}.${year}`;
	});
	if (lang == "tr") {

		return (
			<div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-20 py-8 w-full grid gap-7">
				<div>
					<div className="flex text-white items-center justify-between">
						<div className="flex text-white">
							<div className="w-1 h-16 bg-white mr-4 rounded-lg"></div>
							<div className="flex flex-col">
								<h2 className="text-2xl font-semibold text-white">Latest Blog</h2>
								<span className="text-sm">{lastThree.posts[0].TR_title}</span>
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
				{
					lastThree && lastThree.posts.map((item, index) => (
						<div key={index}>
							<div className="flex flex-col gap-7 lg:gap-6 lg:flex-row justify-evenly text-white">
								<Image src={js} alt="Javascript" className="h-[370px] w-[580px] rounded-3xl shadow-xl hidden md:block" />
								<div className="w-[800px] flex flex-col gap-3 justify-center">
									<div className="flex  items-center gap-1">
										<div className="font-semibold">{item.categories[0].TR_title}</div>
										<div className="text-sm text-gray-200 ml-1">{formatDate}</div>
									</div>
									<h1 className="text-2xl w-[400px] sm:w-[580px] lg:w-full font-semibold mt-2 leading-tight md:text-4xl">{item.TR_description}</h1>
									<Link href={`/${lang}/blog/${item.TR_Slug}`} className="flex p-3 px-2 gap-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center mt-5">
										Read Artical <AiOutlineArrowRight size={20} />
									</Link>
								</div>
							</div>
						</div>
					))
				}
			</div>
		);
	} else {
		return (
			<div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-20 py-8 w-full grid gap-7">
				<div>
					<div className="flex text-white items-center justify-between">
						<div className="flex text-white">
							<div className="w-1 h-16 bg-white mr-4 rounded-lg"></div>
							<div className="flex flex-col">
								<h2 className="text-2xl font-semibold text-white">Latest Blog</h2>
								<span className="text-sm">{lastThree.posts[0].TR_title}</span>
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
				{
					lastThree && lastThree.posts.map((item, index) => (
						<div key={index}>
							<div className="flex flex-col gap-7 lg:gap-6 lg:flex-row justify-evenly text-white">
								<Image src={js} alt="Javascript" className="h-[370px] w-[580px] rounded-3xl shadow-xl hidden md:block" />
								<div className="w-[800px] flex flex-col gap-3 justify-center">
									<div className="flex  items-center gap-1">
										<div className="font-semibold">{item.categories[0].EN_title}</div>
										<div className="text-sm text-gray-200 ml-1">{formatDate}</div>
									</div>
									<h1 className="text-2xl w-[400px] sm:w-[580px] lg:w-full font-semibold mt-2 leading-tight md:text-4xl">{item.EN_description}</h1>
									<Link href={`/${lang}/blog/${item.EN_Slug}`} className="flex p-3 px-2 gap-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center mt-5">
										Read Artical <AiOutlineArrowRight size={20} />
									</Link>
								</div>
							</div>
						</div>
					))
				}
			</div>
		);
	}
}

export default LatestBlog;
