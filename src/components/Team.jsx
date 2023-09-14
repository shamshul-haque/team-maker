import React from "react";

const Team = ({ teamPlayers }) => {
  return (
    <div className="basis-3/12 border border-green-400 rounded-md p-5">
      <div className="text-white space-y-2">
        <h1 className="text-xl font-bold">Balance Sheet</h1>
        <p>Budget: $500000</p>
        <p>Cost:</p>
        <p>Remaining Balance:</p>
        <p>Total Cost:</p>
      </div>
      <div className="text-white mt-10 space-y-2">
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
