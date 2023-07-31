import React from "react";
import Image from "next/image";
import dag from "@/components/iamge/wp8734526.webp";
import emre from "@/components/iamge/1668452923547.jpeg";

function Contact() {
	return (
		<div className="w-full h-full bg-contact">
			<div className="px-40 flex flex-col gap-14">
				<div className="shadow-xl border rounded-md border-contact-secondary bg-contact-secondary grid grid-cols-2 grid-rows-1 p-12 gap-7">
					<div className="flex flex-col gap-10 text-white">
						<h2 className="text-xl font-light">I AM EGE AKAY</h2>
						<h1 class="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text text-4xl">I am a Backend Developer</h1>
						<p className="text-sm leading-7">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.</p>
						<button className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 p-2 w-40">Contact Me</button>
					</div>
					<div className="flex items-center justify-center">
						<Image src={emre} className="w-80 h-80 shadow-2xl shadow-black mr-8 rounded-full" />
					</div>
				</div>
				<div className="shadow-xl border rounded-md border-contact-secondary bg-contact-secondary grid grid-cols-2 p-12 gap-7">
					<div className="flex items-center justify-center">
						<Image src={emre} className="w-80 h-80 shadow-2xl shadow-black mr-8 rounded-full" />
					</div>
					<div className="flex flex-col items-end gap-10 text-white">
						<h2 className="text-xl font-light">I AM EMRE ÖZKAPLAN</h2>
						<h1 class="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text text-4xl">I am a Frontend Developer</h1>
						<p className="text-sm leading-7 text-justify items-center">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.</p>
						<button className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 p-2 w-40">Contact Me</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
