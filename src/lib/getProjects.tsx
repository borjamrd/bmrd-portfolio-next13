export default async function getProjects() {
  const resp = await fetch(
    `https://angularportfolioserver-production.up.railway.app/projects`
  );
  console.log(resp);
  if (!resp.ok) {
    throw new Error("failed to  fetch projects");
  }
  return await resp.json();
}
