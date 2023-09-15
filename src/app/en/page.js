import React from "react";
import Header from "@/components/header";
import LatestBlog from "@/components/latestBlog";
import Blogs from "@/components/blogs";
import { getPostEn, getLastThreePostEn } from "@/services/service";

export function generateMetadata() {
	return {
		title: "Step into advanced programming now | handbookofcoding.com",
		description: "handbookofcoding will give you critical information on your path to becoming a senior developer. It will be a handbook for you to develop more secure, modern, stable and compatible software. Become a senior developer now."
	}
}

export default async function Home() {

    const [posts, lastThree] = await Promise.all([getPostEn(), getLastThreePostEn()]);
    
    return (
        <div>
            <Header lang="en" />
            <LatestBlog lastThree={lastThree} lang="en" />
            <div className="p-10 sm:p-20 bg-gray-200">
                <div className="flex flex-col space-y-20">
                    <Blogs posts={posts} lang="en" />
                </div>
            </div>
        </div>
    );
}