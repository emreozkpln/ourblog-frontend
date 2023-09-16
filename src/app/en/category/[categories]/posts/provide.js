"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/components/header'
import formatDate from '@/components/utils/formatDate';
import Link from 'next/link';
import { AiOutlineArrowRight } from "react-icons/ai"
import { BiSolidPencil } from "react-icons/bi"
import { useRouter } from 'next/navigation'

function CategoryBlogTr({ params }) {
    const router = useRouter()
    const [blogCounter, setBlogCounter] = useState(null)
    const [blogPosts, setBlogPosts] = useState(null)
    const [currentPage, setCurrentPage] = useState(2)
    const [isLoadedAllPost, setIsLoadedAllPost] = useState(true)
    useEffect(() => {
        async function fetchData() {
            try {
                const blogCounterRes = await fetch(process.env.API_URL + `/category/getBlogCounter?categorySlug=${params.categories}&lang=EN`)
                switch (blogCounterRes.status) {
                    case 200:
                        const blogCounterJson = await blogCounterRes.json()
                        setBlogCounter(blogCounterJson.BlogCounter)
                        if (blogCounterJson.BlogCounter < 11) {
                            setIsLoadedAllPost(true)
                        } else {
                            setIsLoadedAllPost(false)
                        }
                        break;
                    case 404:
                        router.push("/not-found")
                        break;
                    case 500:
                        router.push("/internal-error")
                        break;
                    default:
                        break;
                }
            } catch (err) {
                router.push("/internal-error")
            }
            try {
                const postsRes = await fetch(process.env.API_URL + `/category/${params.categories}/posts?lang=EN`)
                switch (postsRes.status) {
                    case 200:
                        const postsJson = await postsRes.json()
                        setBlogPosts(postsJson.posts)
                        break;
                    case 404:
                        router.push("/not-found")
                        break;
                    case 500:
                        router.push("/internal-error")
                        break;
                    default:
                        break;
                }
            } catch (err) {
                router.push("/internal-error")
            }
        }
        fetchData()
    }, [])
    const loadMore = () => {
        setCurrentPage(currentPage + 1)
        fetch(process.env.API_URL + `/category/${params.categories}/posts?lang=EN&page=${currentPage}`).then(res => res.json()).then(data => {
            setBlogPosts([...blogPosts, ...data.posts])
            if (data.posts.length < 11) {
                setIsLoadedAllPost(true)
            } else {
                setIsLoadedAllPost(false)
            }
        })

    }

    return (
        <div>
            <Header lang={"EN"} />
            <div className='p-5 sm:p-20 grid gap-20'>
                <div className="flex space-x-4 items-center">
                    <div className="w-1.5 h-28 bg-color2 rounded-lg"></div>
                    <h2 className="text-3xl font-extrabold text-color2">
                        {params.categories.toString().toUpperCase()} {blogCounter && <span className="bg-color3 p-1 text-white rounded-xl shadow-xl">{blogCounter}</span>}
                    </h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {
                        blogPosts && blogPosts.map((item, index) => (
                            <div key={index}>
                                <div className="flex flex-col col-span-1 shadow-xl rounded-xl">
                                    <div>
                                        <img src={item.coverImage} alt={item.coverImageAltEN} title={item.coverImageTitleEN} className="w-full h-[200px] rounded-t-xl" />
                                    </div>
                                    <div className="p-5 flex flex-col min-h-[248px]">
                                        <div className="font-semibold line-clamp-2">{item.EN_title}</div>
                                        <div className="text-sm ml-auto mt-2 flex flex-row items-center justify-center">{formatDate(item.createdAt)} <BiSolidPencil size={14} className='ml-1' /></div>
                                        <h4 className="text-sm mt-2 line-clamp-3">{item.EN_description}</h4>
                                        <Link href={`/en/blog/${item.EN_Slug}`} className="mt-auto ml-auto flex p-2 font-semibold bg-color2 text-white w-40 items-center rounded-3xl shadow-lg shadow-gray-400 justify-center">
                                            Read Article <AiOutlineArrowRight size={20} className='ml-2' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {!isLoadedAllPost &&
                    <div className='my-5 flex items-center justify-center'>
                        <button onClick={loadMore} className='bg-color2 h-14 rounded-2xl w-[90vw] max-w-sm items-center justify-center text-white font-semibold text-xl'>
                            Load More
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default CategoryBlogTr