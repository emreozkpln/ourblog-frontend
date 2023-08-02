'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
    const pathname = usePathname()
    const newPath = pathname.split("/")
    return (
        <div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-20 py-8 w-full grid gap-10">
            <div className="items-center justify-between flex">
                <Link href="/" className="text-3xl text-white">LOGO</Link>
                <Link href="/contact" className="bg-color3 border border-gray-100 text-white p-4 rounded-lg font-semibold">
                    Member Area
                </Link>
            </div>
            <h1 className="text-2xl font-semibold text-white">{newPath[1] == "" ? "HOME" : newPath[1].toString().toUpperCase()}</h1>
        </div>
    )
}

export default Header