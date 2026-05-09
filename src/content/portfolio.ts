export interface ExperienceEntry {
  company: string
  role: string
  duration: string
  location: string
  type?: string
  achievements: string[]
  stack: string[]
}

export interface EducationEntry {
  institution: string
  credential: string
  duration: string
  detail: string
}

export const profile = {
  name: 'Eric Alforque',
  firstName: 'Eric',
  lastName: 'Alforque',
  role: 'Full Stack Software Developer',
  tagline: 'Requirements-driven engineering for small to mid-sized enterprises.',
  intro:
    'Backend-focused software engineer with 10+ years building production systems across diverse domains. I specialize in API design and implementation, ETL and data synchronization pipelines, integration services, and end-to-end applications — architecting backend services that are well-tested, observable, and maintainable, with a track record of shipping reliable systems that organizations depend on.',
  location: 'Bahrs Scrub, QLD, Australia',
  email: 'eric.alforque@gmail.com',
  phone: '0460 592 504',
  socials: {
    github: 'https://github.com/ealforque',
    linkedin: 'https://www.linkedin.com/',
    npm: 'https://www.npmjs.com/~ealforque'
  }
}

export const strengths: { title: string; body: string }[] = [
  {
    title: 'Requirements-driven engineering',
    body: 'I translate ambiguous business needs into precise software contracts — and the test suites that keep them honest under change.'
  },
  {
    title: 'Integrations & ETL',
    body: 'Years of building reliable bridges between heterogeneous systems with idempotency, exponential backoff, and end-to-end observability baked in by default.'
  },
  {
    title: 'Test-first craft',
    body: 'TDD, DDD, repository and service patterns, and 100% coverage targets on the codebases I own — because confidence is what makes code cheap to change.'
  },
  {
    title: 'System design & scalability',
    body: 'I design backend systems that scale cleanly under load — stateless services, fault-tolerant architectures, and clear failure modes from day one.'
  },
  {
    title: 'API design & contract-first development',
    body: 'Well-structured, versioned APIs with strong typing, clear boundaries, and contract-first thinking so frontend and backend stay in sync as the surface evolves.'
  },
  {
    title: 'Production reliability & observability',
    body: 'Logging, metrics, tracing, and alerting wired in so systems are diagnosable in production — not just functional in development.'
  }
]

export const techStack = {
  backend: ['PHP', 'Laravel', 'Node.js', 'TypeScript', 'Python', 'Jest', 'PHPUnit'],
  frontend: ['Vue 3', 'React', 'TypeScript', 'Tailwind', 'jQuery', 'Bootstrap'],
  data: ['MySQL', 'PostgreSQL', 'Snowflake'],
  patterns: ['MVC', 'REST API', 'DDD', 'TDD', 'Repository Pattern', 'Service Layer'],
  cloud: ['AWS', 'Azure', 'Linode', 'Terraform', 'Docker', 'GitHub Actions'],
  tooling: ['JIRA', 'ClickUp', 'Azure DevOps', 'Slack', 'Algolia', 'OpenAI']
}

