"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <>
            <Button
                suppressHydrationWarning
                variant="link"
                size={"sm"}
                onClick={() =>
                    setTheme(resolvedTheme === "light" ? "dark" : "light")
                }
            >
                {resolvedTheme || "system"}
            </Button>
        </>
    );
}
