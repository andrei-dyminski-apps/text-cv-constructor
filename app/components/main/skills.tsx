import { ContentSection } from '~/components/shared/content-section';
import { useData } from '~/hooks/data';

export const Skills = () => {
  const { data } = useData();
  const levels = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper Intermediate',
    'C1 Advanced',
    'C2 Proficient',
  ];

  const getLevel = (value: number) => levels[value - 1];

  return (
    <>
      <ContentSection name="Skills">
        {Object.entries(data.skills.core).map(([category, skills]) => (
          <p key={category} className="">
            <b className="">{category}: </b>
            {skills.join(', ')}
          </p>
        ))}
        {Object.entries(data.skills.extra).map(([category, skills]) => (
          <p key={category} className="">
            <b className="">{category}: </b>
            {skills.join(', ')}
          </p>
        ))}
        {/*<p className="">*/}
        {/*  <b className="">Languages:</b>*/}
        {/*</p>*/}
        {/*{Object.entries(data.languages).map(([key, value]) => (*/}
        {/*  <li key={key} className="flex items-start gap-2">*/}
        {/*    <div className="leading-3 capitalize">{key}</div>*/}
        {/*    <div className="ml-auto flex flex-col items-end gap-2">*/}
        {/*      <ul className="flex gap-2">*/}
        {/*        {levels.map((_, index) => (*/}
        {/*          <li*/}
        {/*            key={index}*/}
        {/*            className={`h-3.5 w-3.5 rounded-full bg-white ${index < value ? 'opacity-100' : 'opacity-25'}`}*/}
        {/*          />*/}
        {/*        ))}*/}
        {/*      </ul>*/}
        {/*      <div className="text-xs leading-none">{getLevel(value)}</div>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*))}*/}
      </ContentSection>
    </>
  );
};
