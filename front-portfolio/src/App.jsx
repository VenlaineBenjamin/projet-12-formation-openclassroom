import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About"; // Exemple de sous-route
import Home from "./pages/Home";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="about" element={<About />} />
                    {/* Ajoute d'autres sous-routes ici */}
                </Route>
            </Routes>
        </Router>
    );
}
