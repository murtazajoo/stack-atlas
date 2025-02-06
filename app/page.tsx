"use client";
import DATA from "@/DATA/data.json";
import { useState } from "react";

import CategorySection from "@/components/CategorySection";
import Sidebar from "@/components/sidebar";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { KnowledgeData, KnowledgeSubCategory } from "@/types";

const knowledgeItems: KnowledgeData = DATA;

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const filterData = (data: KnowledgeData) => {
        const filteredResults: KnowledgeData = {};

        Object.entries(data).forEach(([mainCat, subCats]) => {
            const filteredSubCats: KnowledgeSubCategory = {};

            Object.entries(subCats).forEach(([subCat, items]) => {
                const filteredItems = items.filter(
                    (item) =>
                        (searchTerm === "" ||
                            item.name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()) ||
                            item.description
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())) &&
                        (selectedCategories.length === 0 ||
                            selectedCategories.includes(mainCat))
                );

                if (filteredItems.length > 0) {
                    filteredSubCats[subCat] = filteredItems;
                }
            });

            if (Object.keys(filteredSubCats).length > 0) {
                filteredResults[mainCat] = filteredSubCats;
            }
        });

        return { data: filteredResults };
    };

    const filteredData = filterData(DATA);

    return (
        <div className="min-h-screen ">
            <header className="  sticky top-0 bg-background  z-10 border-b">
                <div className="  py-4 px-4 sm:px-6 lg:px-8  flex items-center w-full justify-between">
                    <h1 className="text-3xl font-bold font-mono  w-full">
                        📚 Stack Atlas
                    </h1>
                    <div className="flex  sticky top-0  w-full items-center gap-2">
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
            <div className="flex ">
                <Sidebar
                    categories={
                        Object.keys(knowledgeItems) as unknown as string[]
                    }
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                />
                <main className="flex-1">
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <p>
                            &quot;Knowledge is powerful, be careful how you use
                            it!&quot;
                        </p>
                        <small>
                            Inspired from the{" "}
                            <a
                                href="https://github.com/trimstray/the-book-of-secret-knowledge"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-500"
                            >
                                The Book of Secret Knowledge
                            </a>
                        </small>

                        <div className="p-4">
                            {selectedCategories.length > 0 && (
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold">
                                        Selected Categories:
                                    </span>
                                    <div className="flex gap-2">
                                        {selectedCategories.map((category) => (
                                            <Button
                                                key={category}
                                                variant="secondary"
                                                size={"sm"}
                                                onClick={() =>
                                                    setSelectedCategories(
                                                        selectedCategories.filter(
                                                            (c) =>
                                                                c !== category
                                                        )
                                                    )
                                                }
                                            >
                                                {category}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="px-4 py-6 sm:px-0 ">
                            {Object.keys(filteredData.data).map((category) => (
                                <CategorySection
                                    key={category}
                                    data={filteredData.data[category]}
                                    category={category}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
