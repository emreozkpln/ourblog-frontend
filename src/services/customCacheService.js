const { getTurkishPostBySlug, getEnglishPostBySlug } = require("./service")

let trMap = new Map()
let enMap = new Map()

const cacheForTrBlog = async(slug) => {
    let post = trMap.get(slug)
    if (post === undefined) {
        const res = await getTurkishPostBySlug(slug)
        if (res?.blog) {
            trMap.set(slug, res)
            return res
        } else {
            return "err"
        }
    } else {
        trMap.delete(slug)
        return post
    }
}

const cacheForEnBlog = async(slug) => {
    let post = enMap.get(slug)
    if (post === undefined) {
        const res = await getEnglishPostBySlug(slug)
        if (res?.blog) {
            enMap.set(slug, res)
            return res
        } else {
            return "err"
        }
    } else {
        enMap.delete(slug)
        return post
    }
}

module.exports = {
    cacheForTrBlog,
    cacheForEnBlog
}