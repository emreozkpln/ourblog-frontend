import { cookies } from 'next/headers'

export async function validateAdmin() {
    try {
        const jwt = cookies().get("JWT")
        const res = await fetch("http://localhost:8080/admin/validate", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                JWT: jwt
            }),
            cache: "no-store"
        })
        return res.status
    } catch (err) {
        return 400
    }
}