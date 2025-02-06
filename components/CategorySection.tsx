import type { KnowledgeSubCategory } from "@/types";
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
        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold bg-primary p-3 text-primary-foreground">
                    {category}
                </h2>
                {/* <Button variant="link">View All</Button> */}
            </div>

            {Object.keys(data).map((subCategory) => (
                <div key={subCategory} className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 ">
                        {subCategory}
                    </h3>
                    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
                        {data[subCategory].map((item, i) => (
                            <ItemCard key={item.name + i} item={item} />
                        ))}
                    </div>
                </div>
            ))}
            {/* <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
                {items.slice(0, 6).map((item) => (
                    <ItemCard key={item.name} item={item} />
                ))}
            </div> */}
        </div>
    );
}
