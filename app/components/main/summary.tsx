import { useData } from '~/hooks/data';
import { List } from '~/components/list';
import { ContentSection } from '~/components/shared/content-section';

export const Summary = () => {
  const { data } = useData();
  return (
    <ContentSection name="Summary">
      <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
      <List items={data.achievements} />
    </ContentSection>
  );
};
