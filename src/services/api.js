const API_URL = import.meta.env.VITE_API_URL;

export async function getProjects() {
  const response = await fetch(`${API_URL}/api/projects`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

export async function getTechnologies() {
  const response = await fetch(`${API_URL}/api/technologies`);

  if (!response.ok) {
    throw new Error("Failed to fetch technologies");
  }

  return response.json();
}