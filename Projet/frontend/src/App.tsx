import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CharacterPage />} />
      </Routes>
    </>
  );
}

export default App;
