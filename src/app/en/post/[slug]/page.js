import CodeWrite from "@/components/codeWrite";
import Header from "@/components/header";
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
					}
				}}/>
			</div>
		)
	}
	
}

export default CodeDetail;
