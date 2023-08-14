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
                            <div className="flex flex-row items-center gap-4 border border-black w-full">
                                <Image
                                    src={imageUrl}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ height: '100%', width: '150px' }} // optional
                                    objectFit="cover"
                                />
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-lg font-semibold line-clamp-1">{post.TR_title}</h1>
                                    <p className="text-base line-clamp-2">{post.TR_description}</p>
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
                            <div className="flex flex-row items-center gap-4 border border-black w-full">
                                <Image
                                    src={imageUrl}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ height: '100%', width: '150px' }} // optional
                                    objectFit="cover"
                                />
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-lg font-semibold line-clamp-1">{post.EN_title}</h1>
                                    <p className="text-base line-clamp-2">{post.EN_description}</p>
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