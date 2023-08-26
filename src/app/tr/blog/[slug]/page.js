import Image from "next/image";
import CodeWrite from "@/components/codeWrite";
import Header from "@/components/header";
import RelationalBlog from "@/components/relationalBlog";
import React from "react";
import ReactMarkdown from "react-markdown";
import { cacheForTrBlog } from "@/services/customCacheService";
import formatDate from "@/components/utils/formatDate";
import {BiSolidTimeFive} from "react-icons/bi"
import {MdDiscount} from "react-icons/md"
import {IoMdCreate} from "react-icons/io"
import {AiFillEye} from "react-icons/ai"

export async function generateMetadata({ params, searchParams }, parent) {
	const res = await cacheForTrBlog(params.slug)
	if (res?.blog) {
		return {
			title: res.blog.TR_MetaTitle,
			description: res.blog.TR_MetaDescription,
			robots: "index, follow",
			image: res.blog.coverImage,
			type: "article",
			openGraph: {
				title: res.blog.TR_MetaTitle,
				description: res.blog.TR_MetaDescription,
				images: res.blog.coverImage
			}
		}
	}
}

async function CodeDetail({params}) {
	let post = null
	
	let res = await cacheForTrBlog(params.slug)
	if (res) {
		post = res.blog
	}

	if (post) {
		return (
			<>
			<div className="">
				<Header lang={"tr"}/>
				<div className="grid grid-cols-10">
					<div className="col-start-2 col-end-10 md:col-start-3 md:col-end-9 lg:col-start-4 lg:col-end-8 w-full mt-8 mb-8">
						<div className="flex flex-col">
							<Image
								className="rounded-t-3xl"
								src={post.coverImage}
								width={0}
								height={0}
								sizes="100vw"
								style={{ height: '100%', width: '100%' }} // optional
							/>
							<div className="flex flex-row justify-between">
								<div>
									<h1 className="text-2xl font-medium">{post.TR_title}</h1>
									<h1 className="text-lg font-light text-gray-700">{post.TR_description}</h1>
									<div className="flex flex-row space-x-2">
										{post.categories.length !== 0 &&
											post.categories.map((element, index) => (
												<div key={index} className="text-lg font-light text-gray-700 flex flex-row items-center space-x-1 border bg-color3/75 px-1 rounded-md"><MdDiscount size={14}/><div>{element.TR_title}</div></div>
											))
										}
									</div>
								</div>
								<div className="flex flex-col items-end">
									<div className="flex flex-row space-x-1 items-center"><div>{post.viewCounter}</div> <AiFillEye /></div>
									{post.createdAt !== post.updatedAt && 
										<div className="flex flex-row space-x-1 items-center"><div>{formatDate(post.updatedAt)}</div> <IoMdCreate /></div>
									}
									<div className="flex flex-row space-x-1 items-center"><div>{formatDate(post.createdAt)}</div> <BiSolidTimeFive /></div>
								</div>
							</div>
						</div>
					</div>
					<div className="px-8 col-start-1 col-end-11 md:col-start-2 md:col-end-10 lg:col-start-3 lg:col-end-9 w-full">
						<ReactMarkdown className="text-blue-400 flex flex-col space-y-4" children={post.TR_content} components={{
							code({ node, inline, className, children, ...props }) {
								const match = /language-(\w+)/.exec(className || "");
								return !inline && match ? (
									<CodeWrite className={"px-0 text-sm sm:text-base sm:px-8 text-left"} language={match[1]} children={String(children)} />
								) : (
									<code className={className} {...props}>
										{children}
									</code>
								);
							},
							p({children}) {
								return (
									<p className="text-black text-lg text-justify">{children}</p>
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
									<h2 className="text-black text-3xl font-bold">
										{children}
									</h2>
								);
							},
							h3({node, inline, className, children, ...props}) {
								return (
									<h3 className="text-black text-2xl font-bold">
										{children}
									</h3>
								);
							},
							h4({node, inline, className, children, ...props}) {
								return (
									<h4 className="text-black text-xl font-bold">
										{children}
									</h4>
								);
							},
							h5({node, inline, className, children, ...props}) {
								return (
									<h5 className="text-black text-lg font-bold">
										{children}
									</h5>
								);
							},
							img({node, inline, className, children, ...props}) {
								return (
									<span className="w-full flex items-center justify-center">
										<Image
											className="h-full max-w-full w-[calc(100vw-100px)] sm:w-[calc(100vw-200px)] md:w-[calc(100vw-350px)] lg:w-[40vw] xl:w-[35vw] rounded-xl"
											src={...props.src}
											width={0}
											height={0}
											sizes="100vw"
											alt={...props.alt}
											title={...props.title}
										/>
									</span>
								)
							}
						}}/>
						<div className="my-5 w-full h-[1px] bg-gray-400"></div>
						{post.relationalPosts.length > 0 && <h3 className="mb-3 font-light text-3xl">İlgili Yazılar</h3>}
						
						<div className="flex flex-col items-center mb-6">
							{post.relationalPosts.length > 0 && post.relationalPosts.map((post, key) => {
								return (
									<>
										<RelationalBlog imageUrl={post.coverImage} className={"lg:w-[600px] sm:w-[450px] md:w-[550px]"} post={post} key={key} lang={"tr"}/>
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
