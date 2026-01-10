import { List } from '~/components/list';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
};

export const ExperienceItem = ({
  company,
  position,
  period,
  location,
  responsibilities,
}: ExperienceItem) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-baseline gap-6">
        <h3 className="flex min-w-0 gap-1 font-bold">{position}</h3>
        <div className="ml-auto text-sm">
          <span className="italic">«{company}»</span> / {location} / {period}
        </div>
      </div>
      {!!responsibilities.length && <List items={responsibilities} />}
    </section>
  );
};
