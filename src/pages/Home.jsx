import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
    return (
        <div className="flex flex-col w-screen h-screen border focus:outline">
            <div className="h-24 bg-gradient-to-r from-blue-400 to-blue-800 xl:h-32">
                <Header />
            </div>
            <div className="flex-grow">
                <Outlet />
            </div>
            <div className="h-24 bg-gradient-to-t from-slate-800 to-slate-700 xl:h-32">
                <Footer />
            </div>
        </div>
    );
}
