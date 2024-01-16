import "./App.css";
import AddUser from "./components/addUser";
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="max-w-lg w-[60rem] rounded  flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">Pick users</h1>
        <div className="flex flex-row">
          <AddUser />
        </div>
        <div className="bg-blue-500 h-1 w-full relative"></div>
      </div>
    </div>
  );
}

export default App;
