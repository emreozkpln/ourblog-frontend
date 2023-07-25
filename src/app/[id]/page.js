import CodeWrite from "@/components/codeWrite";
import React from "react";

function CodeDetail({ params }) {
	const code = `	"use client";
	import React from "react";
	import SyntaxHighlighter from "react-syntax-highlighter";
	import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
	
	function CodeWrite({ children }) {
		return (
			<div className="bg-black grid place-items-center h-screen">
				<SyntaxHighlighter language="javascript" style={docco}>
					{children}
				</SyntaxHighlighter>
			</div>
		);
	}
	
	export default CodeWrite;`;
	return (
		<div className="bg-black">
			<CodeWrite children={code} />
		</div>
	);
}

export default CodeDetail;
