export type MediaAsset = {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  page: string;
  section: string;
  aspectRatio: string;
  source: "owned" | "licensed" | "temporary" | "ai-generated";
  sourceUrl: string;
  licenseType: string;
  downloadedAt: string;
  approved: boolean;
};

export type ServicePackage = {
  slug: string;
  name: string;
  summary: string;
  price: string;
  estimate: string;
  revisions: string;
  renewal: string;
  warranty: string;
  assistLimit: string;
  assistActive: string;
  includes: string[];
  assistNotes: string[];
  domainHosting: string;
  constraints: string[];
};

export type PortfolioProject = {
  slug: string;
  name: string;
  label: string;
  projectType: string;
  industry: string;
  service: string;
  year: string;
  liveUrl?: string;
  summary: string;
  problem: string;
  goal: string;
  design: string;
  implementation: string;
  pages: string[];
  palette: string[];
  scope: string[];
  decisions: string[];
  stack: string[];
  screenshots: Array<{
    src: string;
    alt: string;
    label: string;
    width: number;
    height: number;
  }>;
  note: string;
};
