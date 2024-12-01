"use client"

import { Button, Input } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons"
import { useState } from "react"
import Link from "next/link"

const RegisterForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => setIsVisible(!isVisible)

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className="h-screen flex justify-center ">
            <form
                className="flex flex-col justify-center items-center h-full gap-3 w-1/2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl">Реєстрація</h2>

                <div className="w-full gap-2 flex justify-between">
                    <Input
                        isInvalid={!!errors.email}
                        size="sm"
                        type="text"
                        label="Прізвище"
                        placeholder="Програміст"
                        {...register("lastName", {
                            required: "Це поле обов'язкове",
                        })}
                    />

                    <Input
                        isInvalid={!!errors.email}
                        size="sm"
                        type="text"
                        label="Імʼя"
                        placeholder="Коля"
                        {...register("firsName", {
                            required: "Це поле обов'язкове",
                        })}
                    />
                </div>
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

                <div className="w-full px-2">
                    <Link href="/login">Увійти</Link>
                </div>

                <Button
                    color="primary"
                    className="w-full"
                    size="md"
                    type="submit"
                >
                    Зареєструватися
                </Button>
            </form>
        </div>
    )
}

export default RegisterForm