export const experience: ExperienceEntry[] = [
  {
    company: 'GemLife',
    role: 'Full Stack Software Developer',
    duration: 'Jun 2025 — Present',
    location: 'Helensvale, QLD, Australia',
    type: 'Full Time',
    achievements: [
      'Implemented the backend API as an API gateway / proxy layer for all vendor integrations.',
      'Built integration for IntelliHR ↔ HR3 payroll onboarding sync.',
      'Built integration for OnSite Companion ↔ Plexa for purchase orders and service providers.',
      'Implemented data ETL ingestors for OnSite Companion, Plexa, Technology One and BrightFox.',
      'Achieved 100% codebase test coverage with Jest across new services.',
      'Set up Azure infrastructure: DevOps pipelines, VMs, App Gateway, automated deployment, MySQL.'
    ],
    stack: ['Node.js', 'TypeScript', 'MySQL', 'Vue 3', 'Azure', 'Azure DevOps', 'GitHub']
  },
  {
    company: 'StrongRoom AI',
    role: 'Software Developer',
    duration: 'Jan 2024 — Apr 2025',
    location: 'Melbourne, VIC, Australia',
    type: 'Full Time',
    achievements: [
      'Developed REST API endpoints for new features on the aged-care software platform.',
      'Implemented Tasmanian regulatory conformance updates across the platform.',
      'Authored unit tests for existing code blocks; reviewed peer pull requests regularly.',
      'Performed verification testing after each merge to ensure clean builds across environments.',
      'Partnered with customer success to triage and resolve production incident reports.'
    ],
    stack: ['Laravel', 'MySQL', 'REST API', 'Algolia', 'Vue 3', 'Rust', 'Git']
  },
  {
    company: 'My Green Butler / Wise Sustainability',
    role: 'Software Developer',
    duration: 'Apr 2023 — Sep 2023',
    location: 'Canberra, ACT, Australia',
    achievements: [
      'Developed REST API endpoints and migrated MySQL → PostgreSQL with zero data loss.',
      'Restructured codebase around DDD with repository + service layer patterns for testability.',
      'Implemented gamification mechanics and guest web-app content updates for the platform.',
      'Resolved latent bugs and shipped database structure changes alongside feature work.'
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'REST API', 'BitBucket', 'Git']
  },
  {
    company: 'Zhik Pty Ltd.',
    role: 'Full Stack Software Developer',
    duration: 'Aug 2022 — Dec 2023',
    location: 'St. Leonards, NSW, Australia',
    type: 'Contractor → Full Time',
    achievements: [
      'Maintained the production Magento instance — bug fixes and stakeholder feature requests.',
      'Integrated third-party modules into Magento and resolved JIRA service tickets.',
      'Built scheduled Python ETL pipelines from Magento databases for reporting.'
    ],
    stack: ['PHP', 'Magento', 'MySQL', 'API Mesh', 'Swagger', 'Python']
  },
  {
    company: 'Blueberry Markets',
    role: 'Backend Software Developer',
    duration: 'Apr 2022 — Aug 2022',
    location: 'North Sydney, NSW, Australia',
    type: 'Full Time',
    achievements: [
      'Developed REST APIs over MySQL using SSH identity files (.pem) on the Masonite framework.',
      'Built Python ETL into Snowflake for Google Ads, AdRoll (NextRoll), Meta Ads, Salesforce.',
      'Ingested MetaTrader data over MySQL connections secured by SSH identity files.',
      'Migrated frontend static pages into the existing Yii2 codebase with DTO + DI patterns.'
    ],
    stack: ['Python', 'Masonite', 'MySQL', 'Snowflake', 'Yii2', 'REST API']
  },
  {
    company: 'TERP',
    role: 'Backend Software Developer',
    duration: 'Dec 2020 — Apr 2022',
    location: 'Oslo, Norway',
    type: 'Full Time',
    achievements: [
      'Designed and built the API for a new MVP integrating multiple databases.',
      'Drove TDD + DDD with repository and service layer patterns across the codebase.',
      'Conducted code reviews; mentored a backend trainee from zero to handling JIRA tickets end-to-end.',
      'Onboarded new hires — local environment setup, code structure walkthroughs, and standups.'
    ],
    stack: ['PHP', 'Laravel', 'Lumen', 'MySQL', 'Docker', 'TDD', 'DDD']
  },
  {
    company: 'Osiris Systems PH / Meridian SoftTech Solutions',
    role: 'Full Stack Software Developer',
    duration: 'Jan 2014 — Dec 2020',
    location: 'Cebu, Philippines',
    type: 'Full Time',
    achievements: [
      'Interfaced directly with stakeholders to elicit, document, and validate software requirements.',
      'Translated requirements into shipped codebases — UAT, training, deployment, and sign-off.',
      'Drafted contracts and ran milestone presentations for software development engagements.'
    ],
    stack: ['PHP', 'Laravel', 'Lumen', 'MySQL', 'Blade', 'DDD', 'TDD']
  },
  {
    company: 'NCR Cebu Development Centre',
    role: 'Software Engineer',
    duration: 'Apr 2011 — Sep 2013',
    location: 'Cebu, Philippines',
    type: 'Full Time',
    achievements: [
      'Maintained device installation, configuration, and firmware update scripts for SelfServ Checkout.',
      'Developed device driver installation scripts; participated in code reviews with Atlanta engineers.',
      'Performed device integration, functional, and regression testing for terminal devices.'
    ],
    stack: ['C++', 'Perl', 'JIRA', 'VSS']
  }
]

