import { Button } from "../ui/button";
import { SidebarHeader } from "../ui/sidebar";

const SidebarHeaderSection = ({
    setSelectedCategories,
}: {
    setSelectedCategories: (categories: string[]) => void;
}) => (
    <>
        <SidebarHeader className="border-b py-2 px-3">
            <h1 className="text-3xl font-bold font-mono w-full ">
                📚 StackAtlas
            </h1>
            <small>open-source knowledge</small>
        </SidebarHeader>
        <SidebarHeader className="p-0">
            <div className="flex justify-between bg-background items-center p-4 sticky top-0 border-b">
                <h2 className="text-lg font-semibold">Filter</h2>
                <Button
                    variant="link"
                    size="sm"
                    onClick={() => setSelectedCategories([])}
                >
                    Clear
                </Button>
            </div>
        </SidebarHeader>
    </>
);

export default SidebarHeaderSection;
