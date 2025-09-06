export interface Project {
  name: string;
  logo: string;
  description: string;
  techStack: string[];
  mockups: {
    desktop: string;
    mobile: string;
  };
  liveLink: string;
  repoLink: string;
}
