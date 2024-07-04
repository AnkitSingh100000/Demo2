import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Screens/Home";
function App()
{
return(<div>
  <Router>
  <Routes>
    <Route exact element={<Home/>} path="/home"/>
  </Routes>
  </Router>
  </div>)
}


export default App;
