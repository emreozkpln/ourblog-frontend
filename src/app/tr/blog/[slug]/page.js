import CodeWrite from "@/components/codeWrite";
import Header from "@/components/header";
import React from "react";
import ReactMarkdown from "react-markdown";
import { getTurkishPostBySlug } from "@/services/service";

async function CodeDetail({params}) {
	let post = null
	
	let res = await getTurkishPostBySlug(params.slug)
	if (res.blog) {
		post = res.blog
	}
	
	if (post) {
		return (
			<div className="flex flex-col items-center">
				<Header />
				<ReactMarkdown className="text-blue-400 md:max-w-4xl flex flex-col gap-8" children={post.TR_content} components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || "");
						return !inline && match ? (
							<div className="justify-center items-center">
								<CodeWrite className={"px-28"} language={match[1]} children={String(children)} />
							</div>
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
