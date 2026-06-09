export type StageId = 'extract' | 'transform' | 'load'

export interface ArchitectureNode {
  id: string
  label: string
  detail: string
}

export interface ArchitectureStage {
  id: StageId
  title: string
  caption: string
  nodes: ArchitectureNode[]
}

export interface Highlight {
  title: string
  body: string
  icon: 'spark' | 'shield' | 'scale' | 'pulse'
}

export interface TimelineEpisode {
  id: string
  number: string
  title: string
  org: string
  date: string
  shortDate: string
  description: string
  architecture?: ArchitectureStage[]
  highlights?: Highlight[]
  stack: string[]
  integrations?: string[]
  disciplines?: string[]
  repoUrl: string
}

const CORE_DISCIPLINES = [
  'Domain Driven Design',
  'Modular Distributed Architecture',
  'Service & Repository Design Pattern',
  'Test Driven Development'
]

const CORE_STACK = [
  'Node.js',
  'TypeScript',
  'Cron',
  'Microsoft Graph',
  'GitHub Actions',
  'MySQL',
  'File Handling',
  'SQL Server',
  'Jest',
  'Azure'
]

const MERIDIAN_STACK = ['PHP', 'Laravel', 'MySQL', 'Blade', 'PHPUnit', 'cPanel']

const MERIDIAN_DISCIPLINES = [
  'Domain Driven Design',
  'MVC Architecture',
  'Service & Repository Design Pattern',
  'Test Driven Development'
]

