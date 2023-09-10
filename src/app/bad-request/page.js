import Link from "next/link";

export function generateMetadata() {
    return {
        title: "400 Bad Request.",
        robots: "index, follow",
    }
}

export default function BadRequest() {
    return (
        <div className='h-screen w-screen flex items-center justify-center flex-col space-y-4'>
            <div className='text-9xl font-semibold text-gray-700'>400</div>
            <div className='text-3xl font-medium'>Bad Request</div>
            <div className='flex justify-center space-x-5'>
                <Link className='bg-slate-800 text-white flex justify-center p-2 rounded-xl shadow-xl w-28' href="/en">Homepage</Link>
                <Link className='bg-slate-800 text-white flex justify-center p-2 rounded-xl shadow-xl w-28' href="/">Anasayfa</Link>
            </div>
        </div>
    )
}