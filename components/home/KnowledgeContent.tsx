import { KnowledgeData } from "@/types";
import CategorySection from "../CategorySection";
import { Button } from "../ui/button";

export default function KnowledgeContent({
    total,
    loading,
    filteredData,
    selectedCategories,
    setSelectedCategories,
}: {
    total: number;
    loading: boolean;
    filteredData: KnowledgeData;
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
}) {
    return (
        <main className="flex-1">
            <div className="max-w-7xl mx-auto pt-6 sm:px-6 lg:px-8">
                <div className="border-b py-3 px-3 font-mono grid space-y-4">
                    <div className="bg-primary/30 p-2 mb-2 flex justify-between items-center">
                        <p className=" text-center flex gap-3 items-center uppercase">
                            A star makes a difference!
                            <iframe
                                src="https://ghbtns.com/github-btn.html?user=murtazajoo&repo=stack-atlas&type=star&count=true&size=large"
                                width="170"
                                height="30"
                                title="GitHub"
                            ></iframe>
                        </p>
                        <Button variant="secondary" size="sm" asChild>
                            <a
                                className=" text-center flex gap-3 items-center uppercase"
                                href="https://buymeacoffee.com/joodev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📖 By me a Book
                            </a>
                        </Button>
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold">
                            Stack Atlas - Knowledge Base
                        </h1>
                        <p className="text-lg">
                            A comprehensive collection of knowledge for
                            developers, engineers, and technology enthusiasts.
                            This platform provides in-depth articles, tutorials,
                            and resources to help you stay updated with the
                            latest trends and advancements in the tech industry.
                            Whether you are a beginner or an experienced
                            professional, Stack Atlas offers valuable insights
                            and practical guidance to enhance your skills and
                            knowledge.
                        </p>
                    </div>

                    <p className="text-xl uppercase font-semibold">
                        <span className="text-primary text-5xl pr-1 ">
                            {total}
                        </span>
                        items of knowledge available as of now
                    </p>

                    <p className="mt-4">
                        &quot;Knowledge is powerful, be careful how you use
                        it!&quot;
                    </p>
                    <small>
                        Inspired from the{" "}
                        <a
                            href="https://github.com/trimstray/the-book-of-secret-knowledge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            The Book of Secret Knowledge
                        </a>
                    </small>
                </div>
                {selectedCategories.length > 0 && (
                    <div className="mt-4 flex gap-2">
                        <span className="text-sm font-semibold">
                            Selected Categories:
                        </span>
                        <div className="flex gap-2 flex-wrap">
                            {selectedCategories.map((category) => (
                                <Button
                                    key={category}
                                    variant="secondary"
                                    size="sm"
                                    onClick={() =>
                                        setSelectedCategories(
                                            selectedCategories.filter(
                                                (c) => c !== category
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

                {loading && (
                    <div className="flex justify-center items-center h-screen">
                        <p>Loading...</p>
                    </div>
                )}

                {Object.keys(filteredData).length === 0 && (
                    <div className="mt-6">
                        <p className="text-lg font-semibold">
                            No results found.
                        </p>
                    </div>
                )}

                <div className="mt-6">
                    {Object.entries(filteredData).map(([category, subcats]) => (
                        <CategorySection
                            key={category}
                            data={subcats}
                            category={category}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
