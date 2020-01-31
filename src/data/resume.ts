const sixtyfourlabs = require('../assets/images/64-labs-logo.png');
const medconnectlogo = require('../assets/images/medconnect-logo.png');
const sailboatstudios = require('../assets/images/sailboat-studios-logo.png');
const sdblogo = require('../assets/images/sdb-logo.png');

export interface Skill {
  skill: string;
  icon: string;
  link: string;
}

export const languages: Skill[] = [
  {
    skill: 'JavaScript',
    icon: 'devicon-javascript-plain',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    skill: 'TypeScript',
    icon: 'devicon-typescript-plain',
    link: 'https://www.typescriptlang.org/',
  },
  {
    skill: 'Node',
    icon: 'devicon-nodejs-plain',
    link: 'https://nodejs.org/en/',
  },
  {
    skill: 'REST',
    icon: '',
    link: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
  },
  {
    skill: 'GraphQL',
    icon: 'devicon-graphql-plain',
    link: 'https://graphql.org/',
  },
  // { skill: 'Dart', icon: 'devicon-go-plain', link: 'https://golang.org/' },
  { skill: 'Golang', icon: 'devicon-go-plain', link: 'https://golang.org/' },
  // {
  //   skill: 'Rust',
  //   icon: 'devicon-rust-plain',
  //   link: 'https://www.rust-lang.org/',
  // },
];

export const databases: Skill[] = [
  {
    skill: 'Postgres',
    icon: 'devicon-postgresql-plain',
    link: 'https://www.postgresql.org/',
  },
  {
    skill: 'MongoDB',
    icon: 'devicon-mongodb-plain',
    link: 'https://www.mongodb.com/',
  },
  {
    skill: 'DynamoDB',
    icon: 'devicon-mongodb-plain',
    link: 'https://aws.amazon.com/dynamodb/',
  },
];

export const frameworks: Skill[] = [
  {
    skill: 'Express',
    icon: 'devicon-express-original',
    link: 'https://expressjs.com/',
  },
  {
    skill: 'Hapi',
    icon: 'devicon-express-original',
    link: 'https://expressjs.com/',
  },
  {
    skill: 'Koa',
    icon: 'devicon-express-original',
    link: 'https://expressjs.com/',
  },
  {
    skill: 'React',
    icon: 'devicon-react-original',
    link: 'https://reactjs.org/',
  },
  {
    skill: 'React Native',
    icon: 'devicon-react-original',
    link: 'https://reactjs.org/',
  },
  {
    skill: 'Gatsby',
    icon: 'devicon-react-original',
    link: 'https://www.gatsbyjs.org/',
  },
  // {
  //   skill: 'Flutter',
  //   icon: 'devicon-react-original',
  //   link: 'https://reactjs.org/',
  // },
];

export const tools: Skill[] = [
  {
    skill: 'Webpack',
    icon: 'devicon-webpack-plain',
    link: 'https://webpack.js.org/',
  },
  { skill: 'Babel', icon: 'devicon-babel-plain', link: 'https://babeljs.io/' },
  {
    skill: 'Parcel',
    icon: 'devicon-parcel-plain',
    link: 'https://parceljs.org/',
  },
  {
    skill: 'Prettier',
    icon: 'devicon-prettier-plain',
    link: 'https://prettier.io/',
  },
];

export const devOps: Skill[] = [
  {
    skill: 'AWS',
    icon: 'devicon-amazonwebservices-original',
    link: 'https://aws.amazon.com/',
  },
  {
    skill: 'Google Cloud',
    icon: 'devicon-googlecloud-original',
    link: 'https://cloud.google.com/',
  },
  {
    skill: 'Docker',
    icon: 'devicon-docker-plain',
    link: 'https://www.docker.com/',
  },
];

export const jobs = [
  {
    logo: medconnectlogo,
    employer: 'Circadian Risk',
    title: 'Software Engineer',
    description: `
    <ul>
    </ul>
    `,
    fromDate: '08/2019',
    toDate: '02/2020',
    tags: [
      'Node',
      'React',
      'React Native',
      'TypeScript',
      'Postgres',
      'Sequelize',
    ],
  },
  {
    logo: medconnectlogo,
    employer: 'MedConnect',
    title: 'Full Stack Developer',
    description: `
    <ul>
      <li>Created an embedable chat widget via a CDN</li>
    </ul>
    `,
    fromDate: '06/2018',
    toDate: '12/2018',
    tags: ['Node', 'React', 'React Native', 'TypeScript', 'Postgres'],
  },
  {
    logo: sixtyfourlabs,
    employer: '64 Labs',
    title: 'Front End Developer',
    description: `
    <ul>
      <li>Part of a small team that built Pandora Jewelry’s mobile PWA within 7 weeks.</li>
      <li>Completed tasks assigned to me in Jira in a timely manner.</li>
      <li>Refactored components to be highly reusable and more performant.</li>
      <li>Jumped into configuration and build pipelines to help DX even more, including HMR, Prettier, and making sure webpack builds were appropriate for both local and production environments.</li>
      <li>Learned and used a new framework (Mobify) + jQuery within a week of starting, and continually learned as I went along.</li>
    </ul>
    `,
    fromDate: '09/2018',
    toDate: '11/2018',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'jQuery', 'Agile', 'Scrum'],
  },
  {
    logo: sailboatstudios,
    employer: 'Sailboat Studios',
    title: 'Full Stack Developer',
    description: `
      <ul>
        <li>Led a small team of 6 developers and designers to build an MVP within 8 weeks for a blockchain company. This project was essentially LinkedIn with Material UI and ran on blockchain.</li>
        <li>Worked with a small team (myself and one other developer) to build a mobile application for RVT, one of the largest RV classifieds companies.</li>
        <li>Worked on a few small contracts to fix bugs and add new features when the company was shorthanded but did not want to hire another employee.</li>
        <li>Communicated with internal and external teams about timelines, proposals, bugs, features, and participated in agile/scrum environments.</li>
      </ul>
      `,
    fromDate: '01/2017',
    toDate: '09/2018',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'GraphQL',
      'Apollo',
      'Agile',
      'Scrum',
    ],
  },
  {
    logo: sdblogo,
    employer: 'Shoresh David Brandon',
    title: 'WordPress Developer',
    description: `
    <ul>
      <li>Built and maintained a WordPress website for a synagogue.</li>
      <li>Learned to use HTML, CSS, and JavaScript on the job.</li>
    </ul>
    `,
    fromDate: '08/2015',
    toDate: '09/2016',
    tags: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
  },
];
