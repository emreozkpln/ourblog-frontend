
import React from "react";
import Image from "next/image";
import ege from "@/components/iamge/ege.jpg";
import emre from "@/components/iamge/emre.jpg";
import Header from "@/components/header";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai"
import Link from "next/link";

export async function generateMetadata(){
    return {
        title: "Şimdi yazarlarla iletişime geçin!",
        description: "Şimdi, Emre Özkaplan ve Ege Akay ile iletişime geçin. Biz yazarlarız ve site sahibiyiz. Sizin için freelance çalışarak hizmet verebiliriz.",
        robots: "index, follow",
    }
}

function Contact() {

    return (
        <div className="w-full bg-gray-200 flex flex-col space-y-14">
            <Header lang={"tr"} />
            <div className="px-4 md:px-40 flex flex-col space-y-20 pb-20 text-white">
                <div className="sm:w-full shadow-2xl shadow-gray-600 rounded-xl bg-gradient-to-r from-color3 via-color2 to-color1 flex flex-col space-y-9 md:space-y-0 md:grid md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-6 sm:p-12">
                    <div className="flex items-center justify-center">
                        <Image src={ege} alt="Ege Akay isimli yazarın fotoğrafı" className=" w-40 md:w-80 h-40 md:h-80 shadow-2xl shadow-black rounded-full" />
                    </div>
                    <div className="flex flex-col space-y-10 row-start-2 md:row-start-2 lg:row-start-1">
                        <h2 className="text-xl md:text-2xl font-medium text-color1">I am a Full-stack Developer</h2>
                        <h1 className="text-color1 font-semibold bg-clip-text text-2xl md:text-4xl">BEN EGE AKAY</h1>
                        <p className="text-lg leading-7 text-ellipsis items-center">Merhaba ! Ben Ege Akay. Ben gelişen teknolojilere meraklı; Front-end, Back-end ve Mobil uygulamaları cloud teknolojilerini de kullanan ve geliştiren bir yazılımcıyım. Karmaşık denilebilecek yapıdaki projeleri, otomasyon projelerini  "microservices"lar oluşturarak geliştirmeyi severim. Bu tarz projelerde sizle çalışmaktan mutluluk duyarım. Saygılarımla.</p>
                        <div className="flex space-x-5 md:space-y-0 items-center justify-center md:justify-start flex-row">
                            <a href="mailto:egeakay68@gmail.com" className="flex p-3 px-2 space-y-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center">İletişim kur</a>
                            <div className="flex space-x-5 items-center justify-center">
                                <Link href="https://github.com/BestSuperUser"><AiOutlineGithub size={30} /></Link>
                                <Link href="https://instagram.com/ege.akay_35.5?igshid=OGQ5ZDc2ODk2ZA=="><AiOutlineInstagram size={30} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:w-full shadow-2xl shadow-gray-600 rounded-xl bg-gradient-to-r from-color3 via-color2 to-color1 flex flex-col space-y-9 md:space-y-0 md:grid md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-6 sm:p-12">
                    <div className="flex items-center justify-center row-start-1">
                        <Image src={emre} alt="Emre Özkaplan isimli yazarın fotoğrafı" className=" w-40 md:w-80 h-40 md:h-80 shadow-2xl shadow-black rounded-full" />
                    </div>
                    <div className="flex flex-col space-y-10 row-start-2 md:row-start-2 lg:row-start-1">
                        <h2 className="text-xl md:text-2xl font-medium text-color1 lg:text-color3">I am a Frontend Developer</h2>
                        <h1 className="text-color1 lg:text-color3 font-semibold bg-clip-text text-2xl md:text-4xl">BEN EMRE ÖZKAPLAN</h1>
                        <p className="text-lg leading-7 text-ellipsis items-center">Merhaba! Ben Emre Özkaplan. Şuan Fırat Üniversitesi Yazılım Mühendisliği son sınıf öğrencisiyim.  Kendimi web developer olarak görüyorum ve FULL STACK DEVELOPER olmak istiyorum.
                            Sorumluluk sahibi, motive edici ve takım çalışmasına yatkın biriyim. Proje yönetimi, iletişim becerileri ve problem çözme yeteneklerim de güçlüdür. Sizlerle iletişim kurmayı dört gözle bekliyorum.
                            Teşekkür ederim!</p>
                        <div className="flex space-x-5 md:space-y-0 items-center justify-center md:justify-end flex-row">
                            <div className="flex space-x-5 items-center justify-center">
                                <Link href="https://www.linkedin.com/in/emre-%C3%B6zkaplan-23aa65215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPfGKO96LSq2Bf0y%2B%2FKBUmw%3D%3D"><AiFillLinkedin size={30} /></Link>
                                <Link href="https://github.com/emreozkpln"><AiOutlineGithub size={30} /></Link>
                            </div>
                            <a href="mailto:ozkaplanemre1@gmail.com" className="flex p-3 px-2 space-y-2 font-semibold bg-white text-color2 w-40 items-center rounded-3xl shadow-xl justify-center">İletişim kur</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Contact;
