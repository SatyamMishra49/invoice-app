import Appbar from "../components/Appbar";
import Cards from "../components/Card";
import Footer from "../components/Footer";
import Addnotes from "./Addnotes";

export default function Dashboard() {

    return <div className="h-full">
        <Appbar />
        <div className="grid grid-cols-4 m-3.5 p-2.5">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </div>
        
        <Footer />
    </div>
}