import Image from "next/image";
import Link from "next/link";
import invalid from "@/components/iamge/invalidImage.png";

export default function RelationalPosts({post, key, lang, className, imageUrl}) {
    if (lang == "tr") {
        try {
            return (
                <div className={className} key={key}>
                    <Link href={`/tr/blog/${post.TR_Slug}`} className="w-full h-full">
                        <div className="flex flex-col items-center w-full">
                            <div className="flex flex-row items-center space-x-1 sm:space-x-4 border border-black w-full">
                                <Image
                                    src={imageUrl}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-[100px] sm:w-[150px] h-[100px]"
                                />
                                <div className="flex flex-col space-y-2">
                                    <h1 className="text-base font-normal md:text-lg md:font-semibold line-clamp-2 md:line-clamp-1 leading-4">{post.TR_title}</h1>
                                    <p className="text-sm font-light md:text-base line-clamp-2 leading-4">{post.TR_description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        } catch (err) {
            
        }
    } else {
        try {
            return (
                <div className={className} key={key}>
                    <Link href={`/en/blog/${post.EN_Slug}`} className="w-full h-full">
                        <div className="flex flex-col items-center w-full">
                            <div className="flex flex-row items-center space-x-1 sm:space-x-4  border border-black w-full">
                                <Image
                                    src={imageUrl}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-[100px] sm:w-[150px] h-[100px]"
                                />
                                <div className="flex flex-col space-y-2">
                                    <h1 className="text-base font-normal md:text-lg md:font-semibold line-clamp-2 md:line-clamp-1 leading-4">{post.EN_title}</h1>
                                    <p className="text-sm font-light md:text-base line-clamp-2 leading-4">{post.EN_description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        } catch (err) {
            
        }
    }
}