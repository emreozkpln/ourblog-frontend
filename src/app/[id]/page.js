import CodeWrite from "@/components/codeWrite";
import Header from "@/components/header";
import React from "react";
import ReactMarkdown from "react-markdown";

function CodeDetail({ params }) {
const markdownContent = `
#### Hello, **Markdown** in Next.js with Tailwind CSS!

This is a _demonstration_ of using Markdown and Tailwind CSS together in a Next.js project.

1. Emre
2. Ege
3. Arda

[Google](https://www.google.com.tr/)

\`\`\`js
"use client";
	import React from "react";
	import SyntaxHighlighter from "react-syntax-highlighter";
	import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
	
	function CodeWrite({ children }) {
		return (
			<div className="bg-black  grid place-items-center h-screen">
				<SyntaxHighlighter language="javascript" style={docco}>
					{children}
				</SyntaxHighlighter>
			</div>
		);
	}
	
	export default CodeWrite;
\`\`\`
`;
	return (
		<div className="flex flex-col items-center">
			<Header />
			<ReactMarkdown className="text-blue-400" children={markdownContent} components={{
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
	);
}

export default CodeDetail;
