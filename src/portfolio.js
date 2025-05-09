const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://AmirKobaisse.github.io',
  title: 'AK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Amir Kobaisse',
  role: 'Computer Programmer',
  description:
    'I’m a Computer Programming student with hands-on experience in Java, WordPress, and web development. I’ve built full-stack academic projects using Servlets, JSP, and MySQL, and developed a live WordPress site for an organization with dynamic event features and admin-only tools. I’m passionate about building clean, user-focused applications and continuously expanding my skillset in both frontend and backend development.',
  resume: '/AK_Resume_CP.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/amirkoubaissey-a460ba322/',
    github: 'https://github.com/AmirKobaisse',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Dart',
  'WordPress',
  'MySQL',
  'JSP',
  'Linux',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'koba0024@algonquinlive.com',
}

export { header, about, projects, skills, contact }
