import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

// Main layout component for the application
export default function Home() {
    return (
        <div className="flex flex-col h-screen border focus:outline-none">
            {/* Header section: occupies fixed height, responsive styles for larger screens */}
            <div className="h-24 bg-gradient-to-r from-blue-400 to-blue-800 xl:h-32">
                <Header />
            </div>

            {/* Dynamic content section: grows to fill the available space */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer section: occupies fixed height, responsive styles for larger screens */}
            <footer className="h-24 bg-gradient-to-t from-slate-800 to-slate-700 xl:h-32">
                <Footer />
            </footer>
        </div>
    );
}
