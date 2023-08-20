import Image from "next/image";
import CodeWrite from "@/components/codeWrite";
import Header from "@/components/header";
import RelationalBlog from "@/components/relationalBlog";
import React from "react";
import ReactMarkdown from "react-markdown";
import formatDate from "@/components/utils/formatDate";
import {BiSolidTimeFive} from "react-icons/bi"
import {MdDiscount} from "react-icons/md"
import {IoMdCreate} from "react-icons/io"
import {AiFillEye} from "react-icons/ai"
import { cacheForEnBlog } from "@/services/customCacheService";

export async function generateMetadata({ params, searchParams }, parent) {
	const res = await cacheForEnBlog(params.slug)
	if (res?.blog) {
		return {
			title: res.blog.EN_MetaTitle,
			description: res.blog.EN_MetaDescription,
			robots: "index, follow",
			image: res.blog.coverImage,
			type: "article",
			openGraph: {
				title: res.blog.EN_MetaTitle,
				description: res.blog.EN_MetaDescription,
				images: res.blog.coverImage
			}
		}
	}
}

async function CodeDetail({params}) {
	let post = null
	
	let res = await cacheForEnBlog(params.slug)
	if (res.blog) {
		post = res.blog
	}
    
	if (post) {
		return (
			<>
			<div className="">
				<Header />
				<div className="grid grid-cols-10">
					<div className="col-start-4 col-end-8 w-full mt-8 mb-8">
						<div className="flex flex-col">
							<Image
								className="rounded-t-3xl rounded-r-3xl"
								src={post.coverImage}
								width={0}
								height={0}
								sizes="100vw"
								style={{ height: '100%', width: '100%' }} // optional
								objectFit="cover"
							/>
							<div className="flex flex-row justify-between">
								<div>
									<h1 className="text-2xl font-medium">{post.EN_title}</h1>
									<h1 className="text-lg font-light text-gray-700">{post.EN_description}</h1>
									<div className="flex flex-row gap-2">
										{post.categories.length !== 0 &&
											post.categories.map((element, index) => (
												<div key={index} className="text-lg font-light text-gray-700 flex flex-row items-center gap-1 border bg-color3/75 px-1 rounded-md"><MdDiscount size={14}/> {element.EN_title}</div>
											))
										}
									</div>
								</div>
								<div className="flex flex-col items-end">
									<div className="flex flex-row gap-2 items-center">{post.viewCounter} <AiFillEye /></div>
									{post.createdAt !== post.updatedAt && 
										<div className="flex flex-row gap-2 items-center">{formatDate(post.updatedAt)} <IoMdCreate /></div>
									}
									<div className="flex flex-row gap-2 items-center">{formatDate(post.createdAt)} <BiSolidTimeFive /></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-start-3 col-end-9 w-full">
						<ReactMarkdown className="text-blue-400 flex flex-col gap-6" children={post.EN_content} components={{
							code({ node, inline, className, children, ...props }) {
								const match = /language-(\w+)/.exec(className || "");
								return !inline && match ? (
									<CodeWrite className={"px-20"} language={match[1]} children={String(children)} />
								) : (
									<code className={className} {...props}>
										{children}
									</code>
								);
							},
							p({children}) {
								return (
									<p className="text-black text-lg">{children}</p>
									)
								},
							h1({node, inline, className, children, ...props}) {
								return (
									<h1 className="text-black text-4xl font-bold">
										{children}
									</h1>
								);
							},
							h2({node, inline, className, children, ...props}) {
								return (
									<h1 className="text-black text-3xl font-bold">
										{children}
									</h1>
								);
							},
							h3({node, inline, className, children, ...props}) {
								return (
									<h1 className="text-black text-2xl font-bold">
										{children}
									</h1>
								);
							},
							h4({node, inline, className, children, ...props}) {
								return (
									<h1 className="text-black text-xl font-bold">
										{children}
									</h1>
								);
							},
							h5({node, inline, className, children, ...props}) {
								return (
									<h1 className="text-black text-lg font-bold">
										{children}
									</h1>
								);
							},
						}}/>
						<div className="my-5 w-full h-[1px] bg-gray-400"></div>
						{post.relationalPosts.length > 0 && <h3 className="mb-3 font-light text-3xl">Relational Blogs</h3>}
						
						<div className="flex flex-col items-center mb-6">
							{post.relationalPosts.length > 0 && post.relationalPosts.map((post, key) => {
								return (
									<>
										<RelationalBlog imageUrl={post.coverImage} className={"w-[600px]"} post={post} key={key} lang={"en"}/>
									</>
								)
							})}
						</div>
					</div>
				</div>
			</div>
			</>
		)
	}
	
}

export default CodeDetail;
