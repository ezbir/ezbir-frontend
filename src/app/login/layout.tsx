import { NextUIProvider } from "@nextui-org/react"
import Navigation from "@/app-toolbox/navigation/Navigation"

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <NextUIProvider>
                <main>{children}</main>
            </NextUIProvider>
        </>
    )
}
