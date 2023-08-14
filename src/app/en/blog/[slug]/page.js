import CodeWrite from "@/components/codeWrite";
import Header from "@/components/header";
import RelationalBlog from "@/components/relationalBlog";
import React from "react";
import ReactMarkdown from "react-markdown";
import { getEnglishPostBySlug } from "@/services/service";

async function CodeDetail({params}) {
	let post = null
	
	let res = await getEnglishPostBySlug(params.slug)
	if (res.blog) {
		post = res.blog
	}
    
	if (post) {
		return (
			<>
			<div className="flex flex-col items-center">
				<Header />
				<ReactMarkdown className="text-blue-400" children={post.EN_content} components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || "");
						return !inline && match ? (
							<CodeWrite language={match[1]} children={String(children)} />
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
					h1({node, inline, className, children, ...props}) {
						return (
							<h1 className="text-black text-3xl font-bold">
								{children}
							</h1>
						);
					},
					p({children}) {
						return (
							<p className="text-black text-lg">{children}</p>
						)
					}
				}}/>
				<div className="my-5 md:w-[896px] h-[1px] bg-gray-400"></div>
				{post.relationalPosts.length > 0 && <h3 className="mb-3 font-light text-3xl">İlgili Yazılar</h3>}
				
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
			</>
		)
	}
	
}

export default CodeDetail;
