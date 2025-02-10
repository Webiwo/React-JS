import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import SignIn from "./routes/SignIn/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="signIn" element={<SignIn />} />
    </Routes>
  );
};

export default App;
