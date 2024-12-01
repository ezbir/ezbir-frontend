//todo api.ts: return back

import axios from "axios"
// import { parseCookies, destroyCookie } from "nookies"

const api = axios.create({
    baseURL: "http://localhost:8080/api",
})

// api.interceptors.request.use(
//     (config) => {
//         const cookies = parseCookies()
//         const token = cookies.token
//
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`
//         }
//
//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )
//
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         const { response } = error
//
//         if (response?.status === 401) {
//             console.error("Session expired. Please log in again.")
//
//             destroyCookie(null, "token", { path: "/" })
//
//             if (response?.config?.url !== "/auth/login") {
//                 window.location.href = "/login"
//             }
//         } else {
//             const errorMessage =
//                 response?.data?.message || "Something went wrong!"
//             console.error(errorMessage)
//         }
//
//         return Promise.reject(error)
//     }
// )

export default api
