"use client";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import js from "../iamge/javascript-zhestkie-chasti.jpg";
import Link from "next/link";
import { motion } from "framer-motion"

function LatestBlog() {
	return (
		<div className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 px-20 py-8 w-full grid gap-7">
			<div>
				<div className="flex text-white items-center justify-between">
					<div className="flex textw">
						<div className="w-1 h-16 bg-white mr-4 rounded-lg"></div>
						<div className="flex flex-col">
							<h2 className="text-2xl font-semibold text-white">Latest Blog</h2>
							<span className="text-sm">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.</span>
						</div>
					</div>
					<div className="border-b border-gray-300 flex">
						<div className="relative border-b border-gray-500">
							<BsSearch size={20} className=" absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
							<input type="text" className="pl-9 border-none bg-transparent outline-none p-1 w-40 text-white placeholder:text-gray-400" placeholder="s e a r c h" />
						</div>
						<button className="text-purple-500 bg-white px-2 rounded-md">Go</button>
					</div>
				</div>
			</div>
			<motion.div initial={{ opacity: 0, translateX: -60 }} animate={{ opacity: 1, translateX: 0 }} className="flex justify-evenly text-white">
				<Image src={js} alt="Javascript" className="h-[370px] w-[580px] rounded-3xl shadow-xl" />
				<div className="w-[800px] flex flex-col gap-3 justify-center">
					<div className="flex  items-center gap-1">
						<div className="font-semibold">Maintenance -</div>
						<div className="text-sm text-gray-200 ml-1">October 30, 2023</div>
					</div>
					<h1 className="text-5xl font-semibold mt-2">How to center a divHow to center a divHow to center a divHow to center a divHow to center a div</h1>
					<Link href="/detay" className="flex p-3 px-2 gap-2 font-semibold bg-white text-purple-500 w-40 items-center rounded-3xl shadow-xl justify-center mt-5">
						Read Artical <AiOutlineArrowRight size={20} />
					</Link>
				</div>
			</motion.div>
		</div>
	);
}

export default LatestBlog;
