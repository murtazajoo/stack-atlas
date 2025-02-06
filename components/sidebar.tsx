import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { KnowledgeData } from "@/types";

interface SidebarProps {
    data: KnowledgeData;
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
}

export default function Sidebar({
    data,
    selectedCategories,
    setSelectedCategories,
}: SidebarProps) {
    const toggleCategory = (categoryId: string) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(
                selectedCategories.filter((id) => id !== categoryId)
            );
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };

    return (
        <div className="min-w-80 border-t border-r  shadow-md max-h-screen sticky top-0 overflow-y-auto z-20 bg-background">
            <div className="flex justify-between bg-background items-center p-4 sticky top-0  border-b">
                <h2 className="text-lg font-semibold   ">Filter Categories</h2>
                <Button
                    variant="link"
                    size={"sm"}
                    onClick={() => setSelectedCategories([])}
                >
                    Clear All
                </Button>
            </div>
            <div className="p-4 z-20">
                {categories.sort().map((category) => (
                    <div
                        key={category}
                        className="flex items-center space-x-2 mb-2 "
                    >
                        <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label htmlFor={category}>{category}</Label>
                    </div>
                ))}
            </div>
        </div>
    );
}
