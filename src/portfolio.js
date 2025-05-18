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
    name: 'Flutter To-Do Web',
    description:
      'A lightweight and intuitive task management web app built with Flutter. Users can quickly add tasks via a top input bar and manage them in a numbered list. Tasks can be deleted through a long-press action with confirmation, offering a simple yet effective way to organize daily to-dos directly in the browser.',
    stack: ['Flutter (Web)', 'Dart', 'Material Design'],
    sourceCode: 'https://github.com/AmirKobaisse/flutter-todo-web',
    livePreview: 'https://AmirKobaisse.github.io/flutter-todo-web/',
  },
  {
    name: 'Car Dealership Desktop App (Flutter)',
    description:
      'AutoManager is a desktop-based Flutter application designed to manage the operations of a car dealership through a clean, button-driven interface. Built with Dart and powered by a local SQLite database using sqflite_common_ffi, the app features dedicated sections for managing customers, vehicles, dealerships, and sales. Each section supports full CRUD functionality, enabling users to view, add, update, and delete records with ease. With intuitive navigation, form-based input, and persistent local storage, AutoManager showcases efficient Flutter development and structured application design tailored for real-world business use cases.',
    stack: ['Flutter', 'Dart', 'sqflite_common_ffi (SQLite)', 'Material Design', 'Desktop (Windows/Linux/MacOS) Runtime'],
    sourceCode: 'https://github.com/AmirKobaisse/automanger-car-dealership.git',
    livePreview: 'https://github.com/AmirKobaisse/automanger-car-dealership.git',
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
