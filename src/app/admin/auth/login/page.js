"use client"
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import {login as adminLogin} from "@/services/adminRequests"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const darkToastStyle = {
    borderRadius: '30px',
    background: '#333',
    color: '#fff',
    }
    
    
function Login() {
    const router = useRouter()
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [isFetching, setIsFetching] = useState(false)

    const submitForm = async () => {
        if (isFetching === false) {
            setIsFetching(true)
            const res = await adminLogin(Username, Password)
            if(res?.msg === "Too many request.") {
                toast(`${res.resetSecond} saniye bekleyin.`,
                    {
                    icon: '⏳',
                    style: darkToastStyle
                    }
                );
            } else if(res === "Empty form.") {
                toast(`Formu doldurunuz.`,
                    {
                    icon: '❌',
                    style: darkToastStyle
                    }
                );
            } else if(res === "Wrong username and password."){
                toast(`Bilgiler yanlış.`,
                    {
                    icon: '❌',
                    style: darkToastStyle
                    }
                );
            } 
            else if(res === "Internal server error.") {
                toast(`Sunucu hatası.`,
                    {
                    icon: '❌',
                    style: darkToastStyle
                    }
                );
            } else if(res === "err") {
                toast(`Bilinmeyen hata.`,
                    {
                    icon: '❌',
                    style: darkToastStyle
                    }
                );
            } else if(res === "Ok.") {
                toast(`Giriş yapıldı.`,
                    {
                    icon: '✅',
                    style: darkToastStyle
                    }
                );
                router.push("/admin")
            }
            setIsFetching(false)
        }
    }

    return (
        <div className="bg-gradient-to-r from-color1 via-color2 to-color3 w-screen h-screen flex items-center justify-center ">
            <div className="max-w-lg w-full pt-7 pb-4 px-6 bg-white rounded-2xl">
                <div className="text-center font-medium font text-4xl mb-4">Login</div>
                <div className="flex items-center">
                    <FaUser size={28} color="gray" className="mr-3"/>
                    <input onChange={e => setUsername(e.target.value)} className="w-full h-12 border-zinc-400 rounded-lg border-2 pl-2 placeholder:text-gray-500" type="text" placeholder="Username"></input>
                </div>
                <div className="flex items-center mt-4">
                    <FaLock size={28} color="gray" className="mr-3"/>
                    <input type="password" onChange={e => setPassword(e.target.value)} className="w-full h-12 border-zinc-400 rounded-lg border-2 pl-2 placeholder:text-gray-500" placeholder="Password"></input>
                </div>
                <button onClick={() => submitForm()} className="bg-gradient-to-r from-color1 via-color2 to-color3 w-full mt-2 h-9 rounded-2xl text-white text-lg font-bold">Submit</button>
            </div>
        </div>
    )
}

export default Login;