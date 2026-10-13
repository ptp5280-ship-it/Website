export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    meta_description: string;
    image: string | null;
    created_at: string;
    author: string;
    read_time_minutes: number | null;
    blog_categories: {
        name: string;
        slug: string;
    };
    content: string;
}

export interface PostImage {
    url: string;
    width: number;
    height: number;
    alt: string;
}
