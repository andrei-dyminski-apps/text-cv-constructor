import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Experience = {
  period: string;
  location: string;
  company: string;
  position: string;
  responsibilities: string[];
};

export const data = {
  personal: {
    name: 'Andrei Dyminski',
    position: 'Senior Frontend Engineer',
  },
  contacts: {
    linkedin: 'https://linkedin.com/in/andrei-dyminski-4a9508202',
    github: 'https://github.com/andrei-dyminski-apps',
    email: 'mailto:andrei.dyminski@gmail.com',
    phone: 'tel:+48 573 098 898',
    location: 'Poland, Bialystok',
  },
  employment: ['Full-time', 'Remote work'],
  languages: {
    russian: 6,
    english: 4,
  },
  skills: {
    core: {
      'Programming Languages': ['HTML5, CSS3, JavaScript (ES6+), TypeScript'],
      'Frameworks and Libraries': [
        'Vue, Vuex, Vue Router, Pinia, Nuxt, TanStack Query',
        'React, Redux, React Router, Next, TanStack Query',
      ],
    },
    extra: {
      'Build tools': ['Webpack', 'Gulp', 'Grunt', 'Vite', 'Rollup'],
      'Style tools': ['Tailwindcss', 'Sass', 'Less'],
      'Auto testing tools': ['Cypress', 'Jest', 'Vitest', 'Playwright'],
      UIKit: ['Element plus', 'Vuetify', 'Antd', 'Nuxt UI', 'Radix UI'],
      Backend: [
        'Node',
        'Express',
        'Joi',
        'JWT',
        'Nest.js',
        'Prisma',
        'SQL',
        'Python',
      ],
      'CI/CD': ['Docker', 'Vercel', 'GitHub Actions'],
      CMS: [
        '1С-Bitrix',
        'Strapi',
        'Supabase',
        'Postgres',
        'Directus',
        'Wordpress',
      ],
      Others: ['Axios', 'REST-API', 'JQuery', 'Bootstrap'],
    },
  },
  summary: `
    I am a results-oriented Front-End Engineer with more than 8 years of experience in developing and optimizing high-performance web applications.
    <div class="my-1.5"/>
    Passionate about continuous learning and professional growth, I am committed to exceeding expectations through excellence in development, communication, and collaboration. My ability to work effectively with teams ensures successful project completion on time and within budget.
    <div class="my-1.5"/>
    I have experience providing code review and mentoring junior developers, helping them improve their technical skills and solve problems.
    <div class="my-1.5"/>
    I have a proven track record of delivering measurable results, including:
    <div class="my-1.5"/>
  `,
  achievements: [
    'Optimized performance, reducing page load speed by 30% and significantly boosting conversion rates.',
    'Implemented testing systems using Jest, Vitest, and Cypress, achieving a 35% reduction in bugs and enhancing software reliability.',
    'Developed and streamlined CI/CD processes using Vercel and GitHub Actions, cutting deployment time by 40%.',
  ],
  experience: [
    {
      period: '09.2022 — now',
      location: 'Poland, Warsaw',
      company: 'SWAG 42',
      position: 'Senior Full Stack Engineer',
      responsibilities: [
        'Building and refactoring web applications using Vue.js, Pinia, Vue Router, Nuxt, TanStack Query.',
        'Building and refactoring web applications using React, Next.js, Redux, TanStack Query.',
        'Developing and maintaining a scalable TypeScript codebase, ensuring type safety and minimizing runtime errors.',
        'Developing backend REST APIs using Node.js, Express.js, Supabase.js, Joi.js, and Vitest.js.',
        'Implementing unit tests with Jest.js, integration tests with Vitest, and end-to-end (E2E) tests using Cypress.js.',
        'Integrating and managing CMS solutions such as Supabase, Strapi, and Directus.',
        'Implementing responsive, adaptive, and cross-browser-compatible layouts.',
      ],
    },
    {
      period: '12.2021 — 08.2022',
      location: 'Belarus, Minsk',
      company: 'Imedia Solutions',
      position: 'Senior Frontend Engineer',
      responsibilities: [
        'Building and refactoring web applications using Vue.js, Vuex, Vue Router, Nuxt, TanStack Query.',
        'Developing and maintaining a scalable TypeScript codebase, ensuring type safety and minimizing runtime errors.',
        'Implementing unit tests using Jest.js and end-to-end (E2E) tests with Playwright.js.',
        'Working with REST APIs and Server-Side Rendering (SSR).',
        'Implementing responsive, adaptive, and cross-browser-compatible layouts.',
        'Refactoring existing codebases to improve maintainability and efficiency.',
      ],
    },
    {
      period: '07.2017 — 11.2021',
      location: 'Belarus, Minsk',
      company: 'New site',
      position: 'Middle Frontend Engineer',
      responsibilities: [
        'Building and refactoring web applications using Vue.js, Pinia, Vue Router, and Nuxt.',
        'Building and refactoring web applications using React, Next.js, Redux, and React Query.',
        'Developing and maintaining a scalable TypeScript codebase, ensuring type safety and minimizing runtime errors.',
        'Creating website layouts and templates for the 1C-Bitrix CMS.',
        'Implementing responsive, cross-browser-compatible user interfaces.',
        'Refactoring existing codebases to improve maintainability and efficiency.',
      ],
    },
  ],
};

type Data = typeof data;

type ExtraSkills = Data['skills']['extra'];
type ExtraSkillKeys = keyof ExtraSkills;

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
    react: false,
    vue: true,
  });
  const activeCoreSkills = Object.entries(coreSkills)
    .filter(([_, status]) => status)
    .map(([skill]) => skill);

  const [extraSkills, setExtraSkills] = useState<Record<string, boolean>>(() =>
    Object.entries(data.skills.extra).reduce(
      (acc, [_, items]) => {
        items.forEach((item) => {
          acc[item] = false;
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
