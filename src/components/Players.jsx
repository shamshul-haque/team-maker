import { useEffect, useState } from "react";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const loadPlayers = async () => {
      const res = await fetch("./players.json");
      const data = await res.json();
      console.log(data);
    };
    loadPlayers();
  }, []);

  return (
    <div>
      <h1 className="text-white">players</h1>
    </div>
  );
};

// players.propTypes = {};

export default Players;
