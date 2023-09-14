import React, { useEffect, useState } from "react";
import Player from "./Player";
import Team from "./Team";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const loadPlayers = async () => {
      const res = await fetch("./players.json");
      const data = await res.json();
      setPlayers(data);
    };
    loadPlayers();
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:gap-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 basis-9/12">
        {players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <Team />
    </div>
  );
};

// players.propTypes = {};

export default Players;
