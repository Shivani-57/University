import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-page" element={<Profile />} />
         </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
