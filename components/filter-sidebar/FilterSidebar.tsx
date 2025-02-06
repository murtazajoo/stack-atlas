import CategoryItem from "@/components/filter-sidebar/CategoryItem";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarRail,
} from "@/components/ui/sidebar";
import { KnowledgeData } from "@/types";
import SidebarHeaderSection from "./SidebarHeaderSection";

interface SidebarProps {
    data: KnowledgeData;
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
}

export default function FilterSidebar({
    data,
    selectedCategories,
    setSelectedCategories,
}: SidebarProps) {
    const toggleCategory = (category: string, subCategory: string) => {
        const selectionKey = `${category}::${subCategory}`;
        setSelectedCategories(
            selectedCategories.includes(selectionKey)
                ? selectedCategories.filter((id) => id !== selectionKey)
                : [...selectedCategories, selectionKey]
        );
    };

    const toggleAllInCategory = (category: string) => {
        const allSubCats = Object.keys(data[category]).map(
            (sub) => `${category}::${sub}`
        );
        setSelectedCategories(
            allSubCats.every((cat) => selectedCategories.includes(cat))
                ? selectedCategories.filter((cat) => !allSubCats.includes(cat))
                : [...new Set([...selectedCategories, ...allSubCats])]
        );
    };

    return (
        <Sidebar className="bg-background">
            <SidebarHeaderSection
                setSelectedCategories={setSelectedCategories}
            />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel></SidebarGroupLabel>
                    <SidebarMenu>
                        {Object.entries(data).map(([category, subCats]) => (
                            <CategoryItem
                                key={category}
                                category={category}
                                subCats={subCats}
                                selectedCategories={selectedCategories}
                                toggleCategory={toggleCategory}
                                toggleAllInCategory={toggleAllInCategory}
                            />
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-sm text-gray-500">
                        Made with ❤️ by{" "}
                        <a
                            href="https://github.com/murtazajoo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary"
                        >
                            Murtaza Joo
                        </a>
                    </p>
                    <p
                        className="text-sm text-gray-500"
                        style={{ marginTop: "0.25rem" }}
                    >
                        Site under construction
                    </p>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
