"use client"
import { Button, Input } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons"
import { useCallback, useState } from "react"
import Link from "next/link"
import { onLogin, LoginForm } from "@/app-toolbox/auth/auth"
import { useRouter } from "next/navigation"

const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>()
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => setIsVisible(!isVisible)

    const router = useRouter()

    const onSubmit = useCallback(
        (data: LoginForm) => {
            onLogin(data, router)
        },
        [router]
    )

    return (
        <div className="h-screen flex justify-center ">
            <form
                className="flex flex-col justify-center items-center h-full gap-3 w-1/2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl">Авторизація</h2>
                <Button className="w-full" size="md" type="submit">
                    Увійти з Дія.Підпис
                </Button>
                <p>Або</p>
                <Input
                    isInvalid={!!errors.email}
                    size="sm"
                    type="email"
                    label="Пошта"
                    placeholder="test@example.com"
                    {...register("email", {
                        required: "Це поле обов'язкове",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Некоректний email",
                        },
                    })}
                />
                <Input
                    isInvalid={!!errors.password}
                    size="sm"
                    type={isVisible ? "text" : "password"}
                    label="Пароль"
                    placeholder="password"
                    endContent={
                        <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                            aria-label="toggle password visibility"
                        >
                            {isVisible ? (
                                <EyeSlashFilledIcon />
                            ) : (
                                <EyeFilledIcon />
                            )}
                        </button>
                    }
                    {...register("password", {
                        required: "Це поле обов'язкове",
                        minLength: 3,
                    })}
                />

                <div className="w-full flex justify-between px-2">
                    <Link href="/forgotpassword">Забули пароль?</Link>
                    <Link href="/register">Зареєструватися</Link>
                </div>

                <Button
                    color="primary"
                    className="w-full"
                    size="md"
                    type="submit"
                >
                    Увійти
                </Button>
            </form>
        </div>
    )
}

export default LoginForm
