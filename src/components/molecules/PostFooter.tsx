import type { Post } from "@/types/Post";

interface PostFooterProps {
  post: Post;
}

const PostFooter = ({ post }: PostFooterProps) => {
  return (
    <section className="border-b-3 lg:border-b-6 border-r-8 lg:border-r-12 pt-2 px-8 md:px-12 lg:px-48 xl:px-92 pb-5 bg-dark-purple border-black-purple text-white flex justify-between mb-10 mt-10">
      <p>The journey continues ...</p>
      <div>
        {post.next && (
          <p>
            <a href={post.next}>Next part</a>
          </p>
        )}
        {post.previous && (
          <p>
            <a href={post.previous}>Previous part</a>
          </p>
        )}
        <p>
          <a href={`/tags/${post.tags[0]}`}>Similar posts</a>
        </p>
      </div>
    </section>
  );
};

export default PostFooter;
