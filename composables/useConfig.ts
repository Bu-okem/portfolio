export const useConfig = () => {
  const runtimeConfig = useRuntimeConfig();
  return {
    base: runtimeConfig.public.AIRTABLE_BASE_ID,
    projectsTableId: runtimeConfig.public.PROJECTS_TABLE_ID,
    experienceTableId: runtimeConfig.public.WORK_EXPERIENCE_TABLE_ID,
    featuredTableId: runtimeConfig.public.FEATURED_TABLE_ID,
    apiKey: runtimeConfig.public.API_TOKEN,
  };
};
