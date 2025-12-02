import type { Post } from "@/types/Post";
import { toReadable } from "@/utils/date";

interface PostHeaderProps {
  post: Post;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <section className="border-t-3 border-l-8 pt-2 pl-4 pb-5 bg-[#756AB6] border-black text-white mt-10 mb-2">
      <h1 className="text-3xl">{post.title}</h1>
      <p className="text-sm">
        Published {toReadable(post.published_at)} by <i>{post.author}</i>
      </p>
      <span className="text-sm opacity-75">
        #<i>{post.topic}</i>
      </span>
    </section>
  );
};

export default PostHeader;
