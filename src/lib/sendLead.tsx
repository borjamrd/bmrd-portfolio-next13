import axios from "axios";
import { use, useState } from "react";
// `${process.env.API_URL}/leads/lead`

export interface Lead {
  name: string;
  lastname: string;
  email: number;
}
export function usePostLead() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const url = `${process.env.API_URL}/leads/lead`;

  const postData = async (url: string, body: Lead) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, body);
      console.log(response);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      setError(error);
      throw error; // Rethrow the error so the component can catch it if needed.
    }
  };

  return { isLoading, error, postData };
}

export default usePostLead;
