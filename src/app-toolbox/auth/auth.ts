// import { setCookie } from "nookies"
import api from "@/app-toolbox/api/api"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export interface LoginForm {
    email: string
    password: string
}

export const onLogin = (data: LoginForm, router: AppRouterInstance) => {
    api.post("auth/login", data).then((res) => {
        //todo auth.ts: set cookies after login

        // const token = res.data.access_token
        // setCookie(null, "token", token, {
        //     maxAge: 3 * 60 * 60,
        //     path: "/",
        // })

        router.push("/register")
    })
}
