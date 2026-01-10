import { Contacts } from '~/components/header/contacts';
import { useData } from '~/hooks/data';

export const Header = () => {
  const { data } = useData();

  return (
    <header className="flex flex-col items-center gap-3">
      <h1 className="text-2xl leading-none font-bold">{data.personal.name}</h1>
      <h2 className="text-xl leading-none font-bold">
        {data.personal.position}
      </h2>
      <Contacts />
    </header>
  );
};