export const timeline: TimelineEpisode[] = [
  {
    id: 'etl-pipelines',
    number: '01',
    title: 'Distributed ETL and Data Synchronization Application',
    org: 'GemLife · Node + TypeScript',
    date: 'Jul 2025 — Present',
    shortDate: '2025 · 07',
    description:
      'A scalable, fault-tolerant ETL framework orchestrating data ingestion across multiple heterogeneous systems — Onsite Companion, Plexa, SimPro, and BrightFox. Stream-based processing, runtime-safe schema validation, and normalization/enrichment layers deliver reliable data downstream with high observability and resilience.',
    architecture: [
      {
        id: 'extract',
        title: 'Extract',
        caption: 'Heterogeneous source systems',
        nodes: [
          { id: 'onsite', label: 'Onsite Companion', detail: 'Operational data' },
          { id: 'plexa', label: 'Plexa', detail: 'Procurement & supply chain' },
          { id: 'simpro', label: 'SimPro', detail: 'Field service management' },
          { id: 'brightfox', label: 'BrightFox', detail: 'CRM / contact intelligence' }
        ]
      },
      {
        id: 'transform',
        title: 'Transform',
        caption: 'Validate · normalize · enrich',
        nodes: [
          { id: 'streams', label: 'Streams', detail: 'Backpressure-aware' },
          { id: 'zod', label: 'Schema', detail: 'Runtime-safe validation' },
          { id: 'normalize', label: 'Normalize', detail: 'Canonical models' },
          { id: 'enrich', label: 'Enrich', detail: 'Lookup joins' }
        ]
      },
      {
        id: 'load',
        title: 'Load',
        caption: 'Reliable downstream delivery',
        nodes: [
          { id: 'mysql', label: 'MySQL', detail: 'Operational store' },
          { id: 'aggregator', label: 'API Aggregator', detail: 'Internal consumers' }
        ]
      }
    ],
    highlights: [
      {
        title: 'High Performance',
        body: 'Stream-based processing handles large volumes with constant memory.',
        icon: 'spark'
      },
      {
        title: 'Resilient',
        body: 'Fails gracefully — logs every request, handles exceptions explicitly, and retries on the next schedule rather than crashing the run.',
        icon: 'shield'
      },
      {
        title: 'Scalable',
        body: 'Horizontal worker model scales linearly with vendor data volume.',
        icon: 'scale'
      },
      {
        title: 'Observable',
        body: 'Structured logs and run metrics give every job a clear paper trail.',
        icon: 'pulse'
      }
    ],
    stack: [...CORE_STACK, 'RabbitMQ'],
    integrations: ['Plexa', 'Onsite Companion', 'SimPro', 'TechnologyOne'],
    disciplines: CORE_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'hr-onboarding-bridge',
    number: '02',
    title: 'HR Personnel Onboarding Bridge Service',
    org: 'GemLife · IntelliHR → HR3',
    date: 'Aug 2025',
    shortDate: '2025 · 08',
    description:
      'Synchronizes human resources data from IntelliHR to the HR3 system for newly onboarded employees — webhook ingestion, scheduled sync jobs, and email confirmations on every successful run.',
    architecture: [
      {
        id: 'extract',
        title: 'Extract',
        caption: 'Source events',
        nodes: [
          { id: 'intellihr-wh', label: 'IntelliHR Webhooks', detail: 'New-hire events' }
        ]
      },
      {
        id: 'transform',
        title: 'Transform',
        caption: 'Aggregate · schedule · sync',
        nodes: [
          { id: 'aggregator', label: 'API Aggregator', detail: 'Routing & validation' },
          { id: 'sync-jobs', label: 'Sync Jobs', detail: 'node-schedule cadence' }
        ]
      },
      {
        id: 'load',
        title: 'Load',
        caption: 'Deliver · confirm',
        nodes: [
          { id: 'hr3', label: 'HR3', detail: 'Personnel records' },
          { id: 'email', label: 'Email Notification', detail: 'Run confirmations' }
        ]
      }
    ],
    highlights: [
      {
        title: 'Idempotent',
        body: 'Duplicate webhooks never produce duplicate onboarding writes.',
        icon: 'shield'
      },
      {
        title: 'Self-Healing',
        body: 'Fails gracefully — logs every request, handles exceptions explicitly, and retries on the next schedule rather than crashing the run.',
        icon: 'pulse'
      },
      {
        title: 'Auditable',
        body: 'Every event has a signed, persisted trail from receipt to delivery.',
        icon: 'spark'
      },
      {
        title: 'Validated',
        body: 'Strict runtime payload validation rejects bad data at the boundary.',
        icon: 'scale'
      }
    ],
    stack: [...CORE_STACK, 'Webhooks'],
    integrations: ['IntelliHR', 'HR3'],
    disciplines: CORE_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'po-sync',
    number: '03',
    title: 'Bi-Directional PO Synchronization Service',
    org: 'GemLife · Plexa ↔ Onsite Companion',
    date: 'Sep 2025',
    shortDate: '2025 · 09',
    description:
      'A two-way data synchronization system between Plexa and Onsite Companion that keeps procurement workflows consistent across both platforms — including conflict resolution, partial-update handling, and explicit state reconciliation.',
    architecture: [
      {
        id: 'extract',
        title: 'Sides',
        caption: 'Both systems as source',
        nodes: [
          { id: 'plexa-src', label: 'Plexa', detail: 'PO origin / updates' },
          { id: 'onsite-src', label: 'Onsite Companion', detail: 'Field updates' },
          { id: 'cdc', label: 'Change Capture', detail: 'Polling + webhooks' },
          { id: 'version', label: 'Versioning', detail: 'Vector clocks' }
        ]
      },
      {
        id: 'transform',
        title: 'Reconcile',
        caption: 'Resolve · merge · arbitrate',
        nodes: [
          { id: 'conflict', label: 'Conflict', detail: 'Resolution strategies' },
          { id: 'partial', label: 'Partial Update', detail: 'Field-level merge' },
          { id: 'state', label: 'State Engine', detail: 'PO lifecycle' },
          { id: 'rules', label: 'Business Rules', detail: 'Approver gates' }
        ]
      },
      {
        id: 'load',
        title: 'Apply',
        caption: 'Write back to both',
        nodes: [
          { id: 'plexa-dst', label: 'Plexa API', detail: 'Authoritative writes' },
          { id: 'onsite-dst', label: 'Onsite API', detail: 'Mirror state' },
          { id: 'ledger', label: 'Sync Ledger', detail: 'Cross-system audit' },
          { id: 'alerts', label: 'Alerts', detail: 'Mismatch notifications' }
        ]
      }
    ],
    highlights: [
      {
        title: 'Conflict-Aware',
        body: 'Explicit resolution strategies handle simultaneous edits on both sides.',
        icon: 'shield'
      },
      {
        title: 'Partial Updates',
        body: 'Field-level merging avoids clobbering concurrent changes.',
        icon: 'scale'
      },
      {
        title: 'Reconciled',
        body: 'Daily state reconciliation surfaces drift before it becomes a problem.',
        icon: 'pulse'
      },
      {
        title: 'Traceable',
        body: 'A sync ledger answers "what happened to this PO" at any moment.',
        icon: 'spark'
      }
    ],
    stack: CORE_STACK,
    integrations: ['Onsite Companion', 'Plexa'],
    disciplines: CORE_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'api-aggregator',
    number: '04',
    title: 'API Aggregation Backend Service',
    org: 'GemLife · Internal Gateway',
    date: 'Oct 2025',
    shortDate: '2025 · 10',
    description:
      'A centralized API gateway/aggregator that unifies multiple backend services into a single, well-shaped interface for downstream consumers. Handles request orchestration, response transformation, and caching strategies to keep the experience fast and consistent.',
    architecture: [
      {
        id: 'extract',
        title: 'Upstreams',
        caption: 'Backend services',
        nodes: [
          { id: 'crm', label: 'CRM Services', detail: 'BrightFox & co.' },
          { id: 'fsm', label: 'Field Services', detail: 'SimPro' },
          { id: 'fin', label: 'Finance', detail: 'Technology One' },
          { id: 'internal', label: 'Internal APIs', detail: 'Domain services' }
        ]
      },
      {
        id: 'transform',
        title: 'Gateway',
        caption: 'Orchestrate · transform · cache',
        nodes: [
          { id: 'orchestrate', label: 'Orchestrate', detail: 'Parallel fanout' },
          { id: 'shape', label: 'Shape', detail: 'Response composition' },
          { id: 'cache', label: 'Cache', detail: 'TTL + invalidation' },
          { id: 'authz', label: 'AuthZ', detail: 'Per-route policies' }
        ]
      },
      {
        id: 'load',
        title: 'Consumers',
        caption: 'Web · mobile · partners',
        nodes: [
          { id: 'web', label: 'Web app', detail: 'Vue 3 frontend' },
          { id: 'partner', label: 'Partner APIs', detail: 'Stable contracts' },
          { id: 'jobs', label: 'Background Jobs', detail: 'Queued workers' },
          { id: 'metrics2', label: 'Metrics', detail: 'Per-route SLOs' }
        ]
      }
    ],
    highlights: [
      {
        title: 'Single Surface',
        body: 'One contract for downstream clients across many backend services.',
        icon: 'spark'
      },
      {
        title: 'Cacheable',
        body: 'TTL + invalidation rules keep hot reads fast without staleness.',
        icon: 'pulse'
      },
      {
        title: 'Composable',
        body: 'Parallel orchestration assembles responses from multiple upstreams.',
        icon: 'scale'
      },
      {
        title: 'Secure',
        body: 'Per-route auth policies enforced at the boundary, not in callers.',
        icon: 'shield'
      }
    ],
    stack: [...CORE_STACK, 'RabbitMQ'],
    integrations: [
      'Plexa',
      'Onsite Companion',
      'SimPro',
      'TechnologyOne',
      'IntelliHR',
      'HR3',
      'ABR',
      'Microsoft Graph'
    ],
    disciplines: CORE_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'sds-filesearch',
    number: '05',
    title: 'SDS File Search (Semantic + MCP / OpenAI)',
    org: 'GemLife · AI document retrieval',
    date: 'Nov 2025',
    shortDate: '2025 · 11',
    description:
      'An AI-enabled document retrieval system for safety data sheets. Uses the Model Context Protocol (MCP) for semantic search and exposes its functionality via a standardized OpenAI surface so it can be consumed by both AI agents and traditional clients.',
    architecture: [
      {
        id: 'extract',
        title: 'Sources',
        caption: 'Documents & metadata',
        nodes: [
          { id: 'sds-docs', label: 'SDS Library', detail: 'Curated PDFs' },
          { id: 'meta', label: 'Metadata', detail: 'Categories & tags' },
          { id: 'ingest', label: 'Ingest', detail: 'OCR + chunking' },
          { id: 'embed', label: 'Embeddings', detail: 'Vectorized chunks' }
        ]
      },
      {
        id: 'transform',
        title: 'Retrieval',
        caption: 'Semantic + structured search',
        nodes: [
          { id: 'mcp', label: 'MCP Server', detail: 'Tool surface' },
          { id: 'rerank', label: 'Re-rank', detail: 'Relevance scoring' },
          { id: 'guard', label: 'Guardrails', detail: 'Citation + scope' },
          { id: 'cache2', label: 'Result Cache', detail: 'Repeat queries' }
        ]
      },
      {
        id: 'load',
        title: 'Surfaces',
        caption: 'Agents + apps',
        nodes: [
          { id: 'openai', label: 'OpenAI', detail: 'HTTP clients' },
          { id: 'agent', label: 'AI Agents', detail: 'MCP-aware tools' },
          { id: 'web2', label: 'Internal Web', detail: 'Search UI' },
          { id: 'audit3', label: 'Audit', detail: 'Query history' }
        ]
      }
    ],
    highlights: [
      {
        title: 'Semantic',
        body: 'Concept-level retrieval, not just keyword matching, over the SDS corpus.',
        icon: 'spark'
      },
      {
        title: 'Standardized',
        body: 'OpenAI + MCP make it equally usable by humans, apps, and agents.',
        icon: 'scale'
      },
      {
        title: 'Grounded',
        body: 'Every answer carries citations back to the source document.',
        icon: 'shield'
      },
      {
        title: 'Observable',
        body: 'Query history and ranking telemetry feed continuous improvement.',
        icon: 'pulse'
      }
    ],
    stack: [
      'Node.js',
      'TypeScript',
      'Cron',
      'GitHub Actions',
      'MySQL',
      'File Handling',
      'SQL Server',
      'Jest',
      'Azure'
    ],
    integrations: ['Plexa', 'OpenAI'],
    disciplines: CORE_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'auth-platform',
    number: '06',
    title: 'Authentication & Authorization Platform',
    org: 'UAuth · Personal project',
    date: '2024 — Ongoing',
    shortDate: '2024 · 06',
    description:
      'A secure OAuth-based session management service with revocable JWT infrastructure and fine-grained RBAC. Supports multi-tenant access control, session invalidation, and a secure end-to-end token lifecycle — designed to be the single shared auth service across multiple applications.',
    architecture: [
      {
        id: 'extract',
        title: 'Identity',
        caption: 'Sign-in surface',
        nodes: [
          { id: 'oauth', label: 'OAuth', detail: 'Provider flows' },
          { id: 'mfa', label: 'MFA', detail: 'TOTP / WebAuthn' },
          { id: 'session', label: 'Session', detail: 'HttpOnly cookies' },
          { id: 'csrf', label: 'CSRF', detail: 'Double-submit pattern' }
        ]
      },
      {
        id: 'transform',
        title: 'Authorization',
        caption: 'Issue · scope · revoke',
        nodes: [
          { id: 'jwt', label: 'JWT', detail: 'Short-lived access' },
          { id: 'refresh', label: 'Refresh', detail: 'Rotating tokens' },
          { id: 'rbac', label: 'RBAC', detail: 'Role + scope checks' },
          { id: 'revoke', label: 'Revoke', detail: 'Server-side blocklist' }
        ]
      },
      {
        id: 'load',
        title: 'Consumers',
        caption: 'Apps & services',
        nodes: [
          { id: 'apps', label: 'Apps', detail: 'Multi-tenant clients' },
          { id: 'apis', label: 'APIs', detail: 'Verified callers' },
          { id: 'admin', label: 'Admin', detail: 'Tenant control plane' },
          { id: 'logs', label: 'Audit', detail: 'Sign-in trails' }
        ]
      }
    ],
    highlights: [
      {
        title: 'Revocable JWT',
        body: 'Short-lived tokens + server-side blocklist for instant invalidation.',
        icon: 'shield'
      },
      {
        title: 'CSRF-Hardened',
        body: 'HttpOnly cookies paired with the double-submit CSRF pattern.',
        icon: 'spark'
      },
      {
        title: 'Multi-Tenant',
        body: 'Tenant-scoped roles and policies isolate every customer cleanly.',
        icon: 'scale'
      },
      {
        title: 'Auditable',
        body: 'Full sign-in and authorization trails for security review.',
        icon: 'pulse'
      }
    ],
    stack: ['Node.js', 'Express', 'TypeScript', 'MySQL', 'Vue 3', 'Terraform', 'AWS'],
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'nexfile',
    number: '07',
    title: 'NexFile — AI-Powered Delta-based Document Management',
    org: 'Personal project · Full stack',
    date: '2024 — Ongoing',
    shortDate: '2024 · 03',
    description:
      'A version-controlled document management system that stores changes as deltas instead of full snapshots, integrated with OpenAI for AI-assisted authoring, summarization, and semantic search across document history.',
    architecture: [
      {
        id: 'extract',
        title: 'Capture',
        caption: 'Author · edit · import',
        nodes: [
          { id: 'nf-edit', label: 'Editor', detail: 'Vue 3 rich-text' },
          { id: 'nf-import', label: 'Import', detail: 'PDF / DOCX intake' },
          { id: 'nf-diff', label: 'Diff Engine', detail: 'Delta computation' },
          { id: 'nf-meta', label: 'Metadata', detail: 'Tags & owners' }
        ]
      },
      {
        id: 'transform',
        title: 'Versioning',
        caption: 'Delta-based history',
        nodes: [
          { id: 'nf-store', label: 'Delta Store', detail: 'Compact diffs' },
          { id: 'nf-rebuild', label: 'Rebuild', detail: 'Any-version replay' },
          { id: 'nf-ai', label: 'OpenAI', detail: 'Summarize / refactor' },
          { id: 'nf-embed', label: 'Embeddings', detail: 'Semantic index' }
        ]
      },
      {
        id: 'load',
        title: 'Surface',
        caption: 'Search · share · audit',
        nodes: [
          { id: 'nf-search', label: 'Search', detail: 'Semantic + keyword' },
          { id: 'nf-share', label: 'Share', detail: 'Scoped access' },
          { id: 'nf-audit', label: 'Audit', detail: 'Per-version trail' },
          { id: 'nf-export', label: 'Export', detail: 'Full snapshots' }
        ]
      }
    ],
    highlights: [
      {
        title: 'Delta storage',
        body: 'Changes stored as compact diffs — cheap history, fast time-travel.',
        icon: 'spark'
      },
      {
        title: 'AI-assisted',
        body: 'OpenAI integration powers summaries, rewrites, and semantic recall.',
        icon: 'pulse'
      },
      {
        title: 'Auditable',
        body: 'Every version reconstructable end-to-end with full attribution.',
        icon: 'shield'
      },
      {
        title: 'Patterned',
        body: 'MVC · DDD · TDD · SOLID · repository pattern · 100% coverage.',
        icon: 'scale'
      }
    ],
    stack: [
      'Node.js',
      'TypeScript',
      'Cron',
      'GitHub Actions',
      'MySQL',
      'File Handling',
      'SQL Server',
      'Jest',
      'Tesseract'
    ],
    integrations: ['OpenAI'],
    disciplines: CORE_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'vessel-sentinel',
    number: '08',
    title: 'Vessel Sentinel — AI Maritime Compliance Risk Register',
    org: 'Personal project · Maritime operations',
    date: '2026 — Ongoing',
    shortDate: '2026',
    description:
      'An AI-enabled compliance risk register for maritime operations that analyzes incident reports, surfaces potential regulatory exposure, and assigns ownership to designated personnel for assessment, mitigation, and follow-up.',
    architecture: [
      {
        id: 'extract',
        title: 'Capture',
        caption: 'Incidents & compliance context',
        nodes: [
          { id: 'vs-incidents', label: 'Incident Reports', detail: 'Structured intake' },
          { id: 'vs-risk-lib', label: 'Risk Register', detail: 'Compliance controls' },
          { id: 'vs-evidence', label: 'Evidence', detail: 'Attachments & notes' },
          { id: 'vs-roles', label: 'Personnel', detail: 'Role ownership map' }
        ]
      },
      {
        id: 'transform',
        title: 'Assess',
        caption: 'Classify · score · assign',
        nodes: [
          { id: 'vs-ai', label: 'AI Analysis', detail: 'Risk matching' },
          { id: 'vs-rules', label: 'Rule Engine', detail: 'Severity thresholds' },
          { id: 'vs-routing', label: 'Assignment', detail: 'Designated owners' },
          { id: 'vs-sla', label: 'SLA Tracking', detail: 'Due dates' }
        ]
      },
      {
        id: 'load',
        title: 'Resolve',
        caption: 'Mitigate · review · audit',
        nodes: [
          { id: 'vs-actions', label: 'Actions', detail: 'Mitigation tasks' },
          { id: 'vs-review', label: 'Review', detail: 'Risk sign-off' },
          { id: 'vs-alerts', label: 'Alerts', detail: 'Escalations' },
          { id: 'vs-audit', label: 'Audit Trail', detail: 'Decision history' }
        ]
      }
    ],
    highlights: [
      {
        title: 'AI-enabled',
        body: 'Incident narratives are analyzed against compliance controls to surface likely risk exposure.',
        icon: 'spark'
      },
      {
        title: 'Accountable',
        body: 'Risks are routed to designated personnel with ownership, due dates, and escalation paths.',
        icon: 'shield'
      },
      {
        title: 'Operational',
        body: 'Mitigation tasks, review status, and follow-up actions stay tied to each incident.',
        icon: 'pulse'
      },
      {
        title: 'Auditable',
        body: 'Every classification, assignment, and closure decision is retained for compliance review.',
        icon: 'scale'
      }
    ],
    stack: ['Node.js', 'TypeScript', 'Vue 3', 'MySQL', 'OpenAI', 'Tailwind', 'Jest'],
    integrations: ['OpenAI'],
    disciplines: CORE_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'knowy',
    number: '09',
    title: 'Knowy — AI-enabled Document Repository',
    org: 'Personal project · AI knowledge ecosystem',
    date: '2026 — Ongoing',
    shortDate: '2026',
    description:
      'An AI-enabled document repository that turns documents into an accessible, searchable, and assisted knowledge ecosystem through semantic retrieval, grounded responses, and guided navigation.',
    architecture: [
      {
        id: 'extract',
        title: 'Knowledge Base',
        caption: 'Documents & metadata',
        nodes: [
          { id: 'kn-docs', label: 'Document Library', detail: 'PDF' },
          { id: 'kn-meta', label: 'Metadata', detail: 'Taxonomy & ownership' },
          { id: 'kn-ingest', label: 'Ingest', detail: 'OCR + chunking' },
          { id: 'kn-embed', label: 'Embeddings', detail: 'Vectorized chunks' }
        ]
      },
      {
        id: 'transform',
        title: 'Assist',
        caption: 'OpenAI grounded on opened document',
        nodes: [
          { id: 'kn-open', label: 'Opened Document', detail: 'Active context' },
          { id: 'kn-openai', label: 'OpenAI', detail: 'Summarize / answer' },
          { id: 'kn-ground', label: 'Grounding', detail: 'Source-bound responses' },
          { id: 'kn-cite', label: 'Citation', detail: 'Referenced excerpts' }
        ]
      },
      {
        id: 'load',
        title: 'User Experience',
        caption: 'Reader · assistant · history',
        nodes: [
          { id: 'kn-reader', label: 'Document Reader', detail: 'Open + navigate' },
          { id: 'kn-chat', label: 'Ask Assistant', detail: 'Grounded responses' },
          { id: 'kn-search', label: 'Search', detail: 'Metadata + semantic' },
          { id: 'kn-history', label: 'History', detail: 'Question trail' }
        ]
      }
    ],
    highlights: [
      {
        title: 'Accessible',
        body: 'Centralizes dispersed documents into a single navigable knowledge layer.',
        icon: 'spark'
      },
      {
        title: 'Searchable',
        body: 'Semantic retrieval surfaces intent-level matches beyond exact keywords.',
        icon: 'scale'
      },
      {
        title: 'Assisted',
        body: 'AI assistance provides grounded summaries and answers with references.',
        icon: 'shield'
      },
      {
        title: 'Observable',
        body: 'Search telemetry and audit history support iterative quality improvements.',
        icon: 'pulse'
      }
    ],
    stack: [
      'Node.js',
      'TypeScript',
      'Cron',
      'GitHub Actions',
      'MySQL',
      'File Handling',
      'SQL Server',
      'Jest',
      'Azure'
    ],
    integrations: ['OpenAI'],
    disciplines: CORE_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'sequelize-field-parser',
    number: '10',
    title: 'Sequelize Field Parser — NPM package',
    org: 'Open source · @ealforque/sequelize-field-parser',
    date: 'Published',
    shortDate: 'NPM',
    description:
      'A published NPM package that lets you dynamically request only the columns you need from a Sequelize model — trimming over-fetching and shaping payloads at the query layer.',
    architecture: [
      {
        id: 'extract',
        title: 'Input',
        caption: 'Request shape',
        nodes: [
          { id: 'sfp-req', label: 'Fields param', detail: 'Comma-separated' },
          { id: 'sfp-model', label: 'Model', detail: 'Sequelize definition' },
          { id: 'sfp-rel', label: 'Relations', detail: 'Nested includes' },
          { id: 'sfp-validate', label: 'Validate', detail: 'Allowlist guard' }
        ]
      },
      {
        id: 'transform',
        title: 'Resolve',
        caption: 'Build the query',
        nodes: [
          { id: 'sfp-parse', label: 'Parse', detail: 'AST per request' },
          { id: 'sfp-attrs', label: 'Attributes', detail: 'Projected columns' },
          { id: 'sfp-include', label: 'Include', detail: 'Eager-load tree' },
          { id: 'sfp-safe', label: 'Safe', detail: 'No injection vectors' }
        ]
      },
      {
        id: 'load',
        title: 'Output',
        caption: 'Tight payloads',
        nodes: [
          { id: 'sfp-query', label: 'Query', detail: 'Sequelize options' },
          { id: 'sfp-rows', label: 'Rows', detail: 'Only requested fields' },
          { id: 'sfp-types', label: 'Types', detail: 'Inferred TS shapes' },
          { id: 'sfp-perf', label: 'Perf', detail: 'Less wire, less load' }
        ]
      }
    ],
    highlights: [
      {
        title: 'Tested',
        body: '100% Jest coverage on every published version.',
        icon: 'shield'
      },
      {
        title: 'Type-safe',
        body: 'TypeScript definitions ship with the package.',
        icon: 'spark'
      },
      {
        title: 'Lean payloads',
        body: 'Avoids over-fetching by projecting only requested fields.',
        icon: 'scale'
      },
      {
        title: 'Drop-in',
        body: 'Plays cleanly with existing Sequelize controllers.',
        icon: 'pulse'
      }
    ],
    stack: ['Node.js', 'TypeScript', 'Sequelize', 'Jest', 'ESLint', 'NPM'],
    repoUrl: 'https://www.npmjs.com/package/@ealforque/sequelize-field-parser'
  },
  {
    id: 'axios-http-logger',
    number: '11',
    title: 'Axios HTTP Logger — NPM package',
    org: 'Open source · @ealforque/axios-http-logger',
    date: 'Published',
    shortDate: 'NPM',
    description:
      'A published NPM package that logs Axios HTTP requests and responses to a file, configurable per-instance — a small, focused utility for debugging and post-hoc auditing of outbound HTTP traffic.',
    architecture: [
      {
        id: 'extract',
        title: 'Intercept',
        caption: 'Axios lifecycle',
        nodes: [
          { id: 'ahl-req', label: 'Request', detail: 'Outbound capture' },
          { id: 'ahl-res', label: 'Response', detail: 'Inbound capture' },
          { id: 'ahl-err', label: 'Error', detail: 'Failure capture' },
          { id: 'ahl-cfg', label: 'Config', detail: 'Per-instance opts' }
        ]
      },
      {
        id: 'transform',
        title: 'Format',
        caption: 'Redact · shape · timestamp',
        nodes: [
          { id: 'ahl-redact', label: 'Redact', detail: 'Sensitive headers' },
          { id: 'ahl-shape', label: 'Shape', detail: 'Structured records' },
          { id: 'ahl-stamp', label: 'Timestamp', detail: 'ISO 8601' },
          { id: 'ahl-corr', label: 'Correlate', detail: 'Request IDs' }
        ]
      },
      {
        id: 'load',
        title: 'Persist',
        caption: 'File-based log',
        nodes: [
          { id: 'ahl-file', label: 'File sink', detail: 'Append-only' },
          { id: 'ahl-rotate', label: 'Rotate', detail: 'Size / time' },
          { id: 'ahl-tail', label: 'Tail', detail: 'Live debugging' },
          { id: 'ahl-export', label: 'Export', detail: 'Audit trail' }
        ]
      }
    ],
    highlights: [
      {
        title: 'Tested',
        body: '100% Jest coverage with strict ESLint configuration.',
        icon: 'shield'
      },
      {
        title: 'Drop-in',
        body: 'Attach to any existing Axios instance with one line of config.',
        icon: 'spark'
      },
      {
        title: 'Safe',
        body: 'Header redaction keeps secrets out of log files by default.',
        icon: 'scale'
      },
      {
        title: 'Auditable',
        body: 'Persistent, structured records make incident review tractable.',
        icon: 'pulse'
      }
    ],
    stack: ['Node.js', 'TypeScript', 'Axios', 'Jest', 'ESLint', 'NPM'],
    repoUrl: 'https://www.npmjs.com/package/@ealforque/axios-http-logger'
  },
  {
    id: 'blueberry-etl',
    number: '12',
    title: 'Blueberry Markets Data Ingestion ETL Pipelines',
    org: 'Blueberry Markets · Python',
    date: '2022 — 2024',
    shortDate: '2022',
    description:
      'A suite of Python ETL pipelines ingesting marketing and trading data from external vendors into a Snowflake-backed analytics warehouse. Each pipeline handles authentication, paginated extraction, schema-safe transformation, and incremental loads on AWS infrastructure.',
    stack: ['Python', 'AWS EC2', 'AWS S3', 'Snowflake'],
    integrations: [
      'Google Ads API',
      'AdRoll',
      'Salesforce',
      'Facebook / Meta Ads',
      'MetaTrader'
    ],
    disciplines: [
      'Domain Driven Design',
      'Modular Distributed Architecture',
      'Service & Repository Design Pattern'
    ],
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-hotel-resort',
    number: '13',
    title: 'Hotel & Resort Management System',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'End-to-end property management for hotels and resorts — room inventory, reservations, check-in/out, folio billing, restaurant POS integration, and operational reporting for front-desk and back-office staff.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-assessment-centre',
    number: '14',
    title: 'Assessment Centre Management System',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'Scheduling and result management for candidate assessments — examination booking, proctor assignment, score capture, and consolidated reporting across centres.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-crew',
    number: '15',
    title: 'Crew Management System',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'Crew rostering, certification tracking, and deployment workflows — manages contracts, document expiries, and rotation schedules across vessels and projects.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-skin-clinic',
    number: '16',
    title: 'Skin Clinic Management System',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'Clinic operations platform covering patient records, appointment scheduling, treatment logs, prescriptions, and revenue reporting tailored for dermatology practices.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-delivery-collections',
    number: '17',
    title: 'Delivery & Collections Management System',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'Field operations system for dispatch routing, proof-of-delivery capture, and collections tracking — keeps drivers, dispatchers, and finance aligned on every drop and remittance.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-reviewer',
    number: '18',
    title: 'Reviewer Platform',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'Online reviewer for board exam preparation — timed mock exams, question bank delivery, performance analytics, and progress tracking for individual learners.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-lms',
    number: '19',
    title: 'Learning Management Platform',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'Course delivery, enrollment, and progress tracking — supports instructors with content authoring, assessments, and learner analytics across cohorts.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-vessel-monitoring',
    number: '20',
    title: 'Vessel Monitoring System',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'Operational dashboard for vessel tracking — voyage logs, location updates, alert thresholds, and consolidated fleet reporting for marine operators.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-dormitory',
    number: '21',
    title: 'Dormitory Management System',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'Resident lifecycle management — room assignments, occupancy, billing cycles, and maintenance request workflows for dormitory administrators.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-question-development',
    number: '22',
    title: 'Question Development System',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'Authoring and version-controlled repository for examination questions — supports collaborative review, categorization, and reuse across assessment programs.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  },
  {
    id: 'meridian-clinic-patient-profiling',
    number: '23',
    title: 'Clinic Patient Profiling System',
    org: 'Meridian SoftTech Solutions · PHP / Laravel',
    date: '2017 — 2021',
    shortDate: '2017',
    description:
      'Patient demographic, history, and visit profiling for general clinics — captures consultations, diagnoses, and follow-ups with role-based access for clinicians and reception staff.',
    stack: MERIDIAN_STACK,
    disciplines: MERIDIAN_DISCIPLINES,
    repoUrl: 'https://github.com/ealforque'
  }
]
