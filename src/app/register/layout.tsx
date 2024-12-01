import { NextUIProvider } from "@nextui-org/react"

export default function RegisterLayout({
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
