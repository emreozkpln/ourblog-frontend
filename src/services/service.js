
export async function getCategory() {
    const res = await fetch('http://localhost:8080/categories')
    return res.json()
}

export async function getPost() {
    const res = await fetch('http://localhost:8080/post/getPostsForMainPage', { cache: "no-store" })
    return res.json()
}

export async function getTurkishPostBySlug(TrSlug) {
    const res = await fetch(`http://localhost:8080/post/${TrSlug}`, { cache: "no-store" })
    if (res.status === 200){
        return res.json()
    } else {
        return "err"
    }
}

export async function getEnglishPostBySlug(TrSlug) {
    const res = await fetch(`http://localhost:8080/post/${TrSlug}?lang=EN`, { cache: "no-store" })
    if (res.status === 200){
        return res.json()
    } else {
        return "err"
    }
}