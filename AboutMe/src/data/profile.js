// ============================================================
// PROFILE DATA — chỉnh sửa nội dung tại đây
// ============================================================

import avatarImg from '../../public/assets/img/person/leader-img.jpg';

export const personal = {
  name: 'Phan Long Ánh',
  title: 'Senior Java Developer & Full-stack Developer',
  quote: '"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."',
  quoteAuthor: '— Albert Einstein —',
  avatar: avatarImg,
  location: 'Hiep Binh Phuoc, Thu Duc, Ho Chi Minh City',
  email: 'longanhphan.qn@gmail.com',
  phone: '+84 393 756 388',
  facebook: 'https://www.facebook.com/longanhphan.qn',
  github: 'https://github.com/anhlongphan',
  zalo: 'https://zalo.me/0393756388',
};

export const about = {
  objective: `Seeking a challenging Senior Java Developer role within a dynamic and professional
    environment where I can apply my extensive skills and experience to drive impactful
    contributions. Eager to further expand my expertise in software development while
    fostering a collaborative and conducive working environment.`,
  traits: [
    {
      id: 1,
      icon: 'bi bi-person-check',
      title: 'Personality',
      description: 'Strong sense of responsibility and attention to detail. Comfortable working independently or as part of a team. Adaptable and thrive in fast-paced environments.'
    },
    {
      id: 2,
      icon: 'bi bi-lightbulb',
      title: 'Mindset',
      description: 'Eager learner, always seeking to acquire new skills and knowledge. Not naturally excellent but can perform acceptable presentations. Willing to learn new techniques.'
    },
    {
      id: 3,
      icon: 'bi bi-heart',
      title: 'Hobbies',
      description: 'Reading books, Traveling, Coffee lover.'
    }
  ]
};

