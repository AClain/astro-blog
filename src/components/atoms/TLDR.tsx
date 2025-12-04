interface TLDRProps {
  text: string;
}

const TLDR = ({ text }: TLDRProps) => {
  return (
    <section className="p-2 border-l-6 border-l-light-pink bg-mid-purple text-white flex gap-2">
      <h2 className="text-2xl lg:text-4xl font-light decoration-solid decoration-light-pink underline decoration-2">
        TL;DR
      </h2>
      <p>{text}</p>
    </section>
  );
};

export default TLDR;
