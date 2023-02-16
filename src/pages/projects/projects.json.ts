import type { APIRoute } from "astro";

type FrontmatterType = {
  title: string;
  description: string;
  stack: string;
  imageUrl: string;
  featured: boolean;
};

type SoloFrontmatterType = {
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
  featured: boolean;
};

type ProjectFileType = {
  frontmatter: FrontmatterType;
};
const getFrontmatter = (p: ProjectFileType): SoloFrontmatterType => {
  const frontmatter = p.frontmatter;
  const stack = frontmatter.stack.split(",");
  return { ...frontmatter, stack };
};

const getAllProjects = async () => {
  // Get all projects listed in src/content/projects
  const projects = import.meta.glob("../../content/projects/*.md");
  const items = await Promise.all(Object.values(projects).map((p) => p()));
  const allProjects = items.map((p) => getFrontmatter(p as ProjectFileType));
  return allProjects;
};

export const get: APIRoute = async () => {
  const projects = await getAllProjects();
  return {
    body: JSON.stringify({ projects }),
  };
};
