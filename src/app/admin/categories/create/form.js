"use client"

import { createCategory } from "@/services/adminRequests"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

const darkToastStyle = {
    borderRadius: '30px',
    background: '#333',
    color: '#fff',
}

export default function Form(){
    const router = useRouter()
    const submitForm = async () => {
        const res = await createCategory(TR_title, TR_description, TR_slug, EN_title, EN_description, EN_slug)
        if (res == "This category already exist with this slug") {
            toast("This category already exist with this slug",
                {
                icon: '❌',
                style: darkToastStyle
                }
            );
        } else if(res == "ok") {
            toast(`Category created successfuly.`,
                {
                icon: '✅',
                style: darkToastStyle
                }
            );
            router.push("/admin")
        } else {
            toast("Internal error",
                {
                icon: '❌',
                style: darkToastStyle
                }
            );
        }
    }

    const [TR_title, setTR_title] = useState("")
    const [TR_description, setTR_description] = useState("")
    const [TR_slug, setTR_slug] = useState("")
    const [EN_title, setEN_title] = useState("")
    const [EN_description, setEN_description] = useState("")
    const [EN_slug, setEN_slug] = useState("")
    
    return (
        <div className="w-full flex flex-col items-center">
            <div className="mt-4">TR</div>
            <input onChange={e => setTR_title(e.target.value)} className="max-w-xs w-full my-1 border border-neutral-900 rounded-lg h-9 pl-3" placeholder="Title" />
            <input onChange={e => setTR_description(e.target.value)} className="max-w-xs w-full my-1 border border-neutral-900 rounded-lg h-9 pl-3" placeholder="Description" />
            <input onChange={e => setTR_slug(e.target.value)} className="max-w-xs w-full my-1 border border-neutral-900 rounded-lg h-9 pl-3" placeholder="Slug" />
            <div className="mt-4">EN</div>
            <input onChange={e => setEN_title(e.target.value)} className="max-w-xs w-full my-1 border border-neutral-900 rounded-lg h-9 pl-3" placeholder="Title" />
            <input onChange={e => setEN_description(e.target.value)} className="max-w-xs w-full my-1 border border-neutral-900 rounded-lg h-9 pl-3" placeholder="Description" />
            <input onChange={e => setEN_slug(e.target.value)} className="max-w-xs w-full my-1 border border-neutral-900 rounded-lg h-9 pl-3" placeholder="Slug" />
            <button onClick={() => submitForm()} className="my-2 w-full max-w-xs rounded-xl h-8 bg-gradient-to-r from-color1 via-color2 to-color3">Create</button>
        </div>
    )
}