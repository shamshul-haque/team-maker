import Header from "./components/Header";
import Players from "./components/players";

function App() {
  return (
    <div className="bg-img bg-contain bg-no-repeat h-auto">
      <div className="bg-gradient-to-r from-[rgba(200,0,0,0.3)] to-[rgba(0,200,0,0.3)] h-auto px-5 md:px-20">
        <Header />
        <Players />
      </div>
    </div>
  );
}

export default App;
