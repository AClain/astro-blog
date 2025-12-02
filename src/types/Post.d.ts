type Post = {
  slug: string;
  title: string;
  description: string;
  author: string;
  topic: string;
  tags: string[];
  published_at: string;
  next?: string;
  previous?: string;
};

export type { Post };
