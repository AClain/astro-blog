import type { PropsWithChildren } from "react";

const InlineCode = ({ children }: PropsWithChildren) => {
  return (
    <pre className="bg-slate-700 rounded border border-black text-amber-500 px-1 inline lg:text-lg">
      <code>{children}</code>
    </pre>
  );
};

export default InlineCode;
