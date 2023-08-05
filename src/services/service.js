
export async function getCategory() {
    const res = await fetch('http://localhost:8080/categories')
    return res.json()
}

export async function getPost() {
    const res = await fetch('http://localhost:8080/post/getPostsForMainPage', { cache: "no-store" })
    return res.json()
}
