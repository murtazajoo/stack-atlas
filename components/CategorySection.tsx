import type { KnowledgeSubCategory } from "@/types";
import Link from "next/link";
import ItemCard from "./itemCard";

interface CategorySectionProps {
    category: string;
    data: KnowledgeSubCategory;
}

export default function CategorySection({
    data,
    category,
}: CategorySectionProps) {
    if (!data) return null;

    return (
        <div className="   bg-background z-10  ">
            <div className="flex justify-between items-center mb-4 sticky top-0 pt-20 pb-4 bg-background ">
                <Link href={`#cat-${category}`}>
                    <h2
                        className="text-2xl font-semibold bg-primary p-3 text-primary-foreground "
                        id={"cat-" + category}
                    >
                        {category}
                    </h2>
                </Link>
            </div>
            <div>
                {Object.keys(data).map((subCategory) => (
                    <div key={subCategory} className="mb-4">
                        <h3 className="text-lg font-semibold mb-2 ">
                            {subCategory}
                        </h3>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {data[subCategory].map((item, i) => (
                                <ItemCard key={item.name + i} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
