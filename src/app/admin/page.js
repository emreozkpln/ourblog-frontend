import Layout from "@/components/admin/Layout";
import NotAuth from "@/components/admin/NotAuth";
import { validateAdmin } from "@/services/validateAdmin"

export default async function Page() {
    const res = await validateAdmin()
    if(res == 200) {
        return (
            <Layout>
                <div>secured</div>
            </Layout>
        )
    } else {
        return (
            <NotAuth/>
        )
    }
}