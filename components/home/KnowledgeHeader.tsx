import ThemeToggle from "../theme-toggle";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SidebarTrigger } from "../ui/sidebar";

export default function KnowledgeHeader({
    searchTerm,
    setSearchTerm,
}: {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}) {
    return (
        <header className="bg-background z-10 border-b sticky top-0">
            <div className="py-4 px-4 sm:px-6 lg:px-8 flex items-center w-full justify-between">
                <SidebarTrigger className="-ml-1 md:hidden" />
                <div className="flex w-full items-center gap-2">
                    <Input
                        type="text"
                        placeholder="Search knowledge..."
                        className="flex-grow mr-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button onClick={() => setSearchTerm("")}>Clear</Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
