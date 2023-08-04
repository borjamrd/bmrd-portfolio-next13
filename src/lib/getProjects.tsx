import { Project } from "@/app/projects/page";
import axios from "axios";
import { AxiosResponse } from "axios";

export default async function getProjects() {
  try {
    const response = await axios.get(`${process.env.API_URL}/projects`);
    return response.data;
  } catch (error) {
    throw new Error("erro");
  }
  // const resp = await fetch(`${process.env.API_URL}/projects`);
  // if (!resp.ok) {
  //   throw new Error("failed to  fetch projects");
  // }
  // return await resp.json();
}
