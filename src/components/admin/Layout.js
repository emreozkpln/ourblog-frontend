import Navbar from "./Navbar";

export default function Layout({children}){
    return (
        <div className="flex min-h-screen w-screen bg-gradient-to-r from-color1 via-color2 to-color3">
            <Navbar/>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}