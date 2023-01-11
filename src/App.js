import Note from "./components/Note";
import MemeApp from "./components/MemeApp";
import Recipe from "./components/Recipe";
import RecipeItself from "./components/RecipeItself";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Laptop from "./components/Laptop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react_laptop" element={<Laptop />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/recipes/:id" element={<RecipeItself />} />
        <Route path="/note" element={<Note />} />
        <Route path="/meme" element={<MemeApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
