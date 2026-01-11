import { ExperienceList } from '~/components/main/experience-list';
import { Summary } from '~/components/main/summary';
import { Header } from '~/components/header/header';
import { Skills } from '~/components/main/skills';

export const Main = () => {
  return (
    <div className="relative flex flex-col gap-1 px-5 py-2">
      <Header />
      <Summary />
      <ExperienceList />
      <div className="absolute top-[300mm] left-0 w-full px-5">
        <Skills />
      </div>
    </div>
  );
};
