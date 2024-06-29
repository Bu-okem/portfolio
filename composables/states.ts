export const useProjects = () => useState('projects', () => []);
export const useProjectsLoading = () => useState('projectsLoading', () => true);
export const useExperience = () => useState('experience', () => []);
export const useExperienceLoading = () =>
  useState('experienceLoading', () => true);
