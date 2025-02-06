export interface KnowledgeData {
    [key: string]: KnowledgeSubCategory;
}

export interface KnowledgeSubCategory {
    [category: string]: KnowledgeItem[];
}

export interface KnowledgeItem {
    name: string;
    description: string;
    url: string;
}
