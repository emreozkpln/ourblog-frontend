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
            }),
            credentials: "include"
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

export async function logout() {
    try {
        let CSRF = await fetch("http://localhost:8080/CSRF", {
            cache: "no-store",
            credentials: "include"
        })
        CSRF = await CSRF.json()
        CSRF = CSRF.csrfToken
        const res = await fetch(`http://localhost:8080/admin/logout`, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "_csrf" : CSRF
            },
            body: JSON.stringify({
                "_csrf" : CSRF 
            }),
            credentials: "include"
        })
        return "ok"
    } catch(err) {
        return "err"
    }
}

export async function createCategory(TR_title, TR_description, TR_slug, EN_title, EN_description, EN_slug){
    try{
        let CSRF = await fetch("http://localhost:8080/CSRF", {
            cache: "no-store",
            credentials: "include"
        })
        CSRF = await CSRF.json()
        CSRF = CSRF.csrfToken
        const res = await fetch(`http://localhost:8080/admin/category/create`, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "_csrf" : CSRF
            },
            body: JSON.stringify({
                "_csrf" : CSRF,
                TR_title,
                TR_description,
                TR_slug,
                EN_title,
                EN_description,
                EN_slug,
            }),
            credentials: "include"
        })
        if(res.status == 200) {
            return "ok"
        } else if(res.status == 400) {
            return "This category already exist with this slug"
        } else {
            return "err"
        }
    }
    catch(e) {
        return "err"
    }
}