export interface NavItem {
  title: string;
  path: string;
}

export interface ProjectProps {
  title: string;
  backgroundImage: string;
  href: string;
  overview: string;
  subtitle: string;
  technologies: string[];
  github: string;
}

export type Skill = {
  title: string;
  src: string;
  href: string;
};

export type NavBar = NavItem;
export type Project = ProjectProps;
