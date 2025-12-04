import type { Post } from "@/types/Post";
import { toReadable } from "@/utils/date";

interface PostHeaderProps {
  post: Post;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <section className="border-t-3 lg:border-t-6 border-l-8 lg:border-l-12 pt-2 pl-4 pb-5 bg-dark-purple border-black-purple text-white mt-10 mb-10">
      <h1 className="text-3xl lg:text-5xl">{post.title}</h1>
      <p className="text-sm lg:text-lg">
        Published {toReadable(post.published_at)} by <i>{post.author}</i>
      </p>
      <span className="text-sm lg:text-lg opacity-75">
        #<i>{post.topic}</i>
      </span>
    </section>
  );
};

export default PostHeader;
