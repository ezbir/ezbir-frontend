import { NextUIProvider } from "@nextui-org/react"
import Navigation from "@/app-toolbox/navigation/Navigation"
import Footer from "@/app-toolbox/footer/Footer"

export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <NextUIProvider>
                <Navigation />
                <main className="min-h-screen">{children}</main>
                <Footer />
            </NextUIProvider>
        </>
    )
}
