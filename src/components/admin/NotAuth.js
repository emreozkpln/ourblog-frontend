import Link from 'next/link'

export default function NotAuth() {
    return (
        <div className='h-screen w-screen flex items-center justify-center flex-col space-y-4'>
            <div className='text-9xl font-semibold text-gray-700'>401</div>
            <div className='text-3xl font-medium'>Not Authorized</div>
            <div className='flex justify-center space-x-5'>
                <Link className='bg-slate-800 text-white flex justify-center p-2 rounded-xl shadow-xl w-28' href="/admin/auth/login">Login</Link>
            </div>
        </div>
    )
}