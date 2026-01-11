import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  type Data,
  data,
  type Experience,
  type ExtraSkillKeys,
  type ExtraSkills,
} from '~/data/resume';

type Options = Record<string, boolean>;

type DataContextType = {
  data: typeof data;
  coreSkills: Options;
  extraSkills: Options;
  selectedAllExtraSkills: boolean;
  toggleAllExtraSkills: (value: boolean) => void;
  setCoreSkills: Dispatch<SetStateAction<Options>>;
  setExtraSkills: Dispatch<SetStateAction<Options>>;
};

export const DataContext = createContext<DataContextType>({
  data,
  coreSkills: {},
  extraSkills: {},
  selectedAllExtraSkills: false,
  toggleAllExtraSkills: () => {},
  setCoreSkills: () => {},
  setExtraSkills: () => {},
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [coreSkills, setCoreSkills] = useState<Record<string, boolean>>({
    react: true,
    vue: true,
  });
  const activeCoreSkills = Object.entries(coreSkills)
    .filter(([_, status]) => status)
    .map(([skill]) => skill);

  const [extraSkills, setExtraSkills] = useState<Record<string, boolean>>(() =>
    Object.entries(data.skills.extra).reduce(
      (acc, [_, items]) => {
        items.forEach((item) => {
          acc[item] = true;
        });
        return acc;
      },
      {} as Record<string, boolean>
    )
  );

  const [selectedAllExtraSkills, setSelectedAllExtraSkills] = useState(
    Object.values(extraSkills).every(Boolean)
  );
  const toggleAllExtraSkills = (value: boolean) => {
    setExtraSkills(
      Object.fromEntries(
        Object.keys(extraSkills).map((skill) => [skill, value])
      )
    );
    setSelectedAllExtraSkills(value);
  };
  useEffect(() => {
    setSelectedAllExtraSkills(Object.values(extraSkills).every(Boolean));
  }, [extraSkills]);

  const filterByCoreSkills = (entries: string[]) => {
    const matches = entries.filter((entry) =>
      activeCoreSkills.some((skill) => entry.toLowerCase().includes(skill))
    );
    if (!matches.length) return entries;
    return entries.filter(
      (entry) =>
        !Object.keys(coreSkills).some((skill) =>
          entry.toLowerCase().includes(skill)
        ) ||
        activeCoreSkills.some((skill) => entry.toLowerCase().includes(skill))
    );
  };

  const filteredData = useMemo(() => {
    const result: Data = JSON.parse(JSON.stringify(data));

    result.skills.core['Frameworks and Libraries'] = filterByCoreSkills(
      result.skills.core['Frameworks and Libraries']
    );

    result.skills.extra = Object.entries(result.skills.extra).reduce(
      (acc, [key, items]) => {
        const skills = items.filter((skill) => extraSkills[skill]);
        if (skills.length) {
          acc[key as ExtraSkillKeys] = skills;
        }
        return acc;
      },
      {} as ExtraSkills
    );

    result.experience = result.experience.map((item: Experience) => ({
      ...item,
      responsibilities: filterByCoreSkills(item.responsibilities),
    }));

    return result;
  }, [coreSkills, extraSkills]);

  const value = useMemo(
    () => ({
      data: filteredData,
      coreSkills,
      extraSkills,
      selectedAllExtraSkills,
      toggleAllExtraSkills,
      setCoreSkills,
      setExtraSkills,
    }),
    [filteredData, coreSkills, extraSkills, selectedAllExtraSkills]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
