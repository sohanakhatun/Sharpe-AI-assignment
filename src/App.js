
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Transactions from "./Pages/Transactions";
import Data from "./Pages/Data";

function App() {
  
 return(
    <div>
   
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/transactions" element={<Transactions/>}/>
            <Route path="/data" element={<Data userId={1}/>}/>
        </Routes>
    </div>
 )
  
}

export default App;
