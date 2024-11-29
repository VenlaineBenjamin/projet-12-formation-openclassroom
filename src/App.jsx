import { Route, HashRouter as Router, Routes } from "react-router-dom";
// Importing page components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

// Main application component
export default function App() {
    return (
        <Router>
            {/* Define application routes */}
            <Routes>
                {/* Main route with nested components */}
                <Route path="/" element={<Home />}>
                    {/* Default nested route - displays "About" when the user navigates to the root */}
                    <Route index element={<About />} />
                    {/* Additional nested routes for different sections */}
                    <Route path="project" element={<Project />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="contact" element={<Contact />} />
                </Route>

                {/* Fallback route for undefined paths */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
