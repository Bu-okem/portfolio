import data from "../projects.json";
export default defineEventHandler((event) => {
	const { id } = event.context.params;

	let project = data[`${id}`];

	return project;
});
