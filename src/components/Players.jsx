import React, { useEffect, useState } from "react";
import Player from "./Player";
import Team from "./Team";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    const loadPlayers = async () => {
      const res = await fetch("./players.json");
      const data = await res.json();
      setPlayers(data);
    };
    loadPlayers();
  }, []);

  const handleSelection = (player) => {
    const myTeam = [...teamPlayers, player];
    setTeamPlayers(myTeam);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 basis-9/12">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            handleSelection={handleSelection}
          />
        ))}
      </div>
      <Team teamPlayers={teamPlayers} />
    </div>
  );
};

export default Players;
