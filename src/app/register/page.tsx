import Image from "next/image"
import RegisterForm from "@/app-toolbox/auth/register-form/RegisterForm"

const RegisterPage: React.FC = () => {
    return (
        <div className="flex">
            <div className="w-3/4">
                <RegisterForm />
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

export default RegisterPage