export const personalProjects: {
  name: string
  purpose: string
  stack: string[]
  link?: string
  meta?: string
}[] = [
  {
    name: 'Sequelize Field Parser',
    purpose:
      'NPM package that lets you dynamically request only the columns you need from a Sequelize model.',
    stack: ['Node.js', 'TypeScript', 'Sequelize'],
    link: 'https://www.npmjs.com/package/@ealforque/sequelize-field-parser',
    meta: '100% Jest coverage · ESLint'
  },
  {
    name: 'Axios HTTP Logger',
    purpose: 'NPM package that logs Axios HTTP requests to a file for later review.',
    stack: ['Node.js', 'TypeScript', 'Axios'],
    link: 'https://www.npmjs.com/package/@ealforque/axios-http-logger',
    meta: '100% Jest coverage · ESLint'
  },
  {
    name: 'NexFile',
    purpose:
      'AI-powered, version-controlled document management system using deltas integrated with OpenAI.',
    stack: ['Node.js', 'Express', 'TypeScript', 'MySQL', 'Vue 3', 'Tailwind', 'OpenAI'],
    meta: 'MVC · DDD · TDD · SOLID · Repository pattern · 100% coverage'
  },
  {
    name: 'Vessel Sentinel',
    purpose:
      'AI-enabled maritime operations compliance risk register that analyzes incident reports, identifies regulatory exposure, and routes ownership to designated personnel for assessment and mitigation.',
    stack: ['Node.js', 'TypeScript', 'Vue 3', 'MySQL', 'OpenAI', 'Tailwind'],
    meta: 'Compliance risk register · Incident analysis · Ownership routing'
  },
  {
    name: 'UAuth — Authentication Service',
    purpose:
      'Single shared authentication service for all served applications, with revocable JWT and CSRF protection.',
    stack: ['Express', 'TypeScript', 'MySQL', 'Vue 3', 'Terraform', 'AWS EC2/RDS'],
    meta: 'JWT HttpOnly + Double-Submit CSRF · 100% coverage'
  },
  {
    name: 'RESTful API Boilerplate',
    purpose: 'Feature-rich Laravel boilerplate for fast backend MVP development.',
    stack: ['Laravel', 'MySQL', 'Sanctum', 'Docker', 'GitHub Actions'],
    meta: 'Cursor & offset pagination · 100% PHPUnit coverage'
  }
]

export const education: EducationEntry[] = [
  {
    institution: 'Bachelor of Science in Information Technology',
    credential: 'Computer science foundations',
    duration: '2007 — 2011',
    detail:
      'Data structures, algorithms, databases, networking, and software engineering principles \u2014 the formal grounding underneath every system I have shipped since.'
  },
  {
    institution: 'Self-directed engineering practice',
    credential: 'Open-source NPM packages & TDD-driven side projects',
    duration: 'Ongoing',
    detail:
      'Maintain published NPM packages (Sequelize Field Parser, Axios HTTP Logger) with 100% Jest coverage. Build full-stack reference systems (NexFile, UAuth) to keep architectural patterns sharp.'
  }
]
