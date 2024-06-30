"use client"

import { logout } from "@/services/adminRequests"
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
    const router = useRouter()
    const LogoutHandle = () => {
        logout().then(res => {
            if(res = "ok") {
                router.push("/")
            }
        })
    }

    return (
        <button onClick={LogoutHandle} className='mt-auto'>
            Logout
        </button>
    )
}