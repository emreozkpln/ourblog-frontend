import React from "react";
import Image from "next/image";
import ege from "@/components/iamge/ege.jpg";
import emre from "@/components/iamge/emre.jpg";
import Header from "@/components/header";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai"
import Link from "next/link";

export function generateMetadata() {
	return {
		title: "Contact with writers now !",
		description: "Contact with Emre Ozkaplan and Ege Akay. We are writer and site owner. We can provide services by working freelance for you.",
        robots: "index, follow",
	}
}

function Contact() {

	return (
		<div className="w-full bg-gray-200 flex flex-col space-y-14">
			<Header />
			<div className="px-4 md:px-40 flex flex-col space-y-20 pb-20 text-white">
				<div className="sm:w-full shadow-2xl shadow-gray-600 rounded-xl bg-gradient-to-r from-color3 via-color2 to-color1 flex flex-col space-y-9 md:space-y-0 md:grid md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-6 sm:p-12">
					<div className="flex items-center justify-center">
						<Image src={ege} alt="Photo by Ege Akay" className=" w-40 md:w-80 h-40 md:h-80 shadow-2xl shadow-black rounded-full" />
					</div>
					<div className="flex flex-col space-y-10 row-start-2 md:row-start-2 lg:row-start-1">
						<h1 className="text-color1 font-semibold bg-clip-text text-xl md:text-2xl">I am a Full-Stack Developer</h1>
						<h2 className="text-2xl md:text-4xl font-medium text-color1">I AM EGE AKAY</h2>
						<p className="text-lg leading-7 text-justify items-center">Hello ! I'm Ege Akay. I am keen on emerging technologies; I am a software developer who also uses and develops Front-end, Back-end and Mobile applications using cloud technologies. I like to develop complex projects and automation projects by creating "microservices". I would be happy to work with you on such projects. Kind regards.</p>
						<div className="flex space-x-5 md:space-y-0 items-center justify-center md:justify-start flex-row">
							<a href="mailto:egeakay68@gmail.com" className="flex p-3 px-2 space-y-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center">Contact Me</a>
							<div className="flex space-x-5 items-center justify-center">
								<Link href="https://github.com/BestSuperUser"><AiOutlineGithub size={30} /></Link>
								<Link href="https://instagram.com/ege.akay_35.5?igshid=OGQ5ZDc2ODk2ZA=="><AiOutlineInstagram size={30} /></Link>
							</div>
						</div>
					</div>
				</div>
				<div className="sm:w-full shadow-2xl shadow-gray-600 rounded-xl bg-gradient-to-r from-color3 via-color2 to-color1 flex flex-col space-y-9 md:space-y-0 md:grid md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-6 sm:p-12">
					<div className="flex items-center justify-center row-start-1">
						<Image src={emre} alt="Photo by Emre Özkaplan" className=" w-40 md:w-80 h-40 md:h-80 shadow-2xl shadow-black rounded-full" />
					</div>
					<div className="flex flex-col space-y-10 row-start-2 md:row-start-2 lg:row-start-1">
						<h1 className="text-color1 font-semibold bg-clip-text text-xl md:text-2xl">I am a Frontend Developer</h1>
						<h2 className="text-2xl md:text-4xl font-medium text-color1">I AM EMRE ÖZKAPLAN</h2>
						<p className="text-lg leading-7 text-justify items-center">Hello! I am Emre Özkaplan. I am currently a senior student at Fırat University Software Engineering. I want to energize myself as a web developer and become a FULL STACK DEVELOPER.
							I am responsible, motivating and prone to team relations. I have strong project management, communication skills and problem solving skills. I look forward to your communication with them.
							Thank you!</p>
						<div className="flex space-x-5 md:space-y-0 items-center justify-center md:justify-end flex-row">
							<div className="flex space-x-5 items-center justify-center">
								<Link href="https://www.linkedin.com/in/emre-%C3%B6zkaplan-23aa65215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPfGKO96LSq2Bf0y%2B%2FKBUmw%3D%3D"><AiFillLinkedin size={30} /></Link>
								<Link href="https://github.com/emreozkpln"><AiOutlineGithub size={30} /></Link>
							</div>
							<a href="mailto:ozkaplanemre1@gmail.com" className="flex p-3 px-2 space-y-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center">Contact Me</a>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}

export default Contact;
