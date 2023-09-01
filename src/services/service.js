
export async function getCategory() {
    try {
        const res = await fetch('http://localhost:8080/categories')
        if (res.status === 200) {
            return res.json()
        } else {
            return "err"
        }
    } catch (err) {
        return "err"
    }
}

export async function getPost() {
    try {
        const res = await fetch('http://localhost:8080/post/getPostsForMainPage', { cache: "no-store" })
        if (res.status === 200) {
            return res.json()
        } else {
            return "err"
        }
    } catch (err) {
        return "err"
    }
}

export async function getPostEn() {
    try {
        const res = await fetch('http://localhost:8080/post/getPostsForMainPage?lang=EN', { cache: "no-store" })
        if (res.status === 200) {
            return res.json()
        } else {
            return "err"
        }
    } catch (error) {
        return "err"
    }
}

export async function getTurkishPostBySlug(TrSlug) {
    try {
        const res = await fetch(`http://localhost:8080/post/${TrSlug}`, { cache: "no-store" })
        if (res.status === 200) {
            return res.json()
        } else {
            if (res.status === 404) {
                return "notfount"
            } else {
                return "err"
            }
        }
    } catch (err) {
        return "err"
    }
}

export async function getEnglishPostBySlug(EnSlug) {
    try {
        const res = await fetch(`http://localhost:8080/post/${EnSlug}?lang=EN`, { cache: "no-store" })
        if (res.status === 200) {
            return res.json()
        } else {
            if (res.status === 404) {
                return "notfount"
            } else {
                return "err"
            }
        }
    } catch (err) {
        return "err"
    }
}

export async function getLastThreePost() {
    try {
        const res = await fetch('http://localhost:8080/post/getLastThreePost', { cache: "no-store" })
        if (res.status === 200) {
            return res.json()
        } else {
            return "err"
        }
    } catch (error) {
        return "err"
    }
}

export async function getLastThreePostEn() {
    try {
        const res = await fetch('http://localhost:8080/post/getLastThreePost?lang=EN', { cache: "no-store" })
        if (res.status === 200) {
            return res.json()
        } else {
            return "err"
        }
    } catch (error) {
        return "err"
    }
}

export async function getCategoryBlogTr(slug, page = 1) {
    try {
        const res = await fetch(`http://localhost:8080/category/${slug}/posts?lang=TR&page=${page}`, { cache: "no-store" })
        switch (res.status) {
            case 200:
                return res.json()
            case 404:
                return "notfound"
            case 400:
                return "badrequest"
            case 500:
                return "err"
            default:
                return "err"
        }
    } catch (error) {
        return "err"
    }
}

export async function getCategoryBlogEn(slug, page = 1) {
    try {
        const res = await fetch(`http://localhost:8080/category/${slug}/posts?lang=EN&page=${page}`, { cache: "no-store" })
        switch (res.status) {
            case 200:
                return res.json()
            case 404:
                return "notfound"
            case 400:
                return "badrequest"
            case 500:
                return "err"
            default:
                return "err"
        }
    } catch (error) {
        return "err"
    }
}

export async function searchPost(slug, lang) {
    try {
        const res = await fetch(`http://localhost:8080/post/searchPost?lang=${lang}&searchTerm=${slug}`, { cache: "no-store" })
        if (res.status === 200) {
            return res.json()
        } else {
            return "err"
        }
    } catch (err) {
        return "err"
    }
}

export async function getBlogCounter(slug, lang) {
    try {
        const res = await fetch(`http://localhost:8080/category/getBlogCounter?categorySlug=${slug}&lang=${lang}`, { cache: "no-store" })
        if (res.status === 200) {
            return res.json()
        } else {
            return "err"
        }
    } catch (err) {
        return "err"
    }
}

