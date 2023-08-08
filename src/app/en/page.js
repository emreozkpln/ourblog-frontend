import React from "react";
import Header from "@/components/header";
import LatestBlog from "@/components/latestBlog";
import Blogs from "@/components/blogs";
import { getPostEn } from "@/services/service";

export default async function Home() {
    const posts = await getPostEn()
    return (
        <div>
            <Header />
            <LatestBlog />
            <div className="p-20  bg-gray-200">
                <div className="flex flex-col gap-20">
                    <Blogs posts={posts} lang="en" />
                </div>
            </div>
        </div>
    );
}