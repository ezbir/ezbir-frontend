import { NextUIProvider } from "@nextui-org/react"
import Navigation from "@/app-toolbox/navigation/Navigation"

export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <NextUIProvider>
                <Navigation />
                <main>{children}</main>
            </NextUIProvider>
        </>
    )
}
