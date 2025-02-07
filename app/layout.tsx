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
    title: "Stack Atlas - Knowledge Base",
    description:
        "A comprehensive collection of knowledge for developers, engineers, and technology enthusiasts. This platform provides in-depth articles, tutorials, and resources to help you stay updated with the latest trends and advancements in the tech industry. Whether you are a beginner or an experienced professional, Stack Atlas offers valuable insights and practical guidance to enhance your skills and knowledge.",
    keywords: ["knowledge base", "developers", "engineers", "technology"],
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
