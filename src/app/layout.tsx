import "./globals.css"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="h-full text-sm">{children}</body>
        </html>
    )
}
