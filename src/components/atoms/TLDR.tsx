interface TLDRProps {
  text: string;
}

const TLDR = ({ text }: TLDRProps) => {
  return (
    <section className="p-2 border-l-6 border-l-[#E0AED0] bg-[#AC87C5] text-white flex gap-2">
      <h2 className="text-2xl lg:text-4xl font-light decoration-solid decoration-[#E0AED0] underline decoration-2">
        TL;DR
      </h2>
      <p>{text}</p>
    </section>
  );
};

export default TLDR;
