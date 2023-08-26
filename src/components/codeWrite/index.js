"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeWrite({ children, className }) {
	const [copy, setCopy] = useState(false);
	return (
		<div className={className}>
			<div className="bg-[#3a404d] rounded-md overflow-hidden">
				{copy ? (
					<div className="flex justify-between px-4 text-white text-xs items-center p-2">
						<p className="text-sm">Example code</p>
						<button className="py-1 inline-flex items-center space-x-1">Copied!</button>
					</div>
				) : (
					<div className="flex justify-between px-4 text-white text-xs items-center p-2">
						<p className="text-sm">Example code</p>
						<button
							className="py-1 inline-flex items-center space-x-1"
							onClick={() => {
								try {
									navigator.clipboard.writeText(children);
									setCopy(true);
									setTimeout(() => {
										setCopy(false);
									}, 3000);
								} catch (err) {}
							}}
						>
							Copy code
						</button>
					</div>
				)}
				<SyntaxHighlighter
					style={atomOneDark}
					customStyle={{
						padding: "15px",
					}}
				>
					{children}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}

export default CodeWrite;
