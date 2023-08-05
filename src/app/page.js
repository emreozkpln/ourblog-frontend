
import React from "react";
import Header from "@/components/header";
import LatestBlog from "@/components/latestBlog";
// import Categories from "@/components/categories";
import Blogs from "@/components/blog-cards";
import { getPost } from "@/services/service";

export default async function Home() {
	const posts = await getPost()

	return (
		<div>
			<Header />
			<LatestBlog />
			<div className="p-20 grid gap-20 bg-gray-200">
				{/* <Categories /> */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					<Blogs posts={posts} />
				</div>
			</div>
		</div>
	);
}