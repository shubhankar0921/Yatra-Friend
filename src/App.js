import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import UserInfo from "./components/UserInfo";
import Questions from "./components/Question";
import Question2 from "./components/Question2";
import Matches from "./components/Matches";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/details" element={<UserInfo/>}>
        </Route>
        <Route path="/questions" element={<Questions/>}>
        </Route>
        <Route path="/email" element={<Question2/>}>
        </Route>
        <Route path="/matches" element={<Matches/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;