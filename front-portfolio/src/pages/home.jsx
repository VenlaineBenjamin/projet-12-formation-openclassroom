import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen border focus:outline">
            <div className="h-24 bg-primary xl:h-32">
                <Header />
            </div>
            <div className="flex-grow">
                <Outlet />
            </div>
            <div className="h-24 bg-slate-700 xl:h-32">
                <Footer />
            </div>
        </div>
    );
}
