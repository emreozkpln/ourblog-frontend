import React from "react";
import { BsSearch } from "react-icons/bs";

function Header() {
	return (
		<div className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 px-20 py-8 w-full grid gap-7">
			<div className="items-center justify-between flex">
				<div className="text-3xl text-white">LOGO</div>
				<button className="bg-white text-purple-600 p-4 rounded-lg">Member Area</button>
			</div>
			<div className="items-center justify-between flex">
				<div className="text-xl text-white">Home/Blog</div>
				<div className="border-b border-gray-300 flex">
					<div class="relative border-b border-gray-500">
						<BsSearch size={20} class=" absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<input type="text" class="pl-9 border-none bg-transparent outline-none p-1 w-40 text-gray-400 placeholder:text-gray-400" placeholder="s e a r c h" />
					</div>
					<button className="text-purple-500 bg-white px-2 rounded-md">Go</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
