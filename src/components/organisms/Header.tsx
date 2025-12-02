import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="p-4 bg-[#756AB6] flex flex-col gap-3">
      <section>
        <h1 className="text-4xl text-pink-100 uppercase">Walls</h1>
      </section>
      <section className="flex gap-4">
        <a href="/blog">
          <Button className="rounded-none h-8 px-5">Blog</Button>
        </a>
        <a href="/team">
          <Button className="rounded-none h-8 px-5">Team</Button>
        </a>
        <a href="/work-with-us">
          <Button className="rounded-none h-8 px-5">Work with us</Button>
        </a>
      </section>
    </header>
  );
};

export default Header;
