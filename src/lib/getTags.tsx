export default async function getProjects() {
  const resp = await fetch(`http://localhost:4500/projects`);
  if (!resp.ok) {
    throw new Error("failed to  fetch projects");
  }
  return await resp.json();
}
