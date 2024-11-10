import { Route, HashRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<About />} />
                    <Route path="project" element={<Project />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
