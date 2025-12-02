import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post } from "@/types/Post";
import { toReadable } from "@/utils/date";
import type { MarkdownInstance } from "astro";
import { Button } from "../ui/button";

interface PostCardProps {
  instance: MarkdownInstance<Post>;
}

const PostCard = ({ instance }: PostCardProps) => {
  const { frontmatter: post } = instance;

  return (
    <Card className="p-4 flex flex-col gap-2 text-pink-50 bg-[#756AB6] w-full">
      <CardHeader className="flex justify-between">
        <div className="bg-pink-50 text-black border-2 border-fuchsia-300 px-3 text-sm">
          {post.topic.toUpperCase()}
        </div>
        <span>{toReadable(post.published_at)}</span>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">{post.title}</CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <a href={instance.url}>
          <Button className="uppercase font-bold w-fit">Read more</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
