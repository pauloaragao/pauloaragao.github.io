import pauloPerfil from '../img/paulo-perfil.png';

export const profile = {
  name: 'Paulo Aragão',
  title: 'Senior Cloud Engineer | Cloud Architect',
  tagline: 'Senior Cloud Engineer | Cloud Architect | Technical Leadership | Observability & Platform Engineering | Azure • AWS • GCP',
  email: 'eng.pauloaragao@gmail.com',
  location: 'Rio de Janeiro, Brazil',
  github: 'https://github.com/pauloaragao',
  linkedin: 'https://www.linkedin.com/in/pauloaragaoo/',
  avatar: pauloPerfil,
};

export const about = `Engenheiro DevOps e Arquiteto de Soluções especializado em infraestrutura em nuvem, observabilidade e viabilização de CI/CD. Possui experiência prática no design e implantação de monitoramento com Dynatrace e OpenTelemetry em aplicações e plataformas, alinhando telemetria técnica com métricas de negócio.

Especialista em Kubernetes (EKS), automação com Terraform/Ansible e plataformas de nuvem (AWS, Azure, GCP) para melhorar a confiabilidade, o desempenho e a repetibilidade de implantações. Experiente em mentorar equipes multifuncionais em toolchains de DevOps e práticas Scrum para escalar a entrega e a prontidão operacional.`;

export const experiences = [
  {
    id: 1,
    role: 'Solutions Coordinator I',
    company: 'Capgemini',
    period: 'fev 2026 – Presente',
    location: 'Remoto',
    description: [
      'Liderança técnica de equipes de alta performance com foco em desenvolvimento de carreira, 1:1s e revisões de desempenho',
      'Gestão de capacidade, custos e distribuição de carga de trabalho para excelência operacional',
      'Arquitetura e implementação de custom actions no Backstage IDP com foco em auditoria, governança e experiência do desenvolvedor',
    ],
  },
  {
    id: 2,
    role: 'System Solutions Architect I',
    company: 'Capgemini',
    period: 'mar 2025 – mar 2026',
    location: 'Remoto',
    description: [
      'Modelagem e design de iniciativas de Observabilidade Técnica e de Negócio em ambiente bancário tradicional',
      'Aplicação de boas práticas de DevOps e modernização de soluções de ingestão de dados',
      'Foco em AI observability e desenvolvimento de agentes de IA para confiabilidade e eficiência operacional',
    ],
  },
  {
    id: 3,
    role: 'Custom Solutions Architect I',
    company: 'Capgemini',
    period: 'jun 2022 – mar 2025',
    location: 'Remoto',
    description: [
      'Implementação de observabilidade técnica e de negócio com Dynatrace, Grafana e Elasticsearch',
      'Desenvolvimento de serviços em Python e modernização de ambientes cloud (AWS e Azure)',
      'Referência interna em cultura de documentação e melhoria contínua de processos',
    ],
  },
];

export const skills = {
  'Cloud & Infra': ['AWS', 'Azure', 'GCP', 'Kubernetes (EKS)', 'Terraform', 'Ansible', 'Docker'],
  'Observabilidade': ['Dynatrace', 'OpenTelemetry', 'Grafana', 'Elasticsearch', 'Prometheus'],
  'DevOps & Platform': ['CI/CD', 'Backstage IDP', 'Git', 'Linux', 'Scrum', 'Kanban'],
  'Desenvolvimento': ['Python', 'REST APIs', 'AI Agents', 'Automation'],
};

export const education = [
  {
    id: 1,
    degree: 'Engenharia de Computação',
    institution: 'Universidade Federal de Sergipe',
    period: '2016 – 2021',
  },
  {
    id: 2,
    degree: 'Técnico em Eletrônica',
    institution: 'IFS – Instituto Federal de Sergipe',
    period: '2011 – 2014',
  },
];

export const certifications = [
  { id: 1, name: 'Dynatrace Essentials', issuer: 'Dynatrace', year: '2026' },
  { id: 2, name: 'Google Cloud Digital Leader', issuer: 'Google', year: '2026' },
  { id: 3, name: 'Capgemini Certified Architect L1', issuer: 'Capgemini', year: '2026' },
  { id: 4, name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', year: '2026' },
  { id: 5, name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2025' },
  { id: 6, name: 'Microsoft Certified: Azure Data Fundamentals', issuer: 'Microsoft', year: '2024' },
  { id: 7, name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', year: '2024' },
  { id: 8, name: 'Microsoft Certified: Azure AI Fundamentals', issuer: 'Microsoft', year: '2024' },
];

export const projects = [
  {
    id: 1,
    title: 'Barros & Favacho Advocacia',
    description: 'Site institucional para escritório de advocacia no Rio de Janeiro. Desenvolvimento completo do front-end com foco em design profissional, responsividade e experiência do usuário.',
    url: 'https://www.barrosefavacho.adv.br/',
    github: null,
    tags: ['Web', 'Front-End', 'Design', 'Responsivo'],
  },
];
