import type { Post } from "@/types/Post";
import type { MarkdownInstance } from "astro";
import PostCard from "../molecules/PostCard";

interface PostListProps {
  instances: MarkdownInstance<Post>[];
}

const PostList = ({ instances }: PostListProps) => {
  return (
    <section className="flex flex-col gap-6">
      {instances.map((instance, i) => (
        <PostCard key={i} instance={instance} />
      ))}
    </section>
  );
};

export default PostList;
