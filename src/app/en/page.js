import React from "react";
import Header from "@/components/header";
import LatestBlog from "@/components/latestBlog";
import Blogs from "@/components/blogs";
import { getPostEn, getLastThreePostEn } from "@/services/service";

export default async function Home() {
    const [posts, lastThree] = await Promise.all([getPostEn(), getLastThreePostEn()]);
    return (
        <div>
            <Header />
            <LatestBlog lastThree={lastThree} />
            <div className="p-20  bg-gray-200">
                <div className="flex flex-col gap-20">
                    <Blogs posts={posts} lang="en" />
                </div>
            </div>
        </div>
    );
}