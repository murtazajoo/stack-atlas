import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: " Stack Atlas - Knowledge Base",
    description:
        "A collection of knowledge for developers, engineers, and more.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >
                <ThemeProvider
                    defaultTheme="system"
                    attribute="class"
                    enableSystem
                    disableTransitionOnChange
                >
                    {" "}
                    <SidebarProvider
                        style={
                            {
                                "--sidebar-width": "20rem",
                                "--sidebar-width-mobile": "20rem",
                            } as React.CSSProperties
                        }
                    >
                        {children}
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
