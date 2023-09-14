import Players from "./components/players";

function App() {
  return (
    <div className="bg-img h-screen">
      <div className="bg-gradient-to-r from-[rgba(200,0,0,0.3)] to-[rgba(0,200,0,0.3)] h-screen">
        <Players />
      </div>
    </div>
  );
}

export default App;
