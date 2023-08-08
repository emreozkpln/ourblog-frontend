import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-20 py-8 w-full grid gap-10">
            <div className="items-center justify-between flex">
                <Link href="/" className="text-3xl text-white">LOGO</Link>
                <Link href="/en">EN</Link>
                <Link href="/">TR</Link>
                <Link href="/contact" className="bg-color3 border border-gray-100 text-white p-4 rounded-lg font-semibold">
                    Member Area
                </Link>
            </div>
        </div>
    )
}

export default Header