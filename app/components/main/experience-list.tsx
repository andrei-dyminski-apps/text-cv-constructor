import { useData } from '~/hooks/data';
import { ExperienceItem } from '~/components/main/experience-item';
import { ContentSection } from '~/components/shared/content-section';

export const ExperienceList = () => {
  const { data } = useData();
  return (
    <ContentSection name="Experience">
      <ul className="flex flex-col gap-4">
        {data.experience.map((item, index) => (
          <li key={index}>
            <ExperienceItem {...item} />
          </li>
        ))}
      </ul>
    </ContentSection>
  );
};
