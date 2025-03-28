import { Routes, Route, Navigate } from "react-router";
import NewPost from "./components/NewPost/NewPost";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewPost />} />
        <Route path=":id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
