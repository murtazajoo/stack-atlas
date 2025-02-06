import { Checkbox } from "@/components/ui/checkbox";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import {
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { KnowledgeSubCategory } from "@/types";
import { ChevronRight } from "lucide-react";
const CategoryItem = ({
    category,
    subCats,
    selectedCategories,
    toggleCategory,
    toggleAllInCategory,
}: {
    category: string;
    subCats: KnowledgeSubCategory;
    selectedCategories: string[];
    toggleCategory: (category: string, subCategory: string) => void;
    toggleAllInCategory: (category: string) => void;
}) => (
    <Collapsible key={category} asChild className="group/collapsible">
        <SidebarMenuItem>
            <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={category}>
                    {category}
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <SidebarMenuSub>
                    <SidebarMenuSubItem
                        onClick={() => toggleAllInCategory(category)}
                        className="flex items-center gap-1 p-0.5 hover:bg-accent rounded-md cursor-pointer"
                    >
                        <Checkbox
                            checked={Object.keys(subCats).every((sub) =>
                                selectedCategories.includes(
                                    `${category}::${sub}`
                                )
                            )}
                            onCheckedChange={() =>
                                toggleAllInCategory(category)
                            }
                        />
                        <Label className="text-sm">All {category}</Label>
                    </SidebarMenuSubItem>
                    {Object.keys(subCats).map((subCategory) => (
                        <SidebarMenuSubItem
                            key={subCategory}
                            onClick={() =>
                                toggleCategory(category, subCategory)
                            }
                            className="flex items-center gap-1 p-0.5 hover:bg-accent rounded-md cursor-pointer"
                        >
                            <Checkbox
                                checked={selectedCategories.includes(
                                    `${category}::${subCategory}`
                                )}
                                onCheckedChange={() =>
                                    toggleCategory(category, subCategory)
                                }
                            />
                            <Label className="text-sm cursor-pointer">
                                {subCategory}
                            </Label>
                        </SidebarMenuSubItem>
                    ))}
                </SidebarMenuSub>
            </CollapsibleContent>
        </SidebarMenuItem>
    </Collapsible>
);

export default CategoryItem;
