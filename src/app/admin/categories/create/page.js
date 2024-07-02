import Layout from "@/components/admin/Layout";
import NotAuth from "@/components/admin/NotAuth";
import { validateAdmin } from "@/services/validateAdmin"
import Form from "./form";

export default async function Page() {
    const res = await validateAdmin()
    if(res == 200) {
        return (
            <Layout>
                <div className="w-full h-screen flex items-center justify-center">
                    <div className="w-full max-w-xl bg-slate-100 mx-4 rounded-xl text-center">
                        <div className="text-3xl">Create Category</div>
                        <Form />
                    </div>
                </div>
            </Layout>
        )
    } else {
        return (
            <NotAuth/>
        )
    }
}