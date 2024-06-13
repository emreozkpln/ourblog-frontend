export async function login(username, password) {
    try {
        const res = await fetch(`http://localhost:8080/admin/login`, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        if (res.status === 200) {
            return "Ok."
        } else if (res.status === 400){
            return "Empty form."
        } else if (res.status === 401) {
            return "Wrong username and password."
        } else if (res.status === 500){
            return "Internal server error."
        } else if (res.status === 429){
            const resetSecond = res.headers.get("Ratelimit-Reset")
            return {msg: "Too many request.", resetSecond}
        }
    } catch (err) {
        return "err"
    }
}