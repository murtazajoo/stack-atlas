import { KnowledgeData, KnowledgeSubCategory } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const filterKnowledgeData = ({
    data,
    searchTerm,
    selectedCategories,
}: {
    data: KnowledgeData;
    searchTerm: string;
    selectedCategories: string[];
}) => {
    if (selectedCategories.length === 0 && searchTerm === "") {
        return data;
    }

    const filteredResults: KnowledgeData = {};

    Object.entries(data).forEach(([category, subCats]) => {
        const filteredSubCats: KnowledgeSubCategory = {};

        Object.entries(subCats).forEach(([subCategory, items]) => {
            const categoryKey = `${category}::${subCategory}`;

            if (
                !selectedCategories.includes(categoryKey) &&
                selectedCategories.length > 0
            ) {
                return;
            }

            const filteredItems = items.filter(
                (item) =>
                    searchTerm === "" ||
                    item.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    item.description
                        ?.toLowerCase()
                        .includes(searchTerm.toLowerCase())
            );

            if (filteredItems.length > 0) {
                filteredSubCats[subCategory] = filteredItems;
            }
        });

        if (Object.keys(filteredSubCats).length > 0) {
            filteredResults[category] = filteredSubCats;
        }
    });

    return filteredResults;
};

export async function parseMarkdownToJSON(): Promise<KnowledgeData> {
    try {
        const markdown = await fetch(
            "https://raw.githubusercontent.com/trimstray/the-book-of-secret-knowledge/refs/heads/master/README.md"
        ).then((res) => res.text());
        const lines = markdown.split("\n");
        const json: KnowledgeData = {};
        let currentCategory: string | null = null;
        let currentSubCategory: string | null = null;

        lines.forEach((line) => {
            const categoryMatch = line.match(/^#### (.+?) &nbsp;/);
            const subCategoryMatch = line.match(
                /^##### :black_small_square: (.+)/
            );
            const itemMatch = line.match(
                /<a href="(.+?)"><b>(.+?)<\/b><\/a> - (.+)/
            );

            if (categoryMatch) {
                currentCategory = categoryMatch[1];
                json[currentCategory] = {};
                currentSubCategory = null; // Reset subcategory when a new category is found
            } else if (subCategoryMatch) {
                currentSubCategory = subCategoryMatch[1];
                if (currentCategory) {
                    json[currentCategory][currentSubCategory] = [];
                }
            } else if (itemMatch && currentCategory && currentSubCategory) {
                const [, url, name, description] = itemMatch;
                json[currentCategory][currentSubCategory].push({
                    name,
                    url,
                    description,
                });
            }
        });

        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
        return {};
    }
}
