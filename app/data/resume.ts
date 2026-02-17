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
        'Vue.js, Vuex, Vue Router, Pinia, Nuxt, TanStack Query',
        'React, Redux, React Router, Next.js, TanStack Query',
      ],
    },
    extra: {
      'Build tools': ['Webpack', 'Gulp', 'Grunt', 'Vite', 'Rollup'],
      'Style tools': ['Tailwind CSS', 'Sass', 'Less'],
      'Auto testing tools': ['Cypress', 'Jest', 'Vitest', 'Playwright'],
      UIKit: ['Element Plus', 'Vuetify', 'Ant Design', 'Nuxt UI', 'Radix UI'],
      Backend: [
        'Node.js',
        'Express.js',
        'JWT',
        'NestJS',
        'Prisma',
        'SQL',
        'PostgreSQL',
        'Python',
      ],
      Validation: ['Joi', 'Zod', 'Valibot'],
      'CI/CD': ['Docker', 'Vercel', 'GitHub Actions'],
      CMS: ['1C-Bitrix', 'Strapi', 'Supabase', 'Directus', 'WordPress'],
      Others: ['Axios', 'REST API', 'jQuery', 'Bootstrap', 'Day.j'],
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
      period: '09/2022 - Present',
      location: 'Poland, Warsaw',
      company: 'SWAG 42',
      position: 'Senior Full Stack Engineer',
      responsibilities: [
        'Building and refactoring web applications using Vue.js, Pinia, Vue Router, Nuxt, TanStack Query.',
        'Building and refactoring web applications using React, Next.js, Redux, TanStack Query.',
        'Developing and maintaining a scalable TypeScript codebase, ensuring type safety and minimizing runtime errors.',
        'Leading code reviews and mentoring junior developers to improve code quality and team effectiveness.',
        'Designing and documenting REST APIs using Node.js, Express.js, Supabase, and Joi (validation/auth).',
        'Implementing unit tests with Jest, integration tests with Vitest, and end-to-end (E2E) tests using Cypress.',
        'Integrating and managing CMS solutions such as Supabase, Strapi, and Directus.',
        'Optimized critical user flows, reducing page load time by ~25%.',
        'Implementing responsive, adaptive, and cross-browser-compatible layouts.',
      ],
    },
    {
      period: '12/2021 - 08/2022',
      location: 'Belarus, Minsk',
      company: 'Imedia Solutions',
      position: 'Senior Frontend Engineer',
      responsibilities: [
        'Building and refactoring web applications using Vue.js, Vuex, Vue Router, Nuxt, TanStack Query.',
        'Conducting peer code reviews and sharing best practices to improve quality and consistency.',
        'Implementing unit tests using Jest and end-to-end (E2E) tests with Playwright.',
        'Working with REST APIs and Server-Side Rendering (SSR).',
        'Implementing responsive, adaptive, and cross-browser-compatible layouts.',
        'Improving maintainability of legacy codebases through modularization and cleanup.',
      ],
    },
    {
      period: '07/2017 - 11/2021',
      location: 'Belarus, Minsk',
      company: 'New site',
      position: 'Frontend Engineer (Junior -> Middle)',
      responsibilities: [
        'Building and refactoring web applications using Vue.js, Pinia, Vue Router, Nuxt.',
        'Building and refactoring web applications using React, Next.js, Redux, TanStack Query.',
        'Participating in code reviews and helping teammates resolve issues and improve implementations.',
        'Creating website layouts and templates for the 1C-Bitrix CMS.',
        'Implementing responsive, cross-browser-compatible user interfaces.',
        'Refactoring existing codebases to improve maintainability and efficiency.',
      ],
    },
  ],
};

export type Experience = {
  period: string;
  location: string;
  company: string;
  position: string;
  responsibilities: string[];
};

export type Data = typeof data;

export type ExtraSkills = Data['skills']['extra'];

export type ExtraSkillKeys = keyof ExtraSkills;
