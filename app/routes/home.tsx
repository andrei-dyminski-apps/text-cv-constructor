import type { Route } from './+types/home';
import { data as resumeData } from '~/data/resume';
import { Main } from '~/components/main/main';
import { Actions } from '~/components/actions/actions';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  const name = `CV ${resumeData.personal.name}`;

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
