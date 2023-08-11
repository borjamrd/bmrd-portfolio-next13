import axios from "axios";

export default async function getDiscordStatus() {
  try {
    const response = await axios.get(
      `https://api.lanyard.rest/v1/users/${process.env.DISCORD_ID}`
    );
    return response.data;
  } catch (error) {
    throw new Error("discord status failed");
  }
}
