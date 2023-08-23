import BlogCards from "../blog-cards";

export default function Blogs(params) {
    let keys = Object.keys(params.posts.posts)
    for (let i = 0; i < Object.keys(params.posts.posts).length; i++) {
        return (
            <>
                {
                    keys.map((val, key) => (
                        <BlogCards lang={params.lang} categoryName={val} postsDetails={params.posts.posts[val].posts} blogCounter={params.posts.posts[val].blogCounter} />
                    ))
                }
            </>
        )
    }
}