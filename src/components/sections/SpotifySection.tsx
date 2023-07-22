"use client";
import { FC, useEffect, useState } from "react";
import Card from "../ui/Card";
import getNowPlayingItem from "@/pages/api/spotify";

interface SpotifySectionProps {}

const SpotifySection: FC<SpotifySectionProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([getNowPlayingItem()]).then((results) => {
      console.log(result);
      setResult(results[0]);
      setLoading(false);
    });
  });

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
