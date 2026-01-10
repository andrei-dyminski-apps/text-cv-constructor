import type { Route } from './+types/home';
import { useData } from '~/hooks/data';
import { Main } from '~/components/main/main';
import { Actions } from '~/components/actions/actions';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  const { data } = useData();
  const name = `CV ${data.personal.name}`;

  return [{ title: name }, { name: 'description', content: name }];
}

export default function Home() {
  return (
    <div className="mx-auto flex h-[594mm] w-[210mm] grow">
      <Actions />
      <Main />
    </div>
  );
}
