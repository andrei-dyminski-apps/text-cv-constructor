import { useData } from '~/hooks/data';
import { SvgIcon } from '~/components/svg-icon';

export const Contacts = () => {
  const { data } = useData();
  return (
    <ul className="grid w-full grid-cols-2 gap-x-6">
      {Object.entries(data.contacts).map(([key, value]) => (
        <li key={key} className="flex w-full items-center gap-2">
          <SvgIcon name={key} className="h-4 w-4 fill-white" />
          {['github', 'linkedin', 'email', 'phone'].includes(key) ? (
            <a
              href={value.replace(/\s/g, '')}
              target="_blank"
              className="truncate hover:underline"
              rel="noreferrer"
            >
              {value.replace(/(mailto|tel):|https:\/\//g, '')}
            </a>
          ) : (
            <div className="truncate">{value}</div>
          )}
        </li>
      ))}
    </ul>
  );
};
