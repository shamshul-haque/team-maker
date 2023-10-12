import React from "react";

const Team = ({ teamPlayers }) => {
  return (
    <div className="basis-3/12 border border-green-400 rounded-md p-5">
      <div className="text-white space-y-2">
        <h1 className="text-xl font-bold">Player List: {teamPlayers.length}</h1>
        <ol className="space-y-2">
          {teamPlayers.map((player) => (
            <li>{player.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Team;
