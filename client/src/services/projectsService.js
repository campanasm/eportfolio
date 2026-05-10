import api from "./api";

export const getProjects = async () => {
  const response = await api.get("http://localhost:3001/api/projects");
  return response.data;
};