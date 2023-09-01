import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="relative h-screen">
            <div className="absolute top-[calc(50%-70px)] left-[calc(50%-100px)] transform -translate-x-1/2 -translate-y-1/2">
                <div className='relative font-bold flex justify-center text-center'>
                    <h2 className='text-9xl font-light w-40'>OOPS!</h2>
                    <div className='absolute top-[90px] left-1/3 font-medium bg-white py-1 px-2 space-y-3'>
                        <p className='text-sm'>404 - THE PAGE CAN'T BE FOUND</p>
                        <div className='flex justify-center space-x-5'>
                            <Link className='bg-orange-400 text-white flex justify-center p-2 rounded-xl shadow-xl w-28' href="/en">Home</Link>
                            <Link className='bg-orange-400 text-white flex justify-center p-2 rounded-xl shadow-xl w-28' href="/">Anasayfa</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}