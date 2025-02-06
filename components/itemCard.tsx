import { KnowledgeItem } from "@/types";

export default function ItemCard({ item }: { item: KnowledgeItem }) {
    return (
        <div className="bg-secondary overflow-hidden  shadow-sm  border border-secondary-foreground/10">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-secondary-foreground ">
                    <a
                        href={item.url}
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.name}
                    </a>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                    {item.name} {item.description}
                </p>
            </div>
        </div>
    );
}
