import NotAuth from "@/components/admin/NotAuth";
import { validateAdmin } from "@/services/validateAdmin"

export default async function Page() {
    const res = await validateAdmin()
    console.log(res);
    if(res == 200) {
        return (
            <div>secured</div>
        )
    } else {
        return (
            <NotAuth/>
        )
    }
}