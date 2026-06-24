import LoginPanel from "./components/Login/Login"
import RegisterPanel from "./components/Register/Register"
import Dealer from './components/Dealers/Dealers';
import PostReview from "./components/Dealers/PostReview"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      Route
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/dealer/:id" element={<Dealer />} />
      <Route path="/postreview/:id" element={<PostReview />} />
    </Routes>
  );
}
export default App;
