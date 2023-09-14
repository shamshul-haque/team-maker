// import "./App.css";
import Header from "./components/Header";
import Players from "./components/players";

function App() {
  return (
    <div className="bg-img bg-fixed bg-cover">
      <div className="bg-gradient-to-r from-[rgba(200,0,0,0.3)] to-[rgba(0,200,0,0.3)] overflow-auto p-5 md:p-20">
        <Header />
        <Players />
      </div>
    </div>
  );
}

export default App;
