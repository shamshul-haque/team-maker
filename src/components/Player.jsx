import { AiOutlineInfoCircle } from "react-icons/ai";

const Player = ({ player }) => {
  const { name, age, country, img, role, base_price } = player;
  return (
    <div className="border border-red-400 rounded-md p-5 relative">
      <img src={img} alt={name} className="h-40 w-full rounded-md" />
      <div className="text-center text-white space-y-1 mt-5">
        <h1 className="font-bold text-xl">{name}</h1>
        <p>Role: {role}</p>
        <p>Base Price: {base_price}</p>
        <button className="bg-[rgba(0,200,0,0.5)] px-4 py-2 rounded-md hover:bg-[rgba(200,0,0,0.5)]">
          Select
        </button>
      </div>
      <div>
        <AiOutlineInfoCircle className="absolute text-2xl text-white top-7 right-7 cursor-pointer" />
      </div>
    </div>
  );
};

export default Player;
