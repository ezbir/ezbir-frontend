import LoginForm from "@/app-toolbox/auth/login-form/LoginForm"
import Image from "next/image"

const LoginPage: React.FC = () => {
    return (
        <div className="flex">
            <div className="w-3/4">
                <LoginForm />
            </div>

            <div className="relative w-1/2 h-screen">
                <Image
                    src="/img/login-bg.png"
                    alt="Forest"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
            </div>
        </div>
    )
}

export default LoginPage
