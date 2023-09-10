import React from "react";
import Header from "@/components/header";
import LatestBlog from "@/components/latestBlog";
import Blogs from "@/components/blogs";
import { getPost, getLastThreePost } from "@/services/service";

export function generateMetadata() {
	return {
		title: "İleri seviye programcılığa şimdi adım at | handbookofcoding.com",
		description: "handbookofcoding senior developer olma yolunda sana kritik bilgiler verecektir. Daha güvenli, modern, stabil, uyumlu yazılım geliştirmen için bir el kitabı olacak. Hemen senior developer ol."
	}
}

export default async function Home() {

	const [posts, lastThree] = await Promise.all([getPost(), getLastThreePost()]);

	return (
		<div>
			<Header lang="tr" />
			<LatestBlog lastThree={lastThree} lang="tr" />
			<div className="p-10 sm:p-20 bg-gray-200">
				<div className="flex flex-col space-y-20">
					<Blogs posts={posts} lang="tr" />
				</div>
			</div>
		</div>
	);
}