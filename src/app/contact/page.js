
import React from "react";
import Image from "next/image";
import emre from "@/components/iamge/1668452923547.jpeg";
import Header from "@/components/header";

function Contact() {

	return (
		<div className="w-full bg-gray-200 flex flex-col space-y-14">
			<Header />
			<div className="px-20 md:px-40 flex flex-col space-y-20 pb-20 text-white">
				<div className="w-[300px] md:w-full shadow-2xl shadow-gray-600 rounded-xl bg-gradient-to-r from-color3 via-color2 to-color1 grid grid-cols-2 grid-rows-1 p-12 space-x-7">
					<div className="flex flex-col space-y-10">
						<h2 className="text-xl font-medium text-color1">I AM EGE AKAY</h2>
						<h1 className="text-color1 font-semibold bg-clip-text text-4xl">I am a Backend Developer</h1>
						<p className="text-lg leading-7 text-justify items-center">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.</p>
						<button className="flex p-3 px-2 space-y-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center">Contact Me</button>
					</div>
					<div className="flex items-center justify-center">
						<Image src={emre} alt="ege" className="hidden lg:block w-80 h-80 shadow-2xl shadow-black mr-8 rounded-full" />
					</div>
				</div>
				<div className="w-[300px] md:w-full shadow-2xl shadow-gray-600 rounded-xl bg-gradient-to-r from-color1 via-color2 to-color3 grid grid-cols-2 grid-rows-1 p-12 space-x-7">
					<div className="flex items-center justify-center">
						<Image src={emre} alt="emre" className="hidden lg:block w-80 h-80 shadow-2xl shadow-black mr-8 rounded-full" />
					</div>
					<div className="flex flex-col items-end space-y-10">
						<h2 className="text-xl font-medium text-color1">I AM EMRE ÖZKAPLAN</h2>
						<h1 className="text-color1 font-semibold bg-clip-text text-4xl">I am a Frontend Developer</h1>
						<p className="text-lg leading-7 text-justify items-center">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.</p>
						<button className="flex p-3 px-2 space-y-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center">Contact Me</button>
					</div>
				</div>
			</div>
		</div >
	);
}

export default Contact;
