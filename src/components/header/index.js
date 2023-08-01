import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 px-20 py-8 w-full grid gap-10">
            <div className="items-center justify-between flex">
                <Link href="/" className="text-3xl text-white">LOGO</Link>
                <Link href="/contact" className="bg-white text-purple-600 p-4 rounded-lg">
                    Member Area
                </Link>
            </div>
            <h1 className="text-2xl font-semibold text-white">Home/Blog</h1>
        </div>
    )
}

export default Header