import { FC } from "react";
import Card from "../ui/Card";
import { getAccessToken } from "@/lib/spotify";

interface SpotifySectionProps {}

const SpotifySection: FC<SpotifySectionProps> = async ({}) => {
  const clientId = "4cefcd30a65e4c6a8dfaf1518ef242a0";
  const access_token = await getAccessToken(clientId);
  if (access_token) {
    // await fetchProfile(accessToken);
  }

  return (
    <Card className="col-span-2 md:row-span-1 aspect-auto flex flex-col justify-center items-center">
      <h1>Display your Spotify profile data</h1>

      <section id="profile">
        <h2>
          Logged in as <span id="displayName"></span>
        </h2>
        <span id="avatar"></span>
        <ul>
          <li>
            User ID: <span id="id"></span>
          </li>
          <li>
            Email: <span id="email"></span>
          </li>
          <li>
            Spotify URI: <a id="uri" href="#"></a>
          </li>
          <li>
            Link: <a id="url" href="#"></a>
          </li>
          <li>
            Profile Image: <span id="imgUrl"></span>
          </li>
        </ul>
      </section>
    </Card>
  );
};

export default SpotifySection;
