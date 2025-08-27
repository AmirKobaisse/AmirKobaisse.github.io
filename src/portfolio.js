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
    name: 'Mango’s Shawarma Digital Menu (Python)',
    description:
      'A digital restaurant menu system developed for Mango’s Shawarma, designed to be accessed by customers via QR code at each table. Built using Python with an object-oriented class-based structure to manage the website layout and menu categories, the system ensures clean code organization and scalability. The menu includes shawarma wraps, skewer wraps, falafel, platters, fried chicken, fruit salads, and fresh fruit drinks. This project highlights the use of Python classes to structure front-end content dynamically while keeping the design user-friendly and responsive.',
    stack: ['Python', 'HTML', 'CSS', 'Object-Oriented Programming (Classes)', 'Responsive Design'],
    sourceCode: 'https://github.com/AmirKobaisse/mango-cafe-menu.git',
    livePreview: 'https://amirkobaisse.github.io/mango-cafe-menu/',
  },

  {
    name: 'Flutter To-Do Web',
    description:
      'A lightweight and intuitive task management web app built with Flutter. Users can quickly add tasks via a top input bar and manage them in a numbered list. Tasks can be deleted through a long-press action with confirmation, offering a simple yet effective way to organize daily to-dos directly in the browser.',
    stack: ['Flutter (Web)', 'Dart', 'Material Design'],
    sourceCode: 'https://github.com/AmirKobaisse/flutter-todo-web',
    livePreview: 'https://AmirKobaisse.github.io/flutter-todo-web/',
  },
  {
    name: 'Crude Run Weekly Data Manager',
    description:
      'A terminal-based Python 3 application that manages and analyzes weekly crude oil processing statistics. The program connects to a structured database and offers an interactive, menu-driven interface for displaying, searching, adding, updating, and sorting records. Built using the Model-View-Controller (MVC) architecture to separate concerns between presentation, business logic, and data access, this project demonstrates practical CRUD operations, modular code organization, and database integration.',
    stack: ['Python 3', 'MySQL', 'VS Code', 'Modular Architecture (MVC-like)', 'Terminal-based UI'],
    sourceCode: 'https://github.com/AmirKobaisse/CrudeTrack.git',
    livePreview: 'https://github.com/AmirKobaisse/CrudeTrack.git',
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
