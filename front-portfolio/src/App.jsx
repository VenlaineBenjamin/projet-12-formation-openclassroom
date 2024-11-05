import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About"; // Exemple de sous-route
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Constact";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<About />} />
                    <Route path="about" element={<About />} />
                    <Route path="project" element={<Project />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="contact" element={<Contact />} />
                    {/* Ajoute d'autres sous-routes ici */}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
