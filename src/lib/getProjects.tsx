import axios from "axios";

export default async function getProjects() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/projects`
    );
    return response.data;
  } catch (error) {
    throw new Error("erro");
  }
}
