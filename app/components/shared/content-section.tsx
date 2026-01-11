import type { ReactNode } from 'react';

export const ContentSection = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <section className="">
      <h2 className="border-b border-gray-400 px-4 pb-2 text-center font-bold">
        {name}
      </h2>
      <div className="py-3 text-sm">{children}</div>
    </section>
  );
};
