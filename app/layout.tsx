// next
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// providers
import Providers from "./providers";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Weather App",
    description: "Created by ibrag1moff.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} bg-main bg-center bg-cover`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
