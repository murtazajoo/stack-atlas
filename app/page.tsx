"use client";
import { useEffect, useState } from "react";

import KnowledgeContent from "@/components/home/KnowledgeContent";
import KnowledgeHeader from "@/components/home/KnowledgeHeader";

import FilterSidebar from "@/components/filter-sidebar/FilterSidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { filterKnowledgeData, parseMarkdownToJSON } from "@/lib/utils";
import { KnowledgeData } from "@/types";

export default function Home() {
    const [knowledgeItems, setKnowledgeItems] = useState<KnowledgeData>({});
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        parseMarkdownToJSON()
            .then(setKnowledgeItems)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const filteredData = filterKnowledgeData({
        data: knowledgeItems,
        searchTerm,
        selectedCategories,
    });

    return (
        <>
            <FilterSidebar
                data={knowledgeItems}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
            />
            <SidebarInset className="relative min-h-screen">
                <KnowledgeHeader
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <KnowledgeContent
                    total={Object.values(knowledgeItems).reduce(
                        (acc, subCats) =>
                            acc +
                            Object.values(subCats).reduce(
                                (acc, items) => acc + items.length,
                                0
                            ),
                        0
                    )}
                    loading={loading}
                    filteredData={filteredData}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                />
            </SidebarInset>
        </>
    );
}
