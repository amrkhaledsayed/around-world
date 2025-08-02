import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorldView from "./pages/WorldView";
import DetailsPage from "./pages/detailsPage";
import AllCountry from "./pages/AllCountry";
import NoPage from "./components/Nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorldView />}>
          <Route index element={<AllCountry />} />
          <Route path=":country" element={<DetailsPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