export const techStack = [
  {
    category: 'Backend',
    color: '#e74c3c',
    skills: [
      { name: 'Java',        level: 95, badge: 'Expert',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', level: 90, badge: 'Expert',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Python',      level: 65, badge: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'NodeJS',      level: 65, badge: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ]
  },
  {
    category: 'Frontend',
    color: '#3498db',
    skills: [
      { name: 'HTML / CSS',   level: 80, badge: 'Advanced',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'Bootstrap',    level: 80, badge: 'Advanced',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'ReactJS',      level: 60, badge: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'VueJS / Vuex', level: 55, badge: 'Basic',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    ]
  },
  {
    category: 'Database',
    color: '#f39c12',
    skills: [
      { name: 'MySQL', level: 90, badge: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ]
  },
  {
    category: 'Cloud & Tools',
    color: '#2ecc71',
    skills: [
      { name: 'Google Cloud',       level: 75, badge: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Google App Scripts', level: 70, badge: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    ]
  },
  {
    category: 'AI Tools',
    color: '#8e44ad',
    skills: [
      { name: 'Claude (Anthropic)', level: 55, badge: 'Actively Learning', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg' },
      { name: 'GitHub Copilot',     level: 55, badge: 'Actively Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'OpenAI Codex',       level: 50, badge: 'Actively Learning', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg' },
    ]
  }
];

export const projects = [
  {
    type: 'web',
    name: 'Daijin Systems',
    description: 'An information management system for managing, searching, and editing details of real estate purchase contracts, transaction expenses, and loan management. Evolved from member role to Team Leader over 6 years.',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'ReactJS', 'MySQL', 'Maven'],
    role: 'Senior Java Developer → Team Leader',
    period: '10/2018 – 04/2024',
    scale: '4 members'
  },
  {
    type: 'api',
    name: 'Workflow API',
    description: 'Manages all states and processes of the system. Applied to oversee the approval process of purchase contract profiles, with scheduled jobs for automation.',
    tech: ['Java', 'Spring Boot', 'Google Cloud Services', 'MySQL'],
    role: 'Backend Developer',
    period: '11/2022 – 04/2024',
    scale: '2 members'
  },
  {
    type: 'api',
    name: 'DrivePlus API',
    description: 'API for uploading and managing files to Google Drive using the Google Drive API, with scheduled synchronization jobs for maintaining data consistency.',
    tech: ['Java', 'Google Drive API', 'Google Cloud Services', 'MySQL'],
    role: 'Backend Developer',
    period: '11/2022 – 04/2024',
    scale: '2 members'
  },
  {
    type: 'other',
    name: 'ETL Systems',
    description: 'Synchronizes data from physical MySQL databases to Google BigQuery for real-time and scheduled reporting. Handles data standardization and cloud function orchestration.',
    tech: ['Python', 'MySQL', 'BigQuery', 'Cloud Functions', 'Cloud Scheduler'],
    role: 'Full-stack Developer',
    period: '12/2022 – 07/2023',
    scale: '3 members'
  },
  {
    type: 'app',
    name: 'BukkenShiryo App',
    description: 'Web application for managing all project files on Google Drive folders. Allows sorting files according to predefined formats and synchronizing files for the sales department.',
    tech: ['Google Apps Scripts', 'Vue.js', 'Vuex', 'HTML5', 'ES6'],
    role: 'Backend Developer',
    period: '12/2021 – 12/2022',
    scale: '3 members'
  },
  {
    type: 'other',
    name: 'AutoResponse Systems',
    description: 'Manages sales information websites, evaluates scores of attention-grabbing locations, ranks stores, and sends consultation requests to the stores closest to users.',
    tech: ['Python', 'SQL Server', 'Google Cloud Services'],
    role: 'Backend Developer',
    period: '10/2022 – 04/2023',
    scale: '3 members'
  },
  {
    type: 'web',
    name: 'RuijuBukkenKensaku',
    description: 'Collects information from all sales files in Google Drive folders, aggregates and exports spreadsheet reports, making it easier to search for contract information.',
    tech: ['NodeJS', 'Express', 'Google Cloud Services'],
    role: 'Full-stack Developer',
    period: '01/2022 – 06/2022',
    scale: '3 members'
  }
];

export const metrics = [
  { end: 8,  suffix: '+', label: 'Years of Experience',     icon: 'bi bi-calendar-check', color: '#e74c3c' },
  { end: 7,  suffix: '',  label: 'Major Projects Delivered', icon: 'bi bi-folder-check',   color: '#f39c12' },
  { end: 30, suffix: '%', label: 'Search Performance Gain', icon: 'bi bi-speedometer2',    color: '#2ecc71' },
  { end: 9,  suffix: '+', label: 'Technologies Mastered',   icon: 'bi bi-cpu',             color: '#3498db' },
];

export const architectures = [
  {
    title: 'Enterprise Web Management',
    type: 'MVC / Full-stack',
    color: '#e74c3c',
    icon: 'bi bi-layers',
    description: 'Multi-layer web app managing real estate contracts end-to-end. Java Spring Boot backend with Thymeleaf + React frontend, MySQL persistence, and load-balanced deployment.',
    layers: ['React / Thymeleaf', 'Spring Boot (REST)', 'MySQL', 'GCP Load Balancer'],
    project: 'Daijin Systems'
  },
  {
    title: 'ETL Data Pipeline',
    type: 'Cloud Data Engineering',
    color: '#f39c12',
    icon: 'bi bi-diagram-3',
    description: 'Automated pipeline syncing transactional data from MySQL to Google BigQuery for real-time reporting. Orchestrated via Cloud Scheduler and Cloud Functions.',
    layers: ['MySQL (Source)', 'Cloud Functions', 'Cloud Scheduler', 'BigQuery (Sink)'],
    project: 'ETL Systems'
  },
  {
    title: 'RESTful API Services',
    type: 'Backend Microservices',
    color: '#3498db',
    icon: 'bi bi-cloud-arrow-up',
    description: 'Stateless REST APIs managing workflow approval states and Google Drive file operations. Designed for scalability with scheduled jobs for data synchronization.',
    layers: ['Java REST API', 'Google Drive API', 'Cloud Scheduler', 'MySQL'],
    project: 'Workflow API · DrivePlus API'
  },
  {
    title: 'Automation & Reporting',
    type: 'Scripting / Low-code',
    color: '#2ecc71',
    icon: 'bi bi-gear-wide-connected',
    description: 'Google Apps Scripts automation for file management and spreadsheet reporting across Drive folders. Vue.js frontend for sales department data access.',
    layers: ['Vue.js / Vuex', 'Google Apps Scripts', 'Google Drive', 'Spreadsheet Reports'],
    project: 'BukkenShiryo · RuijuBukken'
  }
];

export const workHistory = [
  {
    period: '08/2018 – 04/2024',
    role: 'Senior Java Developer → Full-stack → Team Leader',
    company: 'rakumo Co., Ltd',
    type: 'work',
    highlights: [
      'Led end-to-end development of Daijin Systems (real estate management)',
      'Managed teams of 2–4 members, client communication and requirements gathering',
      'Built ETL pipeline, Workflow API and DrivePlus API on Google Cloud',
      'Improved search performance by 30%; applied load balancing and Redis caching',
      'Recipient of the MVP award (2019–2024)',
    ]
  },
  {
    period: '09/2016 – 07/2018',
    role: 'Java Developer',
    company: 'FUJINET SYSTEMS JSC',
    type: 'work',
    highlights: [
      'Specialized in backend development with robust and scalable Java solutions',
      'Collaborated with cross-functional teams for project execution',
      'Continuously improving through self-study and professional development',
    ]
  },
  {
    period: '10/2012 – 01/2017',
    role: 'B.Sc. Information Technology',
    company: 'Ho Chi Minh City University of Science',
    type: 'edu',
    highlights: [
      'Major: Information Technology',
      'Oracle Certified: Java SE 8 Programmer II (2016)',
    ]
  }
];
