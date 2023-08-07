"use client"
import BlogCards from "../blog-cards";

export default function Blogs(params) {
    let keys = Object.keys(params.posts.posts)
    console.log(params.posts.posts[keys[0]].blogCounter)
    for (let i = 0; i < Object.keys(params.posts.posts).length; i++) {
        return (
            <>
                {
                    keys.map((val, key) => (
                        <BlogCards categoryName={val} postsDetails={params.posts.posts[val].posts} blogCounter={params.posts.posts[val].blogCounter} />
                    ))
                }
            </>
        )
    }
}