const API_URL = import.meta.env.VITE_API_URL;

// Retrieve project data from the backend API
export async function getProjects() {
  const response = await fetch(`${API_URL}/api/projects`);

  // Check API request was successful
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

// Retrieve technology data from the backend API
export async function getTechnologies() {
  const response = await fetch(`${API_URL}/api/technologies`);

  // Check API request was successful
  if (!response.ok) {
    throw new Error("Failed to fetch technologies");
  }

  return response.json();
}