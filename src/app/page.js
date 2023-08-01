"use client"
import React from "react";
import Header from "@/components/header";
import LatestBlog from "@/components/latestBlog";
import Categories from "@/components/categories";
import Blogs from "@/components/blog-cards";
import { motion } from "framer-motion"

function Home() {
	const container = {
		visible: {
			transition: {
				//delayChildren: 0.3,
				staggerChildren: 0.2
			}
		}
	}
	const item = {
		hidden: {
			opacity: 0,
			translateY: 20
		},
		visible: {
			opacity: 1,
			translateY: 0
		}
	}
	return (
		<div>
			<Header />
			<LatestBlog />
			<div className="p-20 grid gap-20">
				<Categories />
				<motion.div variants={container} initial="hidden" animate="visible">
					<motion.div variants={item} className="grid grid-cols-4 gap-5">
						<Blogs />
						<Blogs />
						<Blogs />
						<Blogs />
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default Home;
