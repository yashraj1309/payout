import './App.css'
import Navbar from "./components/Navbar";
import DeshboardHeader from "./components/DeshboardHeader";
import DashboardMain from './components/DashboardMain';
import Transactions from './components/Transactions';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <DeshboardHeader/>
        <DashboardMain/>
        <Transactions/>
      </div>
    </div>
  );
}

export default App;
