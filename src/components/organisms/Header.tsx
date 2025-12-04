import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="p-4 bg-dark-purple flex flex-col gap-3 border-black-purple border-b-6">
      <section>
        <h1 className="text-4xl text-light-pink uppercase">Walls</h1>
      </section>
      <section className="flex gap-4">
        <a href="/blog">
          <Button className="rounded-none h-8 px-5 bg-mid-purple">Blog</Button>
        </a>
        <a href="/team">
          <Button className="rounded-none h-8 px-5 bg-mid-purple">Team</Button>
        </a>
        <a href="/work-with-us">
          <Button className="rounded-none h-8 px-5 bg-mid-purple">
            Work with us
          </Button>
        </a>
      </section>
    </header>
  );
};

export default Header;
